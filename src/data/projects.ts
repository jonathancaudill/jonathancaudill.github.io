
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Personal Website",
    description: "A personal website built with React, TypeScript, and Tailwind CSS.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/yourusername/personal-website",
    liveUrl: "https://yourdomain.com"
  },
  {
    id: 2,
    title: "Task Manager",
    description: "A simple task manager application with features like task creation, completion, and filtering.",
    technologies: ["React", "Redux", "Firebase"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://task-manager-demo.com"
  },
  {
    id: 3,
    title: "Weather App",
    description: "A weather application that shows current weather and forecasts based on location.",
    technologies: ["JavaScript", "OpenWeather API", "CSS"],
    image: "/placeholder.svg",
    githubUrl: "https://github.com/yourusername/weather-app"
  }
];
