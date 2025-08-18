import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import DashboardCards from '@/components/dashboard/DashboardCards';
import DashboardCharts from '@/components/dashboard/DashboardCharts';

const DashboardPage: React.FC = () => {
  return (
    <DashboardLayout title="Dashboard">
      <div className="px-4">
        <DashboardCards />
        <DashboardCharts />
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
