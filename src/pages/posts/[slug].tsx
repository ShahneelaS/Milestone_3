import { useRouter } from 'next/router';

type Post = {
  id: number;
  title: string;
  body: string;
};

const PostPage = ({ post }: { post: Post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export async function getStaticPaths() {
  try {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());
    const paths = posts.map((post: Post) => ({
      params: { slug: post.id.toString() },
    }));

    return {
      paths,
      fallback: true, 
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      paths: [],
      fallback: true, 
    };
  }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`);
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }
    const post = await response.json();
    return {
      props: { post },
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return {
      props: { post: null },
    };
  }
}

export default PostPage;
