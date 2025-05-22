
import { useParams, Link } from "react-router-dom";
import { posts } from "@/data/posts";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const WritingDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState(posts.find((p) => p.slug === slug));

  useEffect(() => {
    setPost(posts.find((p) => p.slug === slug));
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen pt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Post not found</h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">The post you're looking for doesn't exist.</p>
            <div className="mt-8">
              <Link to="/writing">
                <Button>Back to all posts</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <Link to="/writing">
            <Button variant="ghost" className="mb-8 pl-0 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
              <ArrowLeft size={16} className="mr-2" />
              Back to all posts
            </Button>
          </Link>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{post.title}</h1>
              <p className="text-gray-500 dark:text-gray-400">{post.date}</p>
            </div>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritingDetail;
