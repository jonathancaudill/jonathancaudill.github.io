import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import GradientBackground from "@/components/GradientBackground";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { Link } from "react-router-dom";

const Work = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="relative min-h-screen">
      <GradientBackground />
      <div className="relative">
        <div className="container max-w-5xl mx-auto px-4 py-12 pt-24">
          <h1 className="text-4xl font-bold mb-8 text-white">Work</h1>
          <p className="text-gray-300 mb-8">
            A collection of my projects, contributions, and professional experience.
          </p>

          {/* Search bar */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <Link key={project.id} to={`/work/${project.slug}`} className="block group">
                <ProjectCard project={project} />
              </Link>
            ))}
          </div>

          <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6">
            <h2 className="text-2xl font-semibold text-white">GitHub Contributions</h2>
            <p className="mt-2 text-gray-300">
              Check out my open source contributions and other projects on GitHub.
            </p>
            <div className="mt-4">
              <a
                href="https://github.com/jonathancaudill"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-300 hover:text-indigo-200"
              >
                View GitHub Profile →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
