'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface OngoingProject {
  _id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  ongoing: boolean;
  progress?: number;
  createdAt: string;
  updatedAt: string;
}

export default function OngoingSection() {
  const [projects, setProjects] = useState<OngoingProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects?ongoing=true');
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching ongoing projects:', error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Currently Working On</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Projects I'm actively developing. Check back to see my progress and latest updates!
          </p>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Loading projects...</p>
            </div>
          ) : projects.length > 0 ? (
            <div className="space-y-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <CardTitle className="text-2xl">{project.title}</CardTitle>
                          <CardDescription className="mt-1">{project.description}</CardDescription>
                        </div>
                        <Badge variant="destructive" className="whitespace-nowrap">
                          In Progress
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-sm font-medium text-gray-700">Progress</p>
                          <span className="text-sm font-semibold text-gray-900">
                            {project.progress || 0}%
                          </span>
                        </div>
                        <Progress value={project.progress || 0} className="h-2" />
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {project.github && (
                        <div className="pt-2">
                          <Button asChild variant="outline" size="sm">
                            <Link href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              View on GitHub
                            </Link>
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500">No ongoing projects at the moment.</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
