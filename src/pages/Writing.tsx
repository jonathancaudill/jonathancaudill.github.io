import { useState, useEffect } from "react";
import { getAllPosts, Post } from "@/lib/blogMarkdown";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import GradientBackground from "@/components/GradientBackground";
import { format } from "date-fns";

const Writing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const allPosts = await getAllPosts();
        setPosts(allPosts);
      } catch (error) {
        console.error("Error loading posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-screen">
      <GradientBackground />
      <div className="relative">
        <div className="container max-w-5xl mx-auto px-4 py-12 pt-24">
          <h1 className="text-4xl font-bold mb-8 text-white">Writing</h1>
          <p className="text-gray-300 mb-8">
            Thoughts, tutorials, and insights on software development, design, and technology.
          </p>

          {/* Search bar */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {isLoading ? (
              <div className="col-span-full text-center text-gray-300">Loading posts...</div>
            ) : filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <Link 
                  key={post.slug} 
                  to={`/writing/${post.slug}`}
                  className="group block h-full"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 transition-all duration-300 hover:bg-white/20 h-full flex flex-col">
                    <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                      <time dateTime={post.date}>{format(new Date(post.date), "MMMM d, yyyy")}</time>
                      <span>•</span>
                      <span>{post.readingTime} min read</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white/90">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 line-clamp-3 flex-grow">{post.excerpt}</p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-300">
                {searchQuery ? 'No posts found matching your search.' : 'No posts available.'}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Writing;
