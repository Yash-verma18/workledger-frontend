import { Navbar } from '@/components/navbar/Navbar';
import React from 'react';
export const metadata = {
  title: 'Dashboard | MyApp',
  description: 'Your personal dashboard page',
};
const Dashboard = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Dashboard;
