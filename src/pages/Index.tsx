
import React from 'react';
import Header from '@/components/Header';
import StatsOverview from '@/components/StatsOverview';
import DifficultyChart from '@/components/DifficultyChart';
import ContestStats from '@/components/ContestStats';
import GitHubStats from '@/components/GitHubStats';
import ProjectShowcase from '@/components/ProjectShowcase';
import LiveProjects from '@/components/LiveProjects';
import Now from '@/components/Now';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <ThemeToggle />
      <Header />
      <StatsOverview />
      <DifficultyChart />
      <ContestStats />
      <GitHubStats />
      <ProjectShowcase />
      <LiveProjects />
      <Now />
      <Footer />
    </div>
  );
};

export default Index;
