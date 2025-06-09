export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  slug: string;
  content: string;
  readingTime?: number;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Personal Website",
    description: "A personal website built with React, TypeScript, and Tailwind CSS.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: "/images/personal-website.jpg",
    githubUrl: "https://github.com/jonathancaudill/personal-website",
    liveUrl: "https://yourdomain.com",
    slug: "personal-website",
    content: `
# My Personal Website

This website is built using **React**, **TypeScript**, and **Tailwind CSS**. It serves as a central hub for my writing, projects, and contact information.

## Key Features

*   **Responsive Design:** Optimized for various screen sizes, from mobile to desktop.
*   **Blog Section:** Features articles on software development and technology.
*   **Project Showcase:** Highlights key projects with detailed descriptions.
*   **Contact Form:** Easy way for visitors to get in touch.

## Technologies Used

*   React: A JavaScript library for building user interfaces.
*   TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
*   Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
*   Vite: A fast build tool for modern web projects.

Feel free to explore the site and check out my other work!
`
  },
  {
    id: 2,
    title: "Task Manager",
    description: "A simple task manager application with features like task creation, completion, and filtering.",
    technologies: ["React", "Redux", "Firebase"],
    image: "/images/task-manager.jpg",
    githubUrl: "https://github.com/jonathancaudill/task-manager",
    liveUrl: "https://task-manager-demo.com",
    slug: "task-manager",
    content: `
# Task Manager Application

This is a simple yet powerful task manager application designed to help users organize their daily tasks. It features task creation, marking tasks as complete, and filtering options.

## Features

*   **Task Creation:** Easily add new tasks to your list.
*   **Task Completion:** Mark tasks as complete with a single click.
*   **Task Filtering:** Filter tasks by status (e.g., active, completed).
*   **Persistent Storage:** Tasks are saved and persist across sessions.

## Technologies Used

*   React: For building the user interface.
*   Redux: For state management.
*   Firebase: For backend services, including authentication and database.

This project demonstrates my ability to build a full-stack application with modern web technologies.
`
  },
  {
    id: 3,
    title: "Weather App",
    description: "A weather application that shows current weather and forecasts based on location.",
    technologies: ["JavaScript", "OpenWeather API", "CSS"],
    image: "/images/weather-app.jpg",
    githubUrl: "https://github.com/jonathancaudill/weather-app",
    slug: "weather-app",
    content: `
# Weather Application

This weather application provides real-time weather information and forecasts based on the user's location or a searched city. It's a great example of consuming external APIs to create dynamic content.

## Functionality

*   **Current Weather:** Displays temperature, humidity, wind speed, and weather conditions.
*   **Weather Forecast:** Provides a multi-day forecast.
*   **Location-based Search:** Allows users to search for weather in any city.
*   **Dynamic Backgrounds:** Changes background images based on current weather conditions (optional).

## Technologies Used

*   JavaScript: Core logic for fetching and displaying data.
*   OpenWeather API: Provides weather data.
*   HTML/CSS: For structuring and styling the user interface.

This project showcases my skills in API integration and front-end development.
`
  }
];
