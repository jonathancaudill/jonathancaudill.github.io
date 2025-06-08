import { Post } from "@/data/posts";
import { format } from "date-fns";

interface BlogPostProps {
  post: Post;
}

const BlogPost = ({ post }: BlogPostProps) => {
  const formattedDate = format(new Date(post.date), "MMMM d, yyyy");

  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
          <time dateTime={post.date}>{formattedDate}</time>
          <span>•</span>
          <span>{post.readingTime} min read</span>
        </div>
      </header>
      
      <div 
        className="prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
                   prose-p:text-gray-600 dark:prose-p:text-gray-300
                   prose-a:text-indigo-600 dark:prose-a:text-indigo-400
                   prose-code:text-indigo-600 dark:prose-code:text-indigo-400
                   prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800
                   prose-pre:text-gray-800 dark:prose-pre:text-gray-200
                   prose-blockquote:border-l-indigo-500
                   prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-300
                   prose-img:rounded-lg prose-img:shadow-lg"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
};

export default BlogPost; 