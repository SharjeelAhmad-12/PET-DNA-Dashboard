'use client';

import { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import AppBar from '../AppBar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setSidebarOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    if (isMobile) setSidebarOpen(false);
  };

  const contentMargin = isMobile ? 'ml-0' : 'ml-64';

  return (
    <div className="min-h-screen bg-gray-50">
      {isMobile && sidebarOpen && (
        <div className="fixed inset-0 bg-black/40 bg-opacity-50 z-40" onClick={closeSidebar} />
      )}

      <Sidebar
        isOpen={sidebarOpen}
        isMobile={isMobile}
        onClose={closeSidebar}
      />

      <div className={`transition-all duration-300 ease-in-out ${contentMargin}`}>
        <AppBar
          onToggleSidebar={toggleSidebar}
          isMobile={isMobile}
        />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}