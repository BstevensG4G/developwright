import { useState, useEffect } from 'react';
// import EditPost from './editPost';

// 1. Define an interface for the shape of a single blog post
interface BlogPost {
  id: number;
  title: string;
  content: string;
}
//const [popupWindow, setPopupWindow] = useState<Window | null>(null);

// const openEditForm = () => {
//   const newWindow = window.open('/editPost', '_blank', 'width=600,height=400');
//   //setPopupWindow(newWindow);
// };

const BlogPosts: React.FC = () => {
  // 2. Specify the type for the 'posts' state
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  // 3. Specify the type for the 'error' state
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5272/posts');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        // 4. Assert the type of the response data
        const data: BlogPost[] = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (err: unknown) { // Use 'unknown' for the caught error type
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred.');
        }
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array ensures the effect runs only once

  if (loading) {
    return <p>Loading blog posts...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          { <h3>{post.title}</h3> }
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
