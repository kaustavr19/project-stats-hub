
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

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
      title: 'Eugenie.ai',
      description: 'Dashboard & charting features',
      icon: '🛠️',
      github: 'https://github.com/community/eugenie-ai',
    },
    {
      title: 'OpenMined',
      description: 'Contributor to PySyft',
      icon: '🌍',
      github: 'https://github.com/OpenMined/PySyft',
    },
    {
      title: 'EducationStack',
      description: 'Accessibility features and bug fixes',
      icon: '🎓',
      github: 'https://github.com/community/education-stack',
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Featured Projects */}
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
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              🤝 Open Source Contributions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {openSourceProjects.map((project, index) => (
              <Card key={index} className="card-hover bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-0">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{project.icon}</span>
                      <Github size={20} className="text-muted-foreground" />
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <h3 className="font-bold text-lg">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                  </div>
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
