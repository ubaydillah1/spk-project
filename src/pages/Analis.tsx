// Analytics.tsx
import React from 'react';
import Sidebar from './Sidebar';

const Analytics: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-blue-900 text-white p-8">
        <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
        <p className="mt-4">Welcome to the Analytics page!</p>
        {/* Add your analytics content here */}
      </div>
    </div>
  );
};

export default Analytics;