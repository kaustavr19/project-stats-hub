import React from 'react';

interface LanguageItem { // Ensure this interface matches or is imported
  name: string;
  percentage: number;
  color: string;
  icon: string;
}

interface LanguageBarProps {
  language: LanguageItem;
}

const LanguageBar: React.FC<LanguageBarProps> = ({ language }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className="text-lg">{language.icon}</span>
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: language.color }}
          ></div>
          <span className="text-sm font-medium">{language.name}</span>
        </div>
        <span className="text-sm text-muted-foreground">{language.percentage}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div
          className="h-2 rounded-full transition-all duration-300"
          style={{
            width: `${language.percentage}%`,
            backgroundColor: language.color,
          }}
        ></div>
      </div>
    </div>
  );
};

export default LanguageBar;
