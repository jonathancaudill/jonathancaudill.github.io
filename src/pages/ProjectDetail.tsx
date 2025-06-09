import { useParams, Link } from "react-router-dom";
import { getProjectBySlug } from "@/lib/projectMarkdown";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import GradientBackground from "@/components/GradientBackground";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Awaited<ReturnType<typeof getProjectBySlug>>>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProject = async () => {
      if (!slug) return;
      
      try {
        const projectData = await getProjectBySlug(slug);
        setProject(projectData);
      } catch (error) {
        console.error("Error loading project:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProject();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="relative min-h-screen">
        <GradientBackground />
        <div className="relative">
          <div className="container max-w-3xl mx-auto px-4 py-12 pt-24">
            <div className="text-center text-gray-300">Loading project...</div>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="relative min-h-screen">
        <GradientBackground />
        <div className="relative">
          <div className="container max-w-3xl mx-auto px-4 py-12 pt-24">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-white mb-4">Project not found</h1>
              <p className="text-gray-300 mb-8">The project you're looking for doesn't exist.</p>
              <Link to="/work">
                <Button>Back to all projects</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <GradientBackground />
      <div className="relative">
        <div className="container max-w-3xl mx-auto px-4 py-12 pt-24">
          <Link to="/work">
            <Button variant="ghost" className="mb-8 pl-0 text-white hover:text-white/80">
              <ArrowLeft size={16} className="mr-2" />
              Back to all projects
            </Button>
          </Link>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8">
            <article className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-white prose-p:text-gray-300 prose-a:text-indigo-400 prose-code:text-indigo-400 prose-pre:bg-gray-800 prose-pre:text-gray-200 prose-blockquote:border-l-indigo-500 prose-blockquote:text-gray-300 prose-li:text-gray-300">
              <header className="mb-8">
                <h1 className="text-4xl font-bold mb-4 text-white">{project.title}</h1>
                <div className="flex items-center gap-4 text-gray-300">
                  {project.readingTime && (
                    <>
                      <span>{project.readingTime} min read</span>
                      <span>•</span>
                    </>
                  )}
                  <span>{project.description}</span>
                </div>
              </header>
              
              <div 
                dangerouslySetInnerHTML={{ __html: project.content }}
              />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 