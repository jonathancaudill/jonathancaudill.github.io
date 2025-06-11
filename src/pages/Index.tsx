import { Link } from "react-router-dom";
import { AnimatedButton } from "@/components/ui/animated-button";
import GradientBackground from "@/components/GradientBackground";
import { getAllPosts, Post } from "@/lib/blogMarkdown";
import { getAllProjects, Project } from "@/lib/projectMarkdown";
import ProjectCard from "@/components/ProjectCard";
import { useEffect, useState } from "react";
import BlogCard from "@/components/BlogCard";

const Index = () => {
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);

  useEffect(() => {
    const loadContent = async () => {
      const [posts, projects] = await Promise.all([
        getAllPosts(),
        getAllProjects()
      ]);
      setRecentPosts(posts.slice(0, 2));
      const projectsWithHeadshot = projects.slice(0, 2).map(p => ({ ...p, image: '/personalsite.png' }));
      setFeaturedProjects(projectsWithHeadshot);
    };
    loadContent();
  }, []);

  return (
    <div className="relative min-h-screen">
      <GradientBackground />
      <div className="relative">
        <div className="container max-w-5xl mx-auto px-4 py-12 pt-24">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
            <div className="flex-1 text-left">
              <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-8 leading-tight text-white">
                <span className="block">Hi, I'm Jonathan</span>
                <span className="block">Caudill</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                I'm an analyst, writer, and amateur thinker. I'm passionate about creating, learning, and sharing knowledge with others. I'm also always working on something new—you can find some of my work here.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <AnimatedButton href="/work">
                    Check out my work
                  </AnimatedButton>
                  <AnimatedButton href="/writing" variant="outline">
                    Read my writing
                  </AnimatedButton>
                </div>
                <div className="flex">
                  <AnimatedButton href="/stuck" variant="outline">
                    Download stuck
                  </AnimatedButton>
                </div>
              </div>
            </div>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20">
              <img
                src="/headshot.jpg"
                alt="Jonathan Caudill"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Recent Posts */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-white">Recent Posts</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {recentPosts.map((post) => (
                <Link 
                  key={post.slug} 
                  to={`/writing/${post.slug}`}
                  className="group block h-full"
                >
                  <BlogCard post={post} />
                </Link>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-white">Featured Projects</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {featuredProjects.map((project) => (
                <Link key={project.slug} to={`/work/${project.slug}`} className="block group">
                  <ProjectCard project={project} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
