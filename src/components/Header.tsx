
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Header = () => {
  return (
    <header className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Kaustav Roy
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100">
              Code. Contribute. Create.
            </p>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Developer passionate about solving problems, building products, and contributing 
              to open source. Currently exploring AI-enhanced learning tools and writing code 
              that scales empathy.
            </p>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a href="https://github.com" className="text-blue-200 hover:text-white transition-colors">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com" className="text-blue-200 hover:text-white transition-colors">
              <Linkedin size={28} />
            </a>
            <a href="https://twitter.com" className="text-blue-200 hover:text-white transition-colors">
              <Twitter size={28} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
