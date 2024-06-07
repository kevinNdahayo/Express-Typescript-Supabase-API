"use client"
import React from 'react';
import DashboardLayout from '@/app/admin/dashboardLayout';

const Settings: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow rounded">Block 1</div>
          <div className="bg-white p-4 shadow rounded">Block 2</div>
          <div className="bg-white p-4 shadow rounded">Block 3</div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
