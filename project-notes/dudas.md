## Build and deploy

_**The idea is to generate static html pages from markdown files in a GitHub repository.
Can the generated static pages be hosted on Vercel?**_

By default: only when you push a new commit to Vercel (if it’s hooked to GitHub).

But if you want to control when builds happen (e.g., push Markdown manually and trigger build from a script or webhook), you can:

#### Option 1: Manual CLI Build

```bash
npm run build
vercel --prod
```

This builds and deploys statically — no runtime code involved.

#### Option 2: Webhook Triggered Build (GitHub + Vercel)

In Vercel dashboard → Project Settings → Git → Create “Deploy Hook”

Point your webhook at that URL (GitHub action, curl, etc.)

```bash
curl -X POST "https://api.vercel.com/.../your-hook"
```
