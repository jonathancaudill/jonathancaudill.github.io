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
    image: "/images/personal-website.jpg",
    githubUrl: "https://github.com/jonathancaudill/personal-website",
    liveUrl: "https://yourdomain.com"
  },
  {
    id: 2,
    title: "Task Manager",
    description: "A simple task manager application with features like task creation, completion, and filtering.",
    technologies: ["React", "Redux", "Firebase"],
    image: "/images/task-manager.jpg",
    githubUrl: "https://github.com/jonathancaudill/task-manager",
    liveUrl: "https://task-manager-demo.com"
  },
  {
    id: 3,
    title: "Weather App",
    description: "A weather application that shows current weather and forecasts based on location.",
    technologies: ["JavaScript", "OpenWeather API", "CSS"],
    image: "/images/weather-app.jpg",
    githubUrl: "https://github.com/jonathancaudill/weather-app"
  }
];
