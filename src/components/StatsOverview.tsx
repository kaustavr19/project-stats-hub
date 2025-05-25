
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const StatsOverview = () => {
  const totalStats = [
    { label: 'Problems Solved', value: '1,200+', color: 'bg-green-500' },
    { label: 'Contests Participated', value: '45+', color: 'bg-blue-500' },
    { label: 'GitHub Repos', value: '28', color: 'bg-purple-500' },
    { label: 'Open Source Contributions', value: '15+', color: 'bg-orange-500' },
  ];

  const platformStats = [
    { platform: 'LeetCode', solved: 750, difficulty: { easy: 300, medium: 320, hard: 130 }, style: 'platform-leetcode' },
    { platform: 'GeeksforGeeks', solved: 180, difficulty: { easy: 100, medium: 60, hard: 20 }, style: 'platform-gfg' },
    { platform: 'Codeforces', solved: 220, difficulty: { easy: 80, medium: 100, hard: 40 }, style: 'platform-codeforces' },
    { platform: 'HackerRank', solved: 50, difficulty: { easy: 25, medium: 20, hard: 5 }, style: 'platform-hackerrank' },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Problem Solving Journey</h2>
          <p className="text-muted-foreground">My coding statistics across different platforms</p>
        </div>

        {/* Total Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {totalStats.map((stat, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6 text-center">
                <div className={`w-3 h-3 ${stat.color} rounded-full mx-auto mb-2`}></div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Platform Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Platform-wise Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platformStats.map((platform, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge className={`platform-badge ${platform.style}`}>
                      {platform.platform}
                    </Badge>
                    <span className="font-semibold">{platform.solved}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-green-600">Easy</span>
                      <span>{platform.difficulty.easy}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-yellow-600">Medium</span>
                      <span>{platform.difficulty.medium}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-red-600">Hard</span>
                      <span>{platform.difficulty.hard}</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 h-2 rounded-full"
                      style={{ width: `${Math.min((platform.solved / 1000) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default StatsOverview;
