'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Blog {
  id: number;
  title: string;
}

interface ApiBlog {
  id: number;
  title: string;
  
}

const BlogListPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data: ApiBlog[] = await response.json();
        setBlogs(data.map((item) => ({ id: item.id, title: item.title }))); 
      } catch (err) {
        setError('Error fetching blogs');
        console.error('Error details:', err);
      }
    };

    fetchBlogs();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div className="min-h-screen flex flex-col bg-lime-200">
      <div className="p-8 flex-grow">
        <h1 className="text-3xl font-bold mb-6">Blogs</h1>
        <ul className="space-y-4">
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`} className="text-blue-800 hover:underline">
                {blog.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <footer className="bg-lime-700 text-white text-center py-4 mt-auto">
        <p className="text-sm">
        &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default BlogListPage;
