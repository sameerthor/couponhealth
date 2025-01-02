import "@/styles/blogs.css";
import Image from 'next/image'
import _ from 'lodash'
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import Link from "next/link";
const limit = 2
function blogCategory({ allPosts, category }) {
    const [pageNumber, setPageNumber] = useState(1)
    const [posts, setPosts] = useState(allPosts.slice(0, limit))
    return (
        <>
            <NextSeo
                title={category.meta_title}
                description={category.meta_description}
            />
            <section className="blog-listing-page">
                <div className="container">
                    <div className="row">
                        <div className="breadcrumb">
                            <ul>
                                <li>
                                    <a href="/">supercosts.com</a> /
                                </li>
                                <li>blogs</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="blog-cat">
                        <h1>Category: {category.title}</h1>
                    </div>
                    <div className="list-blog">
                        {posts.map((item, index) =>
                            <div className="listingItem" key={index}>
                                <h2 className="listingTitle">
                                    <Link href={`/blog/${item.slug}`}>
                                        {item.title}
                                    </Link>
                                </h2>
                                <div className="listingImage">
                                    <Link href={`/blog/${item.slug}`}>
                                        <img src={`${item.image}`} alt="" />
                                    </Link>
                                </div>
                                <div className="blogDesc" dangerouslySetInnerHTML={
                                    { __html: item.body }} >

                                </div>
                            </div>
                        )}
                        <div className="pagination">
                            <ul>
                                {pageNumber !== 1 &&
                                    <li>
                                        <a href="javascript:void(0)" onClick={() => {setPosts(allPosts.slice((pageNumber-2)*limit, (pageNumber-1)*limit));setPageNumber(pageNumber - 1)}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-left" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                <path fillRule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                            </svg>
                                        </a>
                                    </li>
                                }
                                {(() => {
                                    const arr = [];
                                    for (let i = 1; i <= Math.ceil((allPosts.length / limit)); i++) {
                                        arr.push(
                                            <li key={i} >
                                                <a href="javascript:void(0)" onClick={() => {setPageNumber(i);setPosts(allPosts.slice((i-1)*limit, i*limit))}} className={i == pageNumber ? 'active' : ''}>
                                                    {i}
                                                </a>
                                            </li>
                                        );
                                    }
                                    return arr;
                                })()}
                                {(pageNumber !== Math.ceil((allPosts.length / limit)) && allPosts.length !== 0) &&
                                    <li>
                                        <a href="javascript:void(0)" onClick={() => {setPosts(allPosts.slice((pageNumber)*limit, (pageNumber+1)*limit));setPageNumber(pageNumber + 1)}}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="bi bi-chevron-double-right"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                }
                            </ul>
                        </div>
                    </div>

                </div>
            </section>


        </>

    )
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps({ params }) {
    const cat = await fetch(`https://backend.supercosts.com/post-categories/${params.slug}`)
    const category = await cat.json()
    if (category.detail) {
        return {
            notFound: true
        };
    }
    const res = await fetch(`https://backend.supercosts.com/posts?search=${params.slug}&ordering=-id`)
    const allPosts = await res.json()

    return {
        props: {
            allPosts,
            category
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    }
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
    const res = await fetch('https://backend.supercosts.com/post-categories')
    const categories = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = categories.map((item) => ({
        params: { slug: item.slug },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: 'blocking' } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: 'blocking' }
}

export default blogCategory