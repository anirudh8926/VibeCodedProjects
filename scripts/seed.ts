import dbConnect from '../lib/mongodb';
import Project from '../lib/models/Project';
import Skill from '../lib/models/Skill';

const seedData = async () => {
  try {
    await dbConnect();
    console.log('Connected to MongoDB');

    // Clear existing data
    await Project.deleteMany({});
    await Skill.deleteMany({});
    console.log('Cleared existing data');

    // Seed Skills
    const skills = [
      // Frontend
      { name: 'React', category: 'frontend', proficiency: 'advanced', icon: '⚛️' },
      { name: 'TypeScript', category: 'frontend', proficiency: 'advanced', icon: '📘' },
      { name: 'Tailwind CSS', category: 'frontend', proficiency: 'advanced', icon: '🎨' },
      { name: 'Next.js', category: 'frontend', proficiency: 'advanced', icon: '▲' },
      { name: 'JavaScript', category: 'frontend', proficiency: 'advanced', icon: '✨' },

      // Backend
      { name: 'Node.js', category: 'backend', proficiency: 'advanced', icon: '🟢' },
      { name: 'Express.js', category: 'backend', proficiency: 'intermediate', icon: '⚡' },
      { name: 'MongoDB', category: 'backend', proficiency: 'advanced', icon: '🍃' },
      { name: 'REST APIs', category: 'backend', proficiency: 'advanced', icon: '🔗' },
      { name: 'Python', category: 'backend', proficiency: 'intermediate', icon: '🐍' },

      // Tools
      { name: 'Git', category: 'tools', proficiency: 'advanced', icon: '📦' },
      { name: 'Docker', category: 'tools', proficiency: 'beginner', icon: '🐳' },
      { name: 'Vercel', category: 'tools', proficiency: 'advanced', icon: '▲' },
      { name: 'GitHub', category: 'tools', proficiency: 'advanced', icon: '🐙' },
      { name: 'VS Code', category: 'tools', proficiency: 'advanced', icon: '💻' },

      // Languages
      { name: 'JavaScript', category: 'languages', proficiency: 'advanced', icon: '✨' },
      { name: 'TypeScript', category: 'languages', proficiency: 'advanced', icon: '📘' },
      { name: 'Python', category: 'languages', proficiency: 'intermediate', icon: '🐍' },
      { name: 'SQL', category: 'languages', proficiency: 'intermediate', icon: '🗄️' },
      { name: 'HTML/CSS', category: 'languages', proficiency: 'advanced', icon: '🎯' },
    ];

    await Skill.insertMany(skills);
    console.log('Seeded skills');

    // Seed Projects
    const projects = [
      {
        title: 'E-Commerce Platform',
        description: 'Full-stack e-commerce platform with payment integration and admin dashboard',
        image: 'https://images.unsplash.com/photo-1460925895917-adf4e9b359a3?w=800&q=80',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        link: 'https://example.com',
        github: 'https://github.com/example/ecommerce',
        ongoing: false,
      },
      {
        title: 'Task Management App',
        description: 'Collaborative task management application with real-time updates',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
        technologies: ['Next.js', 'TypeScript', 'Firebase'],
        link: 'https://example.com',
        github: 'https://github.com/example/tasks',
        ongoing: false,
      },
      {
        title: 'AI Chat Bot',
        description: 'Intelligent chatbot powered by machine learning for customer support',
        image: 'https://images.unsplash.com/photo-1677442d019cecf3d0a1e6e03afd792a65d64ccb?w=800&q=80',
        technologies: ['Python', 'React', 'OpenAI'],
        link: 'https://example.com',
        github: 'https://github.com/example/chatbot',
        ongoing: true,
        progress: 65,
      },
      {
        title: 'Data Visualization Dashboard',
        description: 'Interactive dashboard for visualizing complex datasets with charts and graphs',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        technologies: ['React', 'D3.js', 'Express'],
        link: 'https://example.com',
        github: 'https://github.com/example/dashboard',
        ongoing: true,
        progress: 45,
      },
      {
        title: 'Weather App',
        description: 'Beautiful weather application with location-based forecasts and alerts',
        image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80',
        technologies: ['Next.js', 'TypeScript', 'Weather API'],
        github: 'https://github.com/example/weather',
        ongoing: false,
      },
      {
        title: 'Social Media Platform',
        description: 'Full-featured social network with user profiles, posts, and real-time messaging',
        image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80',
        technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
        github: 'https://github.com/example/social',
        ongoing: true,
        progress: 80,
      },
    ];

    await Project.insertMany(projects);
    console.log('Seeded projects');

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedData();
