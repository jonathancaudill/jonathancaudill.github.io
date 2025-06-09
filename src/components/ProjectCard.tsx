import { Project } from "@/data/projects";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/20 flex flex-col overflow-hidden h-[480px]">
      {project.image && (
        <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader className="p-4 pb-2">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
      </CardHeader>
      <CardContent className="px-4 py-2 flex-grow">
        <p className="text-gray-300 mb-4 line-clamp-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-white/10 text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 pt-2 px-4 items-start">
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
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
