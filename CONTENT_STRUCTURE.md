# Content Structure

This document explains how content is organized in this project.

## Content Location

**Source Content**: `src/content/`
- This is where you edit and manage all your content
- Blog posts: `src/content/blog/`
- Projects: `src/content/projects/`

**Build Output**: `public/content/`
- This is automatically generated during build
- Contains copies of all content from `src/content/`
- Used for production deployment

## Workflow

1. **Edit Content**: Make changes to files in `src/content/`
2. **Development**: Content is loaded directly from `src/content/` during development
3. **Build**: Content is copied from `src/content/` to `public/content/` during build
4. **Production**: Built site serves content from `public/content/`

## Adding New Content

### New Blog Post
1. Create `src/content/blog/your-post.md`
2. Add frontmatter with title, excerpt, date
3. Write your content
4. The post will appear automatically

### New Project
1. Create `src/content/projects/your-project.md`
2. Add frontmatter with title, description, technologies, etc.
3. Add any images to `public/` directory
4. The project will appear automatically

## File Structure

```
src/
├── content/
│   ├── blog/
│   │   ├── camus.md
│   │   ├── meta.md
│   │   ├── revelation.md
│   │   ├── steinbeck.md
│   │   └── wilde.md
│   └── projects/
│       ├── ai-dataset-analysis.md
│       └── personal-website.md
```

## Benefits of This Structure

- **Single Source of Truth**: All content in one place (`src/content/`)
- **No Duplication**: No need to maintain content in multiple locations
- **Automatic Sync**: Build process ensures `public/content/` is always up-to-date
- **Version Control**: Only `src/content/` needs to be committed to git 