# PDF Hosting Guide

This guide explains how to host PDFs on your personal site and create links to them.

## How It Works

PDFs are hosted in the `public/pdfs/` directory and served as static assets. When someone clicks a PDF link, it opens in a new browser window/tab, similar to how S3 links work.

## Setup

1. **Place your PDFs in the `public/pdfs/` directory**
   ```bash
   # Example: Add your resume
   cp ~/Documents/resume.pdf public/pdfs/
   ```

2. **Use the PdfLink component in your React components**
   ```tsx
   import { PdfLink, PdfDownload } from '@/components/PdfLink';
   
   // Open PDF in new window
   <PdfLink 
     filename="resume.pdf" 
     title="My Resume"
     variant="default"
   />
   
   // Download PDF
   <PdfDownload 
     filename="resume.pdf" 
     title="My Resume"
     variant="outline"
   />
   ```

## Component Props

### PdfLink (opens in new window)
- `filename`: The PDF filename (e.g., "resume.pdf")
- `title`: Optional display title (defaults to filename without .pdf)
- `variant`: Button variant ("default", "outline", "ghost", "link")
- `size`: Button size ("default", "sm", "lg", "icon")
- `className`: Additional CSS classes
- `showIcon`: Whether to show external link icon (default: true)
- `children`: Custom content (defaults to title)

### PdfDownload (downloads file)
- Same props as PdfLink, but uses download attribute
- Automatically shows download icon

## Examples

### Basic usage
```tsx
<PdfLink filename="resume.pdf" title="Resume" />
```

### Custom styling
```tsx
<PdfLink 
  filename="portfolio.pdf" 
  variant="ghost"
  size="sm"
  className="text-blue-600 hover:text-blue-800"
  showIcon={false}
>
  View Portfolio
</PdfLink>
```

### Download link
```tsx
<PdfDownload 
  filename="certificate.pdf" 
  title="Certificate"
  variant="outline"
/>
```

## URL Structure

PDFs are accessible at: `https://yoursite.com/pdfs/filename.pdf`

For example:
- `https://yoursite.com/pdfs/resume.pdf`
- `https://yoursite.com/pdfs/portfolio.pdf`

## Best Practices

1. **Use descriptive filenames**: `resume-2024.pdf` instead of `doc1.pdf`
2. **Keep file sizes reasonable**: Large PDFs may take time to load
3. **Use meaningful titles**: The title prop should be user-friendly
4. **Consider file organization**: You can create subdirectories like `public/pdfs/documents/`

## Adding to Existing Pages

You can add PDF links to any page by importing and using the components:

```tsx
import { PdfLink } from '@/components/PdfLink';

// Add to your component
<div className="flex gap-4">
  <PdfLink filename="resume.pdf" title="Resume" />
  <PdfLink filename="portfolio.pdf" title="Portfolio" />
</div>
```

## Content Management

When adding PDFs to project pages, remember to:
1. Place PDFs in `public/pdfs/`
2. Update project markdown files in `src/content/projects/`
3. Use relative paths like `/pdfs/filename.pdf` in your `liveUrl`

## Testing

1. Add a PDF to `public/pdfs/`
2. Use the component in a page
3. Run your dev server: `npm run dev`
4. Click the link to test

The PDF should open in a new browser window/tab. 