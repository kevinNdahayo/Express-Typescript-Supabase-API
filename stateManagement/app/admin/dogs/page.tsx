"use client";
import React from 'react';
import DashboardLayout from '@/app/admin/dashboardLayout';
import { useDogBreedStore } from '@/utils/store';
import RotateLoader from 'react-spinners/RotateLoader';

const Dogs: React.FC = () => {
  const { data, loading, error } = useDogBreedStore(state => ({
    data: state.data,
    loading: state.loading,
    error: state.error
  }));

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 h-screen gap-4">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-2xl font-bold mb-4 text-center">Dog Breeds</h2>
          <div className='flex flex-col justify-center items-center border-2 p-6 md:gap-y-4'>
            {loading && <span>
              <RotateLoader color="#000000" size={10} />
            </span>}
            {error && <span>Error: {error}</span>}
            {data && data.message && (
              <ul className='grid md:grid-cols-6'>
                {Object.keys(data.message).map((breed, index) => (
                  <li key={index} className='px-4 py-2 border-2 shadow-sm'>{breed}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dogs;
