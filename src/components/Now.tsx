
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Now = () => {
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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 dark:from-indigo-950 dark:via-purple-950 dark:to-blue-950">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            📌 Now
          </h2>
          <p className="text-muted-foreground text-lg">What I'm currently focused on</p>
        </div>

        <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-indigo-200 dark:border-indigo-800 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Current Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {nowItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/50 dark:to-purple-900/50 rounded-xl border border-indigo-200 dark:border-indigo-700 hover:scale-105 transition-transform duration-300">
                  <span className="text-3xl">{item.emoji}</span>
                  <div className="space-y-2">
                    <div className="font-bold text-indigo-700 dark:text-indigo-300">{item.label}:</div>
                    <div className="text-gray-700 dark:text-gray-300">{item.description}</div>
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

export default Now;
