// src/components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="bg-gray-800 text-white" style={{ width: '240px' }}>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Admin</h1>
      </div>
      <nav>
        <ul>
          <li className={`p-4 ${pathname === '/admin' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
            <Link href="/admin">Dashboard</Link>
          </li>
          <li className={`p-4 ${pathname === '/admin/dogs' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
            <Link href="/admin/dogs">Dogs</Link>
          </li>
          <li className={`p-4 ${pathname === '/admin/settings' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
            <Link href="/admin/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
