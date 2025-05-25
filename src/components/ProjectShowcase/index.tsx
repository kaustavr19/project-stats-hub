
import React from 'react';
// Import sub-components
import ProjectCard from './ProjectCard';
import OpenSourceCard from './OpenSourceCard';
// Import Badge, Button etc. if they are still used directly in this file, otherwise remove.
// Keep Card, CardContent, CardHeader, CardTitle if used for overall structure, or remove if not.

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string; // Optional live link
  status: string;
  featured: boolean;
}

interface OpenSourceProject {
  title: string;
  description: string;
  icon: string;
  github: string;
}

const ProjectShowcase = () => {
  const pinnedProjects: Project[] = [
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

  const openSourceProjects: OpenSourceProject[] = [
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
              <ProjectCard key={index} project={project} />
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
              <OpenSourceCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
