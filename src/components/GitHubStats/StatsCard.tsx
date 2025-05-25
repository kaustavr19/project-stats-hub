import React from 'react';
import { Card, CardContent } from '@/components/ui/card'; // Assuming Card, CardContent are used

interface StatItem { // Ensure this interface matches the one in index.tsx or is imported
  label: string;
  value: string;
  color: string;
}

interface StatsCardProps {
  stat: StatItem;
}

const StatsCard: React.FC<StatsCardProps> = ({ stat }) => {
  return (
    <Card className="card-hover">
      <CardContent className="p-6 text-center">
        <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
        <div className="text-sm text-muted-foreground">{stat.label}</div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
