
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const GitHubStats = () => {
  const contributionData = [
    { month: 'Jan', contributions: 145 },
    { month: 'Feb', contributions: 122 },
    { month: 'Mar', contributions: 165 },
    { month: 'Apr', contributions: 189 },
    { month: 'May', contributions: 203 },
    { month: 'Jun', contributions: 178 },
  ];

  const stats = [
    { label: 'Total Commits', value: '1,240+', color: 'text-green-600' },
    { label: 'Pull Requests', value: '85', color: 'text-blue-600' },
    { label: 'Issues Opened', value: '42', color: 'text-orange-600' },
    { label: 'Current Streak', value: '15 days', color: 'text-purple-600' },
  ];

  const languages = [
    { name: 'JavaScript', percentage: 35, color: '#f7df1e' },
    { name: 'Python', percentage: 28, color: '#3776ab' },
    { name: 'TypeScript', percentage: 20, color: '#3178c6' },
    { name: 'Java', percentage: 10, color: '#ed8b00' },
    { name: 'Other', percentage: 7, color: '#6b7280' },
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
            <Card key={index} className="card-hover">
              <CardContent className="p-6 text-center">
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contribution Graph */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Contributions</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={contributionData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="contributions" 
                    stroke="#22c55e" 
                    strokeWidth={3}
                    dot={{ fill: '#22c55e', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Language Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Language Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: lang.color }}
                        ></div>
                        <span className="text-sm font-medium">{lang.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{lang.percentage}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="h-2 rounded-full transition-all duration-300"
                        style={{
                          width: `${lang.percentage}%`,
                          backgroundColor: lang.color,
                        }}
                      ></div>
                    </div>
                  </div>
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
