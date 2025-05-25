import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Github } from 'lucide-react';

interface OpenSourceProject { // Ensure this interface matches or is imported
  title: string;
  description: string;
  icon: string;
  github: string; // Assuming this is the link for the project
}

interface OpenSourceCardProps {
  project: OpenSourceProject;
}

const OpenSourceCard: React.FC<OpenSourceCardProps> = ({ project }) => {
  return (
    <Card className="card-hover bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-0">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          {/* Re-check how icon and Github were displayed. This is one interpretation. */}
          <span className="text-2xl">{project.icon}</span>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
             <Github size={20} />
          </a>
        </div>
        <div className="mt-4 space-y-2">
          <h3 className="font-bold text-lg">{project.title}</h3>
          <p className="text-muted-foreground text-sm">{project.description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default OpenSourceCard;
