'use client';
import TestimonialForm from '@/components/forms/TestimonialForm';
import { Navbar } from '@/components/navbar/Navbar';
import { TestimonialType } from '@/lib/type';
import React, { useEffect, useState } from 'react';
import { readContract } from 'viem/actions';
import { usePublicClient } from 'wagmi';

import { WORKLEDGER_ADDRESS } from '@/lib/constants';
import { WorkLedgerABI } from '@/lib/WorkLedgerABI';
import { formatEther } from 'viem';
import TestimonialsGrid from '@/components/grids/TestimonialsGrid';
const Dashboard = () => {
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);
  const [showTestimonialForm, setOpen] = useState(false);
  const publicClient = usePublicClient();
  useEffect(() => {
    if (!publicClient) return;
    const fetchTestimonials = async () => {
      try {
        const data = await readContract(publicClient, {
          address: WORKLEDGER_ADDRESS,
          abi: WorkLedgerABI,
          functionName: 'getAllTestimonials',
        });

        console.log('data', data);

        const mapped = (data as any[]).map((t: any) => ({
          from: t.from,
          name: t.name,
          message: t.message,
          workDescription: t.workDescription,
          rating: Number(t.rating),
          tip: `${formatEther(BigInt(t.amount))} ETH`,
          rawTimestamp: Number(t.timestamp), // keep raw timestamp for sorting
          timestamp: new Date(Number(t.timestamp) * 1000).toLocaleString(),
        }));

        const sorted = mapped.sort((a, b) => b.rawTimestamp - a.rawTimestamp);

        setTestimonials(sorted);
      } catch (err) {
        console.error('❌ Failed to fetch testimonials:', err);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    console.log('testimonials', testimonials);
  }, [testimonials]);

  return (
    testimonials?.length > 0 && (
      <div>
        <div className='w-full h-15 relative flex  items-center px-6 z-10  rounded-4xl  mt-2 '>
          <Navbar setOpen={setOpen} />
        </div>

        <p className='text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center'>
          Your Testimonials
        </p>
        <p className='text-base md:text-lg mt-4 text-white font-normal inter-var text-center'>
          Leverage the power of onchain work review.
        </p>

        {!showTestimonialForm && (
          <div className='mt-10'>
            <TestimonialsGrid testimonials={testimonials} />
          </div>
        )}

        {showTestimonialForm && (
          <TestimonialForm
            onSubmitted={() => setOpen(false)}
            setTestimonials={setTestimonials}
          />
        )}
      </div>
    )
  );
};

export default Dashboard;
