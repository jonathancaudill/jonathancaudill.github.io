import { Link } from "react-router-dom";
import { Post } from "@/lib/blogMarkdown";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface BlogCardProps {
  post: Post;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const glowStyle = {
    '--mouse-x': `${mousePosition.x}px`,
    '--mouse-y': `${mousePosition.y}px`,
  } as React.CSSProperties;

  return (
    <Card
      className="group overflow-hidden h-full flex flex-col bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/20 relative"
      onMouseMove={handleMouseMove}
      style={glowStyle}
    >
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.15) 0%, transparent 80%)`,
          transform: `perspective(1000px) rotateX(calc((var(--mouse-y) - 50%) * 0.1deg)) rotateY(calc((var(--mouse-x) - 50%) * 0.1deg))`,
        }}
      />
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
          <Button variant="ghost" className="p-0 h-auto font-normal text-[#0A0A23] hover:text-[#23234B] hover:bg-transparent">
            <span>Read more</span>
            <ArrowRight size={16} className="ml-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
