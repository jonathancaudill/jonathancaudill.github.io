import { Project } from "@/lib/projectMarkdown";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showBanner, setShowBanner] = useState(false);
  const [fadeBanner, setFadeBanner] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleLiveDemoClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (project.title === "Personal Website") {
      e.preventDefault();
      setShowBanner(true);
      setFadeBanner(false);
      setTimeout(() => setFadeBanner(true), 1800);
      setTimeout(() => setShowBanner(false), 2500);
    }
  };

  const glowStyle = {
    '--mouse-x': `${mousePosition.x}px`,
    '--mouse-y': `${mousePosition.y}px`,
  } as React.CSSProperties;

  return (
    <Card
      className="group bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/20 flex flex-col h-[480px] relative overflow-hidden"
      onMouseMove={handleMouseMove}
      style={glowStyle}
    >
      {/* Glow effect (z-0) */}
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.15) 0%, transparent 80%)`,
          transform: `perspective(1000px) rotateX(calc((var(--mouse-y) - 50%) * 0.1deg)) rotateY(calc((var(--mouse-x) - 50%) * 0.1deg))`,
        }}
      />
      {/* Image (z-10) */}
      {project.image && (
        <div className="relative z-10">
          <div className="h-48 overflow-hidden rounded-t-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
      {/* Card content (z-20) */}
      <div className="flex flex-col flex-grow relative z-20">
        <CardHeader className="p-4 pb-2">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        </CardHeader>
        <CardContent className="px-4 py-2 flex-grow">
          <p className="text-gray-300 mb-4 line-clamp-4">{project.description}</p>
          <div className="flex flex-nowrap gap-2 overflow-hidden">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-white/10 text-gray-300 whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-white/10 text-gray-300 whitespace-nowrap">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 pt-2 px-4 items-start mt-auto">
          <Link 
            to={`/work/${project.slug}`} 
            className="relative inline-flex items-center gap-2 text-white transition-all duration-300 ease-out"
          >
            <span className="group-hover:scale-105 group-hover:text-white/90 transition-transform duration-300 ease-out">View Details</span>
            <ArrowRight 
              className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:scale-110" 
            />
          </Link>
          <div className="flex gap-2">
            {project.githubUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button size="sm" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1" onClick={handleLiveDemoClick}>
                  <ExternalLink size={16} />
                  <span>Take me there</span>
                </a>
              </Button>
            )}
          </div>
        </CardFooter>
      </div>
      {/* Custom Banner */}
      {showBanner && (
        <div
          className={`fixed bottom-4 right-4 z-50 bg-white/90 text-[#23234B] rounded-lg px-4 py-2 shadow-lg border border-white/40 font-sans text-base transition-opacity duration-700 ${fadeBanner ? 'opacity-0' : 'opacity-100'}`}
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          You're already here!
        </div>
      )}
    </Card>
  );
};

export default ProjectCard;
