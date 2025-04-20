import Home from '@/components/Home/Home';
import fetchAndParsePosts from '@/lib/content';

export default async function HomePage() {
  const posts = await fetchAndParsePosts();
  return <Home posts={posts} />;
}
