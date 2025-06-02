'use client';

import { useState } from 'react';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

import { useAccount, useWriteContract } from 'wagmi';
import { parseEther } from 'viem';
import { WorkLedgerABI } from '@/lib/WorkLedgerABI';
import { WORKLEDGER_ADDRESS } from '@/lib/constants';
import { TestimonialType } from '@/lib/type';

interface TestimonialFormProps {
  onSubmitted: () => void;
  setTestimonials: React.Dispatch<React.SetStateAction<TestimonialType[]>>;
}

export default function TestimonialForm({
  onSubmitted,
  setTestimonials,
}: TestimonialFormProps) {
  const { isConnected, address } = useAccount();
  const { writeContractAsync } = useWriteContract();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [work, setWork] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(5);
  const [tip, setTip] = useState('0.01');

  const handleSubmit = async () => {
    if (!isConnected || !address) return alert('Connect wallet first');
    if (!work || !message) return alert('Fill all fields');

    setIsSubmitting(true);

    try {
      const txHash = await writeContractAsync({
        address: WORKLEDGER_ADDRESS,
        abi: WorkLedgerABI,
        functionName: 'leaveTestimonial',
        args: [message, work, name, rating],
        value: parseEther(tip),
      });

      console.log('✅ Tx submitted:', txHash);

      setTestimonials((prev) => [
        {
          from: address,
          name,
          message,
          workDescription: work,
          rating,
          tip: `${tip} ETH`,
          timestamp: 'just now',
        },
        ...prev,
      ]);

      setWork('');
      setName('');
      setMessage('');
      setRating(5);
      setTip('0.01');

      onSubmitted?.();
    } catch (err) {
      console.error('❌ Error submitting testimonial:', err);
      alert('Transaction failed.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className='min-h-screen   dark:bg-zinc-950 flex items-center justify-center px-4 py-4 '>
      <div className='w-full max-w-xl bg-white dark:bg-zinc-900 rounded-xl shadow-xl p-8 space-y-6'>
        <h2 className='text-2xl font-bold text-gray-800 dark:text-white'>
          Leave a Testimonial 💬
        </h2>

        <div className='space-y-2'>
          <Label>Your Name</Label>
          <Input
            placeholder='Chandler Bing'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='space-y-2'>
          <Label>Work Description</Label>
          <Input
            placeholder='Built a cool dApp...'
            value={work}
            onChange={(e) => setWork(e.target.value)}
          />
        </div>

        <div className='space-y-2'>
          <Label>Your Message</Label>
          <Textarea
            placeholder='Yash was super fast and delivered amazing work!'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className='space-y-2'>
          <Label>Rating (1–5)</Label>
          <Input
            type='number'
            min='1'
            max='5'
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
          />
        </div>

        <div className='space-y-2'>
          <Label>Tip in ETH</Label>
          <Input
            type='number'
            step='0.001'
            value={tip}
            onChange={(e) => setTip(e.target.value)}
          />
        </div>

        <Button
          onClick={handleSubmit}
          className='w-full'
          disabled={isSubmitting}
        >
          💸 {isSubmitting ? 'Submitting...' : 'Send Tip + Leave Review'}
        </Button>
      </div>
    </div>
  );
}
