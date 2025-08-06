import React from 'react'

import '../assets/index.css'
import BlogPosts from '../components/listPosts'

export interface IBlogPageProps {}

const BlogPage: React.FunctionComponent<IBlogPageProps> = () => {
    return (
        <div className="blog">
            <h2>A Software Engineering Blog</h2>
            <div>
                <p>Notes and experiences with regards to becoming a more knowledgable and proficient
                    Software Engineer.
                </p>
            </div>
            <BlogPosts />
        </div>

    )
}
export default BlogPage
