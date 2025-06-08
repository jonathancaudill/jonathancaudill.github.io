export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  slug: string;
  readingTime: number;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Learn the basics of React and how to build your first application.",
    content: `
# Getting Started with React

React is a JavaScript library for building user interfaces. It's declarative, efficient, and flexible.

## Creating Your First Component

Here's a simple example of a React component:

\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
\`\`\`

This is just a brief introduction to React. In future posts, we'll dive deeper into React's features and capabilities.
    `,
    date: "March 15, 2024",
    slug: "getting-started-with-react",
    readingTime: 5
  },
  {
    id: 2,
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies in web development.",
    content: `
# The Future of Web Development

Web development is constantly evolving. Here are some technologies that are shaping the future:

## WebAssembly

WebAssembly (WASM) allows code written in languages like C, C++, and Rust to run in the browser at near-native speed.

## AI and Machine Learning

AI and machine learning are being integrated into web applications, enabling more personalized and intelligent user experiences.

## Progressive Web Apps

Progressive Web Apps (PWAs) provide a native app-like experience on the web, with features like offline support, push notifications, and home screen installation.

The future of web development is exciting, and I'm looking forward to exploring these technologies in more depth.
    `,
    date: "March 8, 2024",
    slug: "future-of-web-development",
    readingTime: 8
  },
  {
    id: 3,
    title: "CSS Tips and Tricks",
    excerpt: "A collection of useful CSS techniques to improve your web development workflow.",
    content: `
# CSS Tips and Tricks

Here are some **CSS** tips and tricks that can help you improve your web design skills:

## Using CSS Grid

CSS Grid is a powerful layout system that allows you to create complex web layouts with ease.

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
\`\`\`

## CSS Variables

CSS variables (custom properties) allow you to store specific values to reuse throughout your stylesheet.

\`\`\`css
:root {
  --primary-color: #3490dc;
}

.button {
  background-color: var(--primary-color);
}
\`\`\`

These are just a few examples of how you can leverage CSS to create beautiful and responsive web designs.
    `,
    date: "March 1, 2024",
    slug: "css-tips-and-tricks",
    readingTime: 3
  }
];
