
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-t border-gray-200 dark:border-gray-700 gap-8">
          <div>
            <p className="font-medium text-sm tracking-widest text-gray-500 dark:text-gray-400">
              WHERE IDEAS THRIVE AND CODE CONNECTS
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
            <div>
              <h4 className="font-bold text-sm mb-2 text-gray-500 dark:text-gray-400">PROFILE</h4>
              <div className="space-y-1 text-sm">
                <a href="#about" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
                <a href="#projects" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
                <a href="#open-source" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Open Source</a>
                <a href="#now" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Now</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-2 text-gray-500 dark:text-gray-400">CONNECT</h4>
              <div className="space-y-1 text-sm">
                <a href="mailto:kaustav@example.com" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Email</a>
                <a href="https://linkedin.com/in/kaustav-roy" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">LinkedIn</a>
                <a href="https://twitter.com/kaustav_ux" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Twitter</a>
                <a href="https://github.com/kaustav-roy" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-2 text-gray-500 dark:text-gray-400">RESOURCES</h4>
              <div className="space-y-1 text-sm">
                <a href="https://kaustav.dev/resume.pdf" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Résumé</a>
                <a href="#stats" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub Stats</a>
                <a href="#analytics" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Analytics</a>
                <a href="#contact" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center pb-8 gap-4">
          <div className="flex gap-2">
            {['K', 'A', 'U', 'S', 'T', 'A', 'V'].map((letter, index) => (
              <span 
                key={index}
                className="border border-gray-200 dark:border-gray-700 px-3 py-2 rounded-lg text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {letter}
              </span>
            ))}
          </div>

          <div className="text-sm text-gray-500 dark:text-gray-400 text-center sm:text-right">
            © 2025 Kaustav Roy &nbsp;&nbsp;|&nbsp;&nbsp; Made with ❤️ in India
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
