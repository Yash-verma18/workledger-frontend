'use client';
import TestimonialForm from '@/components/forms/TestimonialForm';
import { Navbar } from '@/components/navbar/Navbar';
import React, { useState } from 'react';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <TestimonialForm />
    </div>
  );
};

export default Dashboard;
