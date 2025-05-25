
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Header = () => {
  const nowItems = [
    {
      emoji: '🔭',
      label: 'Working on',
      description: 'A GPT-powered aptitude test coach'
    },
    {
      emoji: '📚',
      label: 'Learning',
      description: 'Rust, WebGPU, Behavioral Design'
    },
    {
      emoji: '✍️',
      label: 'Writing',
      description: 'A Medium article on AI in UX'
    },
    {
      emoji: '🎯',
      label: 'Goal',
      description: 'Contribute to OSS every week'
    }
  ];

  return (
    <header className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Developer Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Code. Solve. Create. Building scalable solutions and contributing to open source.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter size={24} />
            </a>
          </div>

          {/* Now Section */}
          <div className="mt-8 bg-card/50 backdrop-blur-sm rounded-lg p-6 border">
            <h2 className="text-2xl font-bold mb-6">📌 Now</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {nowItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-lg">{item.emoji}</span>
                  <div className="space-y-1">
                    <span className="font-medium text-sm">{item.label}: </span>
                    <span className="text-sm text-muted-foreground">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
