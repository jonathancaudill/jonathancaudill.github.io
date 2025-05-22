
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const Work = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Work</h1>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl dark:text-gray-400">
            A showcase of my projects, experiments, and open-source contributions.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-16 bg-gray-50 border border-gray-200 rounded-lg p-6 dark:bg-gray-800 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">GitHub Contributions</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Check out my open source contributions and other projects on GitHub.
            </p>
            <div className="mt-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                <span>View GitHub Profile</span>
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
