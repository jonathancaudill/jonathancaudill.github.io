import { remark } from 'remark';
import html from 'remark-html';
import { format, parseISO } from 'date-fns';
import { posts as staticPosts } from '@/data/posts';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import remarkSlug from 'remark-slug';
import remarkToc from 'remark-toc';

// Import markdown files directly
import reactPost from '../content/blog/getting-started-with-react.md?raw';
import webDevPost from '../content/blog/future-of-web-development.md?raw';
import cssPost from '../content/blog/css-tips-and-tricks.md?raw';

export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  slug: string;
  readingTime: number;
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

function parseFrontmatter(content: string) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    throw new Error('No frontmatter found');
  }
  
  const [, frontmatter, markdownContent] = match;
  const data: Record<string, string> = {};
  
  frontmatter.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      data[key.trim()] = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
    }
  });
  
  return { data, content: markdownContent };
}

function formatDate(dateString: string): string {
  try {
    const date = parseISO(dateString);
    return format(date, "MMMM d, yyyy");
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  console.log('Getting post by slug:', slug);
  
  try {
    let content: string;
    switch (slug) {
      case 'getting-started-with-react':
        content = reactPost;
        break;
      case 'future-of-web-development':
        content = webDevPost;
        break;
      case 'css-tips-and-tricks':
        content = cssPost;
        break;
      default:
        console.log('No post found for slug:', slug);
        return null;
    }
    
    console.log('Post content loaded:', content.substring(0, 100) + '...');
    const { data, content: markdownContent } = parseFrontmatter(content);
    
    const processedContent = await remark()
      .use(remarkGfm)
      .use(html)
      .process(markdownContent);
    
    // Find the corresponding static post to get the correct date
    const staticPost = staticPosts.find(p => p.slug === slug);
    
    return {
      id: staticPost?.id ?? 0,
      title: data.title,
      excerpt: data.excerpt,
      content: processedContent.toString(),
      date: staticPost?.date ?? data.date,
      slug: slug,
      readingTime: staticPost?.readingTime ?? calculateReadingTime(markdownContent)
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export async function getAllPosts(): Promise<Post[]> {
  console.log('Getting all posts...');
  try {
    const posts = [
      { content: reactPost, slug: 'getting-started-with-react' },
      { content: webDevPost, slug: 'future-of-web-development' },
      { content: cssPost, slug: 'css-tips-and-tricks' }
    ];
    
    const allPostsData = await Promise.all(
      posts.map(async ({ content, slug }, index) => {
        console.log('Processing post:', slug);
        const { data, content: markdownContent } = parseFrontmatter(content);
        
        const processedContent = await remark()
          .use(remarkGfm)
          .use(html)
          .process(markdownContent);
        
        // Find the corresponding static post to get the correct date
        const staticPost = staticPosts.find(p => p.slug === slug);
        
        return {
          id: staticPost?.id ?? index + 1,
          title: data.title,
          excerpt: data.excerpt,
          content: processedContent.toString(),
          date: staticPost?.date ?? data.date,
          slug: slug,
          readingTime: staticPost?.readingTime ?? calculateReadingTime(markdownContent)
        };
      })
    );
    
    console.log('All posts processed:', allPostsData);
    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.error('Error reading posts:', error);
    return [];
  }
} 