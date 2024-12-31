'use client';

import BlogDetails from '@/components/BlogDetails';
import { useEffect, useState } from 'react';

interface Blog {
  id: number;
  title: string;
  content: string;
  image: string;
}

const BlogPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const [blogData, setBlogData] = useState<Blog | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [id, setId] = useState<string | null>(null);

  // Unwrap `params` inside a useEffect
  useEffect(() => {
    const resolveParams = async () => {
      try {
        const resolvedParams = await params;
        setId(resolvedParams.id); // Set the `id` after unwrapping params
      } catch (err) {
        setError('Failed to unwrap params');
        console.error('Error unwrapping params:', err);
      }
    };

    resolveParams();
  }, [params]);

  // Fetch blog data after `id` is set
  useEffect(() => {
    if (!id) return;

    const fetchBlogData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog data');
        }
        const data = await response.json();
        setBlogData({
          id: data.id,
          title: data.title,
          content: data.description, 
          image: data.image,
        });
      } catch (err) {
        setError('Error fetching blog data');
        console.error('Error details:', err);
      }
    };

    fetchBlogData();
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!blogData) return <div>Loading...</div>;

  return <BlogDetails blog={blogData} />;
};

export default BlogPage;
