import React from 'react'   

import '../assets/index.css'

export interface IBlogPostProps {}

const BlogPost: React.FunctionComponent<IBlogPostProps> = () => {
    // const navigate = useNavigate()
    return (
        <div className="blogPost">
            <h2>BlogPost Title</h2>
            <h3>BlogSection Heading</h3>
            <p>BlogPost Content this would be great if it can contain markup, so that I can place 
            UML diagrams and other markup.</p>
            <p>This will also need to be stored and pulled from a postgres database.</p>

        </div>
    );
};

export default BlogPost