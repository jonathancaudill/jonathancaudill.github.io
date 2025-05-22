
import { useState } from "react";
import { posts } from "@/data/posts";
import BlogCard from "@/components/BlogCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Writing = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Writing</h1>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl dark:text-gray-400">
            Thoughts, ideas, and reflections on technology, design, and more.
          </p>

          <div className="mt-8 relative max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
            {filteredPosts.length === 0 && (
              <div className="col-span-full text-center py-12">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">No posts found</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Try adjusting your search query.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Writing;
