
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const ProjectShowcase = () => {
  const pinnedProjects = [
    {
      title: 'AI Code Assistant',
      description: 'Intelligent code completion and review tool powered by machine learning',
      tech: ['TypeScript', 'React', 'Python', 'TensorFlow'],
      github: 'https://github.com/user/ai-code-assistant',
      live: 'https://ai-code-assistant.dev',
      status: 'Live',
      featured: true,
    },
    {
      title: 'Algorithm Visualizer',
      description: 'Interactive platform for visualizing sorting and graph algorithms',
      tech: ['JavaScript', 'D3.js', 'Node.js', 'Express'],
      github: 'https://github.com/user/algorithm-visualizer',
      live: 'https://algo-viz.dev',
      status: 'Live',
      featured: true,
    },
    {
      title: 'Contest Tracker',
      description: 'Track competitive programming contests across multiple platforms',
      tech: ['React', 'TypeScript', 'PostgreSQL', 'Prisma'],
      github: 'https://github.com/user/contest-tracker',
      status: 'Development',
      featured: false,
    },
  ];

  const openSourceProjects = [
    {
      title: 'React Query Utils',
      description: 'Utility hooks and components for React Query',
      role: 'Maintainer',
      contributions: '25+ commits',
      github: 'https://github.com/community/react-query-utils',
      stars: '1.2k',
    },
    {
      title: 'LeetCode CLI',
      description: 'Command-line tool for practicing LeetCode problems',
      role: 'Contributor',
      contributions: '12 PRs merged',
      github: 'https://github.com/community/leetcode-cli',
      stars: '3.5k',
    },
    {
      title: 'Dev Portfolio Template',
      description: 'Modern portfolio template for developers',
      role: 'Core Contributor',
      contributions: '8 PRs merged',
      github: 'https://github.com/community/dev-portfolio',
      stars: '890',
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Pinned Projects */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">Showcasing my best work and current projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pinnedProjects.map((project, index) => (
              <Card key={index} className={`card-hover ${project.featured ? 'ring-2 ring-primary/20' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge variant={project.status === 'Live' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-1" />
                        Code
                      </a>
                    </Button>
                    {project.live && (
                      <Button size="sm" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Open Source Contributions */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Open Source Contributions</h2>
            <p className="text-muted-foreground">Contributing to the developer community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openSourceProjects.map((project, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge variant="secondary">{project.role}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{project.contributions}</span>
                    <span className="text-muted-foreground">⭐ {project.stars}</span>
                  </div>
                  <Button size="sm" variant="outline" className="w-full" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-1" />
                      View Project
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
