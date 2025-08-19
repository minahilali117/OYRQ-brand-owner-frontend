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

        {/* main is the scrolling area; inner container centers content */}
        <main className="flex-1 bg-[#F6F3FB] overflow-auto">
          {/* IMPORTANT: use same max width + horizontal padding for all main children */}
          <div className="w-full max-w-6xl mx-auto px-6 py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
