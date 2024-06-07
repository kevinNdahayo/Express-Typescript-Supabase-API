// src/components/DashboardLayout.tsx
import React, { useEffect } from 'react';
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/navbar';
import { useDogBreedStore } from '@/utils/store';

interface DashboardProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardProps> = ({ children }) => {
  const { fetchData } = useDogBreedStore((state) => ({
    fetchData: state.fetchData
  }));

  useEffect(() => {
    fetchData('https://dog.ceo/api/breeds/list/all');
  }, [fetchData])
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Navbar />
        <main className="flex-grow overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
