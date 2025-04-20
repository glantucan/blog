import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const GITHUB_REPO_URL = 'https://api.github.com/repos/glantucan/blog-posts';
const POSTS_FOLDER = 'posts';

const API_KEY = process.env.GITHUB_API_KEY;

export default async function fetchAndParsePosts() {
  const posts = await fetchContentFromGitHub();
  const parsedPosts = [];
  for (const post of posts) {
    const { data, content } = matter(post);

    const htmlContent = await parseMarkdownToHtml(content);
    const readingTime = calculateReadingTime(content);

    let featuredImages;
    if (data.featuredImages) {
      featuredImages = data.featuredImages.map(
        img =>
          `https://raw.githubusercontent.com/glantucan/blog-posts/main/${process.env.IMAGES_FOLDER}/posts/${post.name.replace('.md', '')}/${img}`
      );
    }
    // Extract first paragraph as excerpt
    const excerptMatch = htmlContent.match(/<p>(.*?)<\/p>/);
    const excerpt = excerptMatch ? excerptMatch[1] : '';
    parsedPosts.push({
      ...data,
      featuredImages,
      slug: post.name.replace('.md', ''),
      excerpt,
      content: htmlContent,
      readingTime,
    });
  }

  return parsedPosts;
}

async function fetchContentFromGitHub() {
  const { GITHUB_REPO_URL: repoUrl, POSTS_FOLDER: postsFolder } = process.env;
  const res = await fetch(`${repoUrl}/contents/${postsFolder}`, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'glantucan',
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch posts list: ${res.statusText}`);
  }

  const files = await res.json();
  const markdownFiles = files.filter(file => file.name.endsWith('.md'));
  const posts = await Promise.all(
    markdownFiles.map(async file => {
      const contentRes = await fetch(file.download_url);
      if (!contentRes.ok) {
        throw new Error(`Failed to fetch ${file.name}: ${contentRes.statusText}`);
      }
      const content = await contentRes.text();
      return {
        name: file.name,
        content,
      };
    })
  );
  return posts;
}

async function parseMarkdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

function calculateReadingTime(text) {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  const minutes = wordCount / wordsPerMinute;
  return Math.ceil(minutes);
}
