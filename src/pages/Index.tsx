import { Link } from "react-router-dom";
import { AnimatedButton } from "@/components/ui/animated-button";
import GradientBackground from "@/components/GradientBackground";
import { posts } from "@/data/posts";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const Index = () => {
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
                I'm an analyst, writer, and amateur thinker. I care about art, data, and people.
              </p>
              <div className="flex gap-4">
                <AnimatedButton href="/writing">
                  Read my writing
                </AnimatedButton>
                <AnimatedButton href="/stuck" variant="outline">
                  Download stuck
                </AnimatedButton>
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
              {posts.slice(0, 2).map((post) => (
                <Link 
                  key={post.slug} 
                  to={`/writing/${post.slug}`}
                  className="group block"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 transition-all duration-300 hover:bg-white/20">
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white/90">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-400">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readingTime} min read</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-white">Featured Projects</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {projects.slice(0, 2).map((project) => (
                <Link key={project.id} to={`/work/${project.slug}`} className="block group">
                  <ProjectCard key={project.id} project={project} />
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
