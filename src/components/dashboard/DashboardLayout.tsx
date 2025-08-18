import React from 'react';
import Sidebar from '@/components/ui/Sidebar';
import Header from '@/components/ui/Header';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, title }) => {
  return (
    <div className="h-screen flex font-inter overflow-hidden">
      <aside className="w-64 bg-white border-r border-gray-200 shadow-2xl flex-shrink-0">
        <Sidebar />
      </aside>
      <div className="flex-1 flex flex-col min-w-0">
        <div className="shadow-2xl flex-shrink-0">
          <Header title={title} />
        </div>
        <main className="flex-1 p-6 bg-[#F6F3FB] overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
