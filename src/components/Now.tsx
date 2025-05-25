
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
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">📌 Now</h2>
          <p className="text-muted-foreground">What I'm currently focused on</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Current Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nowItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                  <span className="text-2xl">{item.emoji}</span>
                  <div className="space-y-1">
                    <div className="font-medium text-sm text-muted-foreground">{item.label}:</div>
                    <div className="text-foreground">{item.description}</div>
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
