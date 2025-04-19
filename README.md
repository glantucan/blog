# Photography Blog

A modern, minimalist photography blog built with Next.js and Ant Design.

## Features

- Clean, single-column layout focused on visual content
- Responsive design that works on all devices
- Image gallery with fullscreen viewing capability
- Client-side search functionality
- Tag and category organization
- Static site generation for fast loading times
- GitHub-based content management

## Tech Stack

- **Frontend Framework**: Next.js 15.2.2
- **UI Library**: Ant Design 5.22.7
- **Styling**: styled-components 6.1.15
- **Content Processing**: gray-matter, remark, remark-html
- **Image Handling**: react-medium-image-zoom, react-photo-album
- **Search**: Fuse.js
- **Utilities**: date-fns, reading-time, axios

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm (v9 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/glantucan/blog.git
   cd blog
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `/app` - Next.js App Router pages and layouts
- `/components` - Reusable React components
- `/lib` - Utility functions and helpers
- `/styles` - Global styles and theme configuration
- `/public` - Static assets

## Content Management

Content is managed through a separate GitHub repository. The blog fetches content at build time and generates static pages.

## License

Copyright (C) 2025 Oscr Espeso Gil (AKA Glantucan)
This project is licensed under the GPL-3.0-or-later License - see the LICENSE file for details.
