import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Routes } from '@commons/index'

const Header: FC = () => {
	return (
		<header className="bg-gray-900 text-gray-100 shadow w-full">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<Link href={Routes.home}>
					<a className="flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0">
						<Image src={'/images/logo.png'} width={40} height={40} alt="DevSpace logo" />
						<span className="text-xl ml-3 text-white">DevSpace</span>
					</a>
				</Link>
				<nav className="flex  flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto">
					<Link href={Routes.blog}>
						<a className="mx-5 cursor-pointer text-white uppercase hover:text-indigo-300 hover:font-bold">Blog</a>
					</Link>
					<Link href={Routes.about}>
						<a className="mx-5 cursor-pointer text-white uppercase hover:text-indigo-300 hover:font-bold">About</a>
					</Link>
				</nav>
			</div>
		</header>
	)
}

export default Header
