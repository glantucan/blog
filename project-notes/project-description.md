# Photography Blog Project Description

This project aims to build a minimal working version of a photography blog application with core functionality in place. The application will be built using Next.js, React 18.3.0, and various other libraries as specified in the Bill of Materials (BOM). The project will focus on providing a clean, responsive layout, GitHub-based content management, static site generation, client-side search, image gallery features, and an endpoint to trigger rebuilds.

## Key Features

1. **Git-Based Content Management**: Use GitHub repositories to store, version, and publish blog content without a traditional CMS.
2. **Markdown Support**: Process and render text content written in Markdown format.
3. **Image Management**: Display images as uploaded without server-side processing or version generation.
4. **Single Column Layout**: Implement a clean, simple single-column layout for content presentation.
5. **Image Gallery**: Create an image gallery view for each post that users can navigate through.
6. **Fullscreen Image Viewing**: Allow users to view any image in fullscreen mode.
7. **Smooth Transitions**: Implement smooth transitions and animations between different views and states using CSS.
8. **Client-Side Search**: Implement client-side search using a JSON index file instead of a database.
9. **Tags and Categories**: Support organization of posts using tags and categories defined in post metadata.
10. **Single Publisher**: Design the system for a single content publisher (you) with no public contribution features.
11. **No Comments or Social Features**: Exclude features for comments, likes, or other social interactions.
12. **Static Site Generation**: Generate fully static HTML pages at build time using Next.js.
13. **GitHub Content Repository**: Maintain a separate GitHub repository for blog content (posts and images).
14. **Rebuild Webhook**: Implement a secure endpoint to trigger site rebuilds when new content is published.
15. **Vercel Hosting**: Deploy the site to Vercel for simplified hosting with automatic GitHub integration.
16. **Simple Maintenance**: Ensure the system is easy to maintain with minimal technical overhead.

## Project Structure

The project will follow a structured directory layout, including:

- `app/`: Contains Next.js pages and layouts.
- `components/`: Reusable React components.
- `hooks/`: Custom hooks for managing state and side effects.
- `lib/`: Utility libraries or configurations.
- `styles/`: Global styles and themes.
- `project-docs/`: Documentation files, including user stories, requirements, conventions, and a project description.

## Dependencies

The project will use the following dependencies as specified in the BOM:

```json
{
  "dependencies": {
    "react": "18.3.0",
    "react-dom": "18.3.0",
    "next": "15.2.2",
    "antd": "5.15.0",
    "styled-components": "6.1.8",
    "@ant-design/icons": "5.3.0",
    "gray-matter": "4.0.3",
    "remark": "15.0.1",
    "remark-html": "16.0.1",
    "react-medium-image-zoom": "5.1.10",
    "react-photo-album": "2.3.0",
    "fuse.js": "7.0.0",
    "date-fns": "3.3.1",
    "reading-time": "1.5.0",
    "axios": "1.8.3"
  },
  "devDependencies": {
    "eslint": "9.22.0",
    "eslint-config-next": "15.2.2",
    "prettier": "3.2.5",
    "eslint-config-prettier": "9.1.0",
    "eslint-plugin-prettier": "5.1.3"
  }
}
```

## Development and Deployment

- **Development**: Use Next.js's development server for local development.
- **Build**: Generate static HTML pages using `next build`.
- **Start**: Start the production server with `next start`.
- **Deployment**: Deploy to Vercel using GitHub integration.

## Conventions

The project will follow the conventions outlined in `project-docs/conventions.md`, including:

- Writing readable, self-explanatory code.
- Using functional programming principles where possible.
- Managing state and side effects with custom hooks.
- Separating routing from page components.
- Using styled-components for styling.

## User Stories

The project will be developed based on the following user stories:

1. **Project Setup and Basic Navigation**: Set up the initial project structure, install dependencies, create a basic page layout, and implement simple navigation between Home and About pages.
2. **GitHub Integration and Static Content Generation**: Set up GitHub integration for content management, fetch content from GitHub, parse Markdown posts, convert them to HTML, calculate reading time, and generate static pages.
3. **Image Gallery, Search Functionality, and Rebuild Endpoint**: Implement image gallery features, add basic search functionality using Fuse.js, and create an endpoint to trigger site rebuilds.

## Next Steps

1. Set up the initial project structure with all required dependencies.
2. Create a basic page layout with Ant Design and styled-components.
3. Implement simple navigation between Home and About pages.
4. Set up GitHub integration for content management.
5. Fetch content from GitHub, parse Markdown posts, convert them to HTML, calculate reading time, and generate static pages.
6. Implement image gallery features using react-photo-album.
7. Add basic search functionality using Fuse.js.
8. Create an endpoint to trigger site rebuilds.

This project description provides a comprehensive overview of the Photography Blog application, its key features, dependencies, conventions, and user stories. It serves as a guide for development and ensures that all requirements are met.
