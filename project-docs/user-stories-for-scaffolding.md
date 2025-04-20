# Photography Blog - Initial User Stories

These user stories focus on creating a minimal working version of the photography blog application with core functionality in place. Each story is designed to be small and achievable, with clear acceptance criteria.

## User Story 1: Project Setup and Basic Navigation

**As a developer,** I want to set up the initial project structure with all required dependencies and create a basic page layout.

**Acceptance Criteria:**

- Next.js project is initialized with the agreed tech stack (React 18.3.0, Next.js 14.2.0)
- All dependencies from the BOM are properly installed:
  - UI: Ant Design 5.15.0, styled-components 6.1.8, @ant-design/icons 5.3.0
  - Content: gray-matter 4.0.3, remark 15.0.1, remark-html 16.0.1
  - Image: react-medium-image-zoom 5.1.10, react-photo-album 2.3.0
  - Search: fuse.js 7.0.0
  - Utilities: date-fns 3.3.1, reading-time 1.5.0
  - Dev tools: ESLint, Prettier with proper configuration
- Basic page layout is implemented with Ant Design and styled-components:
  - Header with site title and navigation
  - Main content area with single column layout
  - Footer with minimal information
- Simple navigation between Home and About pages works
- CSS transitions are set up for page transitions
- The application successfully builds and runs locally

**Technical Notes:**

- Use Next.js App Router for routing
- Configure styled-components with Next.js (may require next-transpile-modules)
- Set up a global theme using styled-components ThemeProvider
- Implement basic responsive design using Ant Design's responsive utilities

---

## User Story 2: GitHub Integration and Static Content Generation

**As a developer,** I want to set up GitHub integration for content management and implement static content generation.

**Acceptance Criteria:**

- A separate GitHub repository is created for storing blog content
- The repository structure includes:
  - A `/posts` directory for Markdown blog posts
  - An `/images` directory for post images
  - At least one sample Markdown blog post
- The sample post includes YAML frontmatter with:
  - title
  - date
  - tags (array)
  - categories (array)
  - featured image path
- A build-time utility function is created to:
  - Fetch all content from the GitHub repository using axios
  - Parse frontmatter using gray-matter
  - Convert Markdown to HTML using remark and remark-html
  - Calculate reading time for each post
- The build process generates:
  - Static HTML pages for each post
  - A JSON index file with post metadata
- The home page displays a list of posts with:
  - Title
  - Date (formatted with date-fns)
  - Reading time
  - Featured image (if available)
  - Brief excerpt (first 150 characters)
- Clicking a post in the list navigates to the static post page
- The post detail page displays:
  - Post title and metadata (date, reading time, tags)
  - Full post content rendered as HTML
  - Images displayed where they're referenced in the Markdown

**Technical Notes:**

- Use Next.js's 15 Static Site Generation (SSG)
- Configure the image paths to reference the GitHub repository's raw image URLs
- All pages are pre-rendered at build time, not on demand
- Configure remark to properly handle image paths

---

## User Story 3: Image Gallery, Search Functionality, and Rebuild Endpoint

**As a developer,** I want to implement the image gallery feature, add basic search functionality, and create an endpoint to trigger rebuilds.

**Acceptance Criteria:**

- Images within blog posts can be clicked to view in fullscreen mode using react-medium-image-zoom
- A gallery view is implemented for posts with multiple images using react-photo-album:
  - Displays all images in the post in a grid layout
  - Supports navigation between images
  - Has smooth transitions when opening/closing images
- Basic search functionality is implemented:
  - Search input field in the header
  - Client-side search using the JSON index file and Fuse.js
  - Results display matching posts with title and excerpt
  - Clicking a result navigates to the post
- Search supports filtering by tags and categories
- An API endpoint is created to trigger site rebuilds:
  - Endpoint is secured with a simple API key
  - When called, the endpoint:
    - Initiates a new build of the site
    - Returns a success/failure status
  - This endpoint can be called manually or via GitHub webhook after pushing content
- A simple "We have a working app!" message appears on the homepage above the post list

**Technical Notes:**

- Configure Fuse.js with appropriate search options (keys, threshold)
- Use Ant Design components for search UI
- Implement CSS transitions for gallery and search result animations
- The rebuild endpoint should work with your hosting provider (e.g., Vercel, Netlify)
- Use environment variables to store the API key
- The build process will fetch the latest content from GitHub and generate all static pages

---

When all these user stories are complete, you'll have a working version of your photography blog with:

- A clean, responsive layout
- GitHub-based content management
- Fully static site generation for all pages
- Markdown content rendering
- Image display with fullscreen and gallery features
- Basic search and filtering capability
- An endpoint to trigger rebuilds when you publish new content
- Smooth transitions and animations using CSS

The application will function as a static site with client-side search, requiring no database. When you add new content to your GitHub repository, you'll trigger a rebuild through the API endpoint, which will regenerate all static pages with the latest content.
