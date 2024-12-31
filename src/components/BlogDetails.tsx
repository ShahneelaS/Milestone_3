'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Blog {
  id: number;
  title: string;
  content: string;
  image: string; 
}

interface BlogDetailsProps {
  blog: Blog;
}

const BlogDetails: React.FC<BlogDetailsProps> = ({ blog }) => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments((prevComments) => [...prevComments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-lime-200">
      <div className="flex-grow max-w-3xl mx-auto my-8 p-4 border rounded shadow-lg bg-lime-100">
        {/* Blog Details */}
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <Image
          src={blog.image}
          alt={blog.title}
          width={800} // Adjust as needed
          height={450} // Adjust as needed
          className="w-full h-auto object-cover rounded mb-4"
        />
        <p className="text-gray-700 mb-6">{blog.content}</p>

        {/* Comments Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Comments</h2>
          {comments.length > 0 ? (
            <ul className="space-y-2">
              {comments.map((comment, index) => (
                <li key={index} className="bg-gray-100 p-2 rounded">
                  {comment}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
          )}
          <div className="mt-4">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full bg-lime-50 p-2 border rounded"
              placeholder="Add a comment..."
            ></textarea>
            <button
              onClick={handleAddComment}
              className="mt-2 bg-lime-800 hover:bg-lime-600 text-white px-4 py-2 rounded"
            >
              Add Comment
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-lime-700 text-white text-center py-4 mt-auto">
        <p className="text-sm">
        &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default BlogDetails;
