import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="w-full px-2 py-4 h-auto md:w-[calc(100% - 240px)] shadow-md bg-gray-100 border-b">
      <h1 className="text-xl font-bold">Welcome Back, Doggos</h1>
    </div>
  );
};

export default Navbar;
