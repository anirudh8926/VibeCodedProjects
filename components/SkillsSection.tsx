'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Skill {
  _id: string;
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'languages';
  proficiency: 'beginner' | 'intermediate' | 'advanced';
  icon?: string;
}

const categoryLabels = {
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Tools & DevOps',
  languages: 'Languages',
};

export default function SkillsSection() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('frontend');

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('/api/skills');
        const data = await response.json();
        setSkills(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching skills:', error);
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const categories = ['frontend', 'backend', 'tools', 'languages'];
  const filteredSkills = skills.filter((skill) => skill.category === selectedCategory);

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'advanced':
        return 'bg-emerald-100 text-emerald-800';
      case 'intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'beginner':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            A comprehensive overview of my technical skills across different domains. Click on
            categories to explore.
          </p>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="text-sm md:text-base">
                  {categoryLabels[category as keyof typeof categoryLabels]}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  {loading ? (
                    <div className="col-span-full text-center py-8">
                      <p className="text-gray-500">Loading skills...</p>
                    </div>
                  ) : filteredSkills.length > 0 ? (
                    filteredSkills.map((skill, index) => (
                      <motion.div
                        key={skill._id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Card className="hover:shadow-lg transition-shadow">
                          <CardHeader className="pb-3">
                            <div className="flex items-start justify-between">
                              <CardTitle className="text-lg">{skill.name}</CardTitle>
                              {skill.icon && <span className="text-2xl">{skill.icon}</span>}
                            </div>
                          </CardHeader>
                          <CardContent>
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-sm font-medium capitalize ${getProficiencyColor(skill.proficiency)}`}
                            >
                              {skill.proficiency}
                            </span>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-8">
                      <p className="text-gray-500">No skills found in this category</p>
                    </div>
                  )}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
