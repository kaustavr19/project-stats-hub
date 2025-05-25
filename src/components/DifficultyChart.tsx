
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DifficultyChart = () => {
  const data = [
    { name: 'Easy', value: 505, color: '#22c55e' },
    { name: 'Medium', value: 500, color: '#eab308' },
    { name: 'Hard', value: 195, color: '#ef4444' },
  ];

  const topicData = [
    { topic: 'Dynamic Programming', solved: 180, color: '#8b5cf6' },
    { topic: 'Trees & Graphs', solved: 250, color: '#06b6d4' },
    { topic: 'Arrays & Strings', solved: 300, color: '#10b981' },
    { topic: 'Greedy Algorithms', solved: 120, color: '#f59e0b' },
    { topic: 'Backtracking', solved: 85, color: '#ef4444' },
    { topic: 'Binary Search', solved: 95, color: '#6366f1' },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border rounded-lg shadow-lg">
          <p className="font-medium">{payload[0].name}</p>
          <p className="text-sm text-muted-foreground">
            Problems: {payload[0].value}
          </p>
          <p className="text-sm text-muted-foreground">
            Percentage: {((payload[0].value / 1200) * 100).toFixed(1)}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Difficulty Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Difficulty Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Topic Strength */}
          <Card>
            <CardHeader>
              <CardTitle>Topic-wise Strength</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topicData.map((topic, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{topic.topic}</span>
                      <span className="text-sm text-muted-foreground">{topic.solved}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="h-2 rounded-full transition-all duration-300"
                        style={{
                          width: `${(topic.solved / 300) * 100}%`,
                          backgroundColor: topic.color,
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

export default DifficultyChart;
