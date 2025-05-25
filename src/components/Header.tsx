
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Header = () => {
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
        </div>
      </div>
    </header>
  );
};

export default Header;
