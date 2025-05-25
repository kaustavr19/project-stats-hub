
import React from 'react';
import { ExternalLink } from 'lucide-react';

const LiveProjects = () => {
  const liveProjects = [
    {
      title: 'Notepad AI',
      status: 'Live & Running',
      gradient: 'from-green-400 to-blue-500',
      url: 'https://notepad-ai.dev'
    },
    {
      title: 'Aptitude Prep',
      status: 'Live & Running',
      gradient: 'from-blue-400 to-purple-500',
      url: 'https://aptitude-prep.dev'
    },
    {
      title: 'Crypto Portfolio Tracker',
      status: 'Live & Running',
      gradient: 'from-purple-400 to-blue-600',
      url: 'https://crypto-tracker.dev'
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
            🌐 Live Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {liveProjects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${project.gradient} text-white group hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <ExternalLink size={20} className="group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-white/90 text-sm">{project.status}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveProjects;
