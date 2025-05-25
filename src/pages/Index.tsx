
import React from 'react';
import Header from '@/components/Header';
import StatsOverview from '@/components/StatsOverview';
import DifficultyChart from '@/components/DifficultyChart';
import ContestStats from '@/components/ContestStats';
import GitHubStats from '@/components/GitHubStats';
import ProjectShowcase from '@/components/ProjectShowcase';
import Now from '@/components/Now';

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      <StatsOverview />
      <DifficultyChart />
      <ContestStats />
      <GitHubStats />
      <ProjectShowcase />
      <Now />
      
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS. 
            <span className="ml-2">© 2024 Developer Portfolio</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
