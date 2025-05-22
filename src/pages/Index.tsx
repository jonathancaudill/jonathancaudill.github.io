
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
                <span className="block">Hi, I'm</span>
                <span className="block text-indigo-600 dark:text-indigo-400">Your Name</span>
              </h1>
              <p className="mt-6 text-lg text-gray-500 max-w-3xl dark:text-gray-400">
                I'm a developer, writer, and creative thinker. This is my personal space where I share my thoughts, projects, and experiences.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/writing">
                  <Button className="inline-flex items-center gap-2">
                    Read my blog
                    <ArrowRight size={16} />
                  </Button>
                </Link>
                <Link to="/work">
                  <Button variant="outline" className="inline-flex items-center gap-2">
                    See my work
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="h-64 w-64 rounded-full bg-indigo-100 flex items-center justify-center dark:bg-indigo-900/30">
                <span className="text-indigo-600 dark:text-indigo-400 text-lg">Your Photo</span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Recent Posts</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400">May 22, 2025</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                <Link to="/writing/1" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                  Getting Started with React
                </Link>
              </h3>
              <p className="mt-3 text-gray-500 dark:text-gray-400">
                An introduction to React and how to build your first component.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400">May 15, 2025</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                <Link to="/writing/2" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                  The Future of Web Development
                </Link>
              </h3>
              <p className="mt-3 text-gray-500 dark:text-gray-400">
                Exploring emerging technologies that will shape the future of the web.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link to="/writing">
              <Button variant="outline" className="inline-flex items-center gap-2">
                View all posts
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
