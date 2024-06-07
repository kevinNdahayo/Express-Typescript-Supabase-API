"use client"
import React from 'react';
import DashboardLayout from '@/app/admin/dashboardLayout';
import { useDogBreedStore } from '@/utils/store';
import { RotateLoader } from "react-spinners"

const Admin: React.FC = () => {
  const { data, loading, error } = useDogBreedStore((state) => ({
    data: state.data,
    loading: state.loading,
    error: state.error
  }))

  const breedCount = data ? Object.keys(data.message).length : 0;

  return (
    <DashboardLayout>
      <div className="ml-[32px]">
        <div className="grid grid-cols-4  gap-4">
          <div className="bg-white p-4 shadow rounded flex flex-col md:gap-y-2  text-lg text-black text-center">
            <span className='font-bold'>Dog Breeds</span>
            <span className='font-medium'>
              {loading && <span>
                <RotateLoader color="#000000" size={10} />
              </span>}
              {error && <span>Error {error}</span>}
              {
                data && <span>{breedCount}</span>
              }
            </span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Admin;
