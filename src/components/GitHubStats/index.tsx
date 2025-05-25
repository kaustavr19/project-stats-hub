
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Keep if Card is still used directly
// Import sub-components
import StatsCard from './StatsCard';
import ContributionChart from './ContributionChart';
import LanguageBar from './LanguageBar';

interface ContributionItem {
  month: string;
  contributions: number;
}

interface StatItem {
  label: string;
  value: string;
  color: string;
}

interface LanguageItem {
  name: string;
  percentage: number;
  color: string;
  icon: string;
}

const GitHubStats = () => {
  const contributionData: ContributionItem[] = [
    { month: 'Jan', contributions: 145 },
    { month: 'Feb', contributions: 122 },
    { month: 'Mar', contributions: 165 },
    { month: 'Apr', contributions: 189 },
    { month: 'May', contributions: 203 },
    { month: 'Jun', contributions: 178 },
  ];

  const stats: StatItem[] = [
    { label: 'Total Commits', value: '1,240+', color: 'text-green-600' },
    { label: 'Pull Requests', value: '85', color: 'text-blue-600' },
    { label: 'Issues Opened', value: '42', color: 'text-orange-600' },
    { label: 'Current Streak', value: '15 days', color: 'text-purple-600' },
  ];

  const languages: LanguageItem[] = [
    { 
      name: 'JavaScript', 
      percentage: 35, 
      color: '#f7df1e',
      icon: '⚡'
    },
    { 
      name: 'Python', 
      percentage: 28, 
      color: '#3776ab',
      icon: '🐍'
    },
    { 
      name: 'TypeScript', 
      percentage: 20, 
      color: '#3178c6',
      icon: '📘'
    },
    { 
      name: 'Java', 
      percentage: 10, 
      color: '#ed8b00',
      icon: '☕'
    },
    { 
      name: 'Other', 
      percentage: 7, 
      color: '#6b7280',
      icon: '🔧'
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">GitHub Activity</h2>
          <p className="text-muted-foreground">Development activity and contribution patterns</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatsCard key={index} stat={stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContributionChart data={contributionData} />

          <Card> {/* This Card wraps the language list */}
            <CardHeader>
              <CardTitle>Language Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <LanguageBar key={index} language={lang} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
