import Layout from '@components/Layout'
import { GetStaticProps } from 'next'
import { readdirSync, readFileSync } from 'fs'
import React from 'react'
import matter from 'gray-matter'
import { join } from 'path'
import { IPost } from '@interfaces/post.interface'
import Link from 'next/link'
import { Routes } from '@components/Header'
import Posts from '@components/Posts'

const Home: React.FC<IHomeProps> = ({ posts }) => {
	return (
		<Layout>
			<h1 className="text-5xl border-b-4 p-5 font-bold">Latest Posts</h1>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
				{posts.map((post, index) => (
					<Posts slug={post.slug} key={index} post={post.frontMatter} />
				))}
				<Link href={Routes.blog}>
					<a className=""></a>
				</Link>
			</div>
		</Layout>
	)
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const getStaticProps: GetStaticProps<IHomeProps> = () => {
	const postsFolder = 'posts'
	const posts = readdirSync(postsFolder).map(filename => {
		const slug = filename.replace('.md', '')
		const { data: frontMatter } = matter(readFileSync(join(postsFolder, filename)))
		return {
			slug,
			frontMatter
		}
	})
	return {
		props: {
			posts
		}
	}
}

interface IHomeProps {
	posts: {
		slug: string
		frontMatter: IPost
	}[]
}

export default Home
