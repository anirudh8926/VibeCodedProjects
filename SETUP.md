# Portfolio Setup Guide

This guide will walk you through setting up your CS Student Portfolio website.

## Quick Start

### 1. MongoDB Setup

You need a MongoDB database. Here are two options:

**Option A: MongoDB Atlas (Recommended - Free tier available)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a new cluster
4. Go to "Database" → "Connect"
5. Choose "Drivers" and copy your connection string
6. Replace `<password>` with your database user password
7. Add the connection string to `.env.local`

**Option B: Local MongoDB**
If you have MongoDB installed locally, use:
```
MONGODB_URI=mongodb://localhost:27017/portfolio
```

### 2. Environment Setup

Create `.env.local`:
```bash
MONGODB_URI=your_mongodb_connection_string
```

### 3. Install & Run

```bash
# Install dependencies
npm install

# Seed database with sample data
npx tsx scripts/seed.ts

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your portfolio!

## Customizing Your Portfolio

### Update Personal Information

**Header & Hero Section** (`components/Header.tsx`, `components/HeroSection.tsx`):
- Change "Portfolio" to your name
- Update the hero tagline
- Update social media links

**Footer** (`components/Footer.tsx`):
- Update contact email
- Update social media links
- Add GitHub, LinkedIn URLs

### Add Your Own Projects

**Via API (Recommended)**

```bash
curl -X POST http://localhost:3000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Amazing Project",
    "description": "A brief description of the project",
    "image": "https://example.com/image.jpg",
    "technologies": ["React", "TypeScript", "Tailwind CSS"],
    "github": "https://github.com/yourusername/project",
    "link": "https://project-demo.com",
    "ongoing": false
  }'
```

**Via Database Script**

Edit `scripts/seed.ts`, update the `projects` array, then run:
```bash
npx tsx scripts/seed.ts
```

### Add Your Skills

**Via API**

```bash
curl -X POST http://localhost:3000/api/skills \
  -H "Content-Type: application/json" \
  -d '{
    "name": "React",
    "category": "frontend",
    "proficiency": "advanced",
    "icon": "⚛️"
  }'
```

Categories available: `frontend`, `backend`, `tools`, `languages`
Proficiency levels: `beginner`, `intermediate`, `advanced`

### Update Ongoing Projects

Add to your projects with `"ongoing": true` and set a `progress` value (0-100):

```bash
curl -X POST http://localhost:3000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "AI Chat Assistant",
    "description": "Building an intelligent chatbot",
    "image": "https://example.com/image.jpg",
    "technologies": ["Python", "React", "OpenAI"],
    "github": "https://github.com/yourusername/chatbot",
    "ongoing": true,
    "progress": 65
  }'
```

## Project Images

For best results, use images that are:
- At least 800px wide
- In JPG or PNG format
- Landscape orientation (16:9 or 4:3)

Sources for project images:
- Screenshots of your actual projects
- Unsplash (https://unsplash.com)
- Pexels (https://www.pexels.com)
- Placeholder services (https://via.placeholder.com)

## Navigation

The header navigation links to:
- `#skills` - Skills section
- `#projects` - Featured projects
- `#working` - Currently working on section
- `#contact` - Footer with contact form

Update the nav links in `components/Header.tsx` if you change the section IDs.

## Styling Customization

Colors and fonts are in `app/globals.css`. You can:
1. Update the CSS variables for brand colors
2. Modify Tailwind configuration in `tailwind.config.ts`
3. Change fonts by updating imports in `app/layout.tsx`

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Select your GitHub repository
5. Add environment variable:
   - Name: `MONGODB_URI`
   - Value: Your MongoDB connection string
6. Click "Deploy"

Your portfolio will be live! 🎉

## Troubleshooting

**"MONGODB_URI is not defined"**
- Make sure `.env.local` exists in the root directory
- Check that `MONGODB_URI=` is the first line
- Restart the dev server after adding the env file

**Projects/Skills not showing**
- Check MongoDB connection in `.env.local`
- Run `npx tsx scripts/seed.ts` to populate sample data
- Check browser console for API errors
- Verify MongoDB database is accessible

**Images not loading**
- Use full URLs (not relative paths)
- Check image URL is publicly accessible
- Try a different image URL to test
- Use HTTPS URLs when possible

**Styling looks broken**
- Clear `.next` folder and reinstall: `rm -rf .next && npm install`
- Clear browser cache
- Make sure you ran `npm install` after cloning

## Need Help?

1. Check the main [README.md](README.md)
2. Review the API endpoints documentation
3. Check browser DevTools for error messages
4. Verify all environment variables are set correctly

Good luck with your portfolio! 🚀
