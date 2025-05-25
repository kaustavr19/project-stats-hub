
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const ContestStats = () => {
  const contestData = [
    { month: 'Jan', leetcode: 4, codeforces: 2, atcoder: 1 },
    { month: 'Feb', leetcode: 4, codeforces: 3, atcoder: 1 },
    { month: 'Mar', leetcode: 5, codeforces: 2, atcoder: 2 },
    { month: 'Apr', leetcode: 4, codeforces: 4, atcoder: 1 },
    { month: 'May', leetcode: 6, codeforces: 3, atcoder: 2 },
    { month: 'Jun', leetcode: 4, codeforces: 2, atcoder: 1 },
  ];

  const achievements = [
    { platform: 'LeetCode', rating: '1850', rank: 'Knight', contests: '35+' },
    { platform: 'Codeforces', rating: '1450', rank: 'Specialist', contests: '20+' },
    { platform: 'AtCoder', rating: '1200', rank: 'Brown', contests: '12+' },
    { platform: 'CodeChef', rating: '1650', rank: '3 Star', contests: '15+' },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Contest Participation</h2>
          <p className="text-muted-foreground">Competitive programming journey and achievements</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contest Frequency Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Contest Participation</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={contestData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="leetcode" fill="#eab308" name="LeetCode" />
                  <Bar dataKey="codeforces" fill="#3b82f6" name="Codeforces" />
                  <Bar dataKey="atcoder" fill="#ef4444" name="AtCoder" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Platform Ratings */}
          <Card>
            <CardHeader>
              <CardTitle>Current Ratings & Ranks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="space-y-1">
                      <div className="font-medium">{achievement.platform}</div>
                      <div className="text-sm text-muted-foreground">
                        {achievement.contests} contests
                      </div>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="text-xl font-bold">{achievement.rating}</div>
                      <Badge variant="secondary">{achievement.rank}</Badge>
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

export default ContestStats;
