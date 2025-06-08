import { useParams, Link } from "react-router-dom";
import { getPostBySlug } from "@/lib/markdown";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import BlogPost from "@/components/BlogPost";
import GradientBackground from "@/components/GradientBackground";

const WritingDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Awaited<ReturnType<typeof getPostBySlug>>>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) return;
      
      try {
        const postData = await getPostBySlug(slug);
        setPost(postData);
      } catch (error) {
        console.error("Error loading post:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="relative min-h-screen">
        <GradientBackground />
        <div className="relative">
          <div className="container max-w-3xl mx-auto px-4 py-12 pt-24">
            <div className="text-center text-gray-300">Loading post...</div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="relative min-h-screen">
        <GradientBackground />
        <div className="relative">
          <div className="container max-w-3xl mx-auto px-4 py-12 pt-24">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-white mb-4">Post not found</h1>
              <p className="text-gray-300 mb-8">The post you're looking for doesn't exist.</p>
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
    <div className="relative min-h-screen">
      <GradientBackground />
      <div className="relative">
        <div className="container max-w-3xl mx-auto px-4 py-12 pt-24">
          <Link to="/writing">
            <Button variant="ghost" className="mb-8 pl-0 text-white hover:text-white/80">
              <ArrowLeft size={16} className="mr-2" />
              Back to all posts
            </Button>
          </Link>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8">
            <article className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-white prose-p:text-gray-300 prose-a:text-indigo-400 prose-code:text-indigo-400 prose-pre:bg-gray-800 prose-pre:text-gray-200 prose-blockquote:border-l-indigo-500 prose-blockquote:text-gray-300 prose-li:text-gray-300">
              <header className="mb-8">
                <h1 className="text-4xl font-bold mb-4 text-white">{post.title}</h1>
                <div className="flex items-center gap-4 text-gray-300">
                  <time dateTime={post.date}>{post.date}</time>
                  <span>•</span>
                  <span>{post.readingTime} min read</span>
                </div>
              </header>
              
              <div 
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritingDetail;
