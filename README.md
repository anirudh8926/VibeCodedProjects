# CS Student Portfolio Website

A modern, interactive portfolio website template designed for 2nd-year computer science students. Built with React, Next.js, and MongoDB.

## Features

✨ **Interactive Skills Section** - Categorized skills with proficiency levels (Frontend, Backend, Tools, Languages)

📁 **Projects Gallery** - Showcase completed projects with technology tags, live demos, and GitHub links

🚀 **Currently Working On** - Display ongoing projects with progress indicators and real-time updates

🎨 **Modern Design** - Clean, professional aesthetic with smooth animations and responsive layout

🔄 **Database-Driven** - MongoDB backend for easy content management

## Tech Stack

**Frontend:**
- React 19
- Next.js 16
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Shadcn/ui (components)

**Backend:**
- Next.js API Routes
- Node.js
- Express (optional)

**Database:**
- MongoDB
- Mongoose (ODM)

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Add your MongoDB connection string:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
```

### 4. Seed the Database

Populate the database with sample data:

```bash
npx tsx scripts/seed.ts
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── projects/
│   │   │   └── route.ts
│   │   └── skills/
│   │       └── route.ts
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── OngoingSection.tsx
│   └── Footer.tsx
├── lib/
│   ├── mongodb.ts
│   └── models/
│       ├── Project.ts
│       └── Skill.ts
└── scripts/
    └── seed.ts
```

## API Endpoints

### Projects

**GET** `/api/projects` - Get all projects
- Query params: `ongoing=true|false`

**POST** `/api/projects` - Create a new project
- Body: Project data

### Skills

**GET** `/api/skills` - Get all skills
- Query params: `category=frontend|backend|tools|languages`

**POST** `/api/skills` - Create a new skill
- Body: Skill data

## Customization

### Update Your Information

1. **HeroSection.tsx** - Update name, title, and social links
2. **Footer.tsx** - Update contact email and social profiles
3. **Header.tsx** - Customize navigation links

### Add Your Projects

Option 1: Use the API endpoint:
```bash
curl -X POST http://localhost:3000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Your Project",
    "description": "Description",
    "image": "image-url",
    "technologies": ["React", "Node.js"],
    "github": "github-url",
    "ongoing": false
  }'
```

Option 2: Update `scripts/seed.ts` and re-run the seed script

### Add Your Skills

Use the API endpoint or add to the seed script:
```bash
curl -X POST http://localhost:3000/api/skills \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Skill Name",
    "category": "frontend",
    "proficiency": "advanced",
    "icon": "📘"
  }'
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variable `MONGODB_URI`
4. Deploy!

```bash
npm run build
npm run start
```

## Database Schema

### Project Model

```typescript
{
  title: string
  description: string
  image: string
  technologies: string[]
  link?: string
  github?: string
  ongoing: boolean
  progress?: number (0-100)
  createdAt: Date
  updatedAt: Date
}
```

### Skill Model

```typescript
{
  name: string
  category: 'frontend' | 'backend' | 'tools' | 'languages'
  proficiency: 'beginner' | 'intermediate' | 'advanced'
  icon?: string
  createdAt: Date
  updatedAt: Date
}
```

## License

MIT License - feel free to use this template for your portfolio!

## Support

For issues or questions, please open an issue on GitHub or reach out through the contact form on the website.

---

Built with ❤️ for CS students
