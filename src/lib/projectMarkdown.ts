import { remark } from 'remark';
import html from 'remark-html';
import { format, parseISO } from 'date-fns';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import remarkSlug from 'remark-slug';
import remarkToc from 'remark-toc';
import { projects as staticProjects, Project as ProjectInterface } from '@/data/projects';

export interface Project extends ProjectInterface {
  content: string; // HTML content after markdown processing
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  console.log('Getting project by slug:', slug);
  
  try {
    const staticProject = staticProjects.find(p => p.slug === slug);

    if (!staticProject) {
      console.log('No project found for slug:', slug);
      return null;
    }
    
    const processedContent = await remark()
      .use(remarkGfm)
      .use(html)
      .process(staticProject.content);
    
    return {
      ...staticProject,
      content: processedContent.toString(),
      // For projects, reading time can be calculated directly from the content string
      readingTime: calculateReadingTime(staticProject.content)
    };
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error);
    return null;
  }
}

export async function getAllProjects(): Promise<Project[]> {
  console.log('Getting all projects...');
  try {
    const allProjectsData = await Promise.all(
      staticProjects.map(async (project) => {
        console.log('Processing project:', project.slug);
        
        const processedContent = await remark()
          .use(remarkGfm)
          .use(html)
          .process(project.content);
        
        return {
          ...project,
          content: processedContent.toString(),
          readingTime: calculateReadingTime(project.content)
        };
      })
    );
    
    console.log('All projects processed:', allProjectsData);
    return allProjectsData;
  } catch (error) {
    console.error('Error reading projects:', error);
    return [];
  }
} 