
import { Link } from "react-router-dom";
import { Post } from "@/data/posts";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  post: Post;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <CardHeader className="pb-0">
        <div className="text-sm text-gray-500 dark:text-gray-400">{post.date}</div>
        <Link to={`/writing/${post.slug}`} className="hover:underline">
          <h3 className="text-xl font-semibold text-gray-900 mt-2 dark:text-white">{post.title}</h3>
        </Link>
      </CardHeader>
      <CardContent className="py-4 flex-grow">
        <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Link to={`/writing/${post.slug}`}>
          <Button variant="ghost" className="p-0 h-auto font-normal text-indigo-600 hover:text-indigo-800 hover:bg-transparent dark:text-indigo-400 dark:hover:text-indigo-300">
            <span>Read more</span>
            <ArrowRight size={16} className="ml-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
