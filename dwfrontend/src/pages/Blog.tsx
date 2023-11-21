import React, { useEffect, useState } from 'react'

import '../assets/index.css'
import BlogPost from '../components/blogposts'

export interface IBlogPageProps {}

const BlogPage: React.FunctionComponent<IBlogPageProps> = () => {
    //const [BlogPost, setBlogPost] = useState([])
    const [posts, setPosts] = useState([])
    const fetchBlogData = () => {
        fetch('http://localhost:5000/posts')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setPosts(data)
            })
    }
    useEffect(() => {
        fetchBlogData()
      }, [])

    return (
        <div className="blogPage">
        <h1>A Software Engineering Blog</h1>
        <div>
            <p>Notes and experiences with regards to becoming a more knowledgable and proficient
                Software Engineer.
            </p>
        </div>
        {posts.length > 0 && (
        <ul>
          {/* {posts.map(post => (
           // <li key={post.id}>{post.title}{post.content}</li>
          ))} */}
        </ul>
        )}
        <BlogPost />
        </div>

    )
}
export default BlogPage
{/* <Route path=":number" element={<AboutPage />} /> */}