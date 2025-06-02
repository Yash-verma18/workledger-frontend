'use client';
import TestimonialForm from '@/components/forms/TestimonialForm';
import { Navbar } from '@/components/navbar/Navbar';
import { TestimonialType } from '@/lib/type';
import React, { useState } from 'react';

const Dashboard = () => {
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);
  const [showTestimonialForm, setOpen] = useState(false);

  console.log('testimonials', testimonials);

  return (
    <div>
      <Navbar />
      <TestimonialForm
        onSubmitted={() => setOpen(false)}
        setTestimonials={setTestimonials}
      />
    </div>
  );
};

export default Dashboard;
