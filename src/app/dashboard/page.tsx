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
