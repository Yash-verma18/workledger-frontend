'use client';

import { useAccount } from 'wagmi';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import WalletConnect from '@/components/rainbowKit/WalletConnect';

export default function Home() {
  const { isConnected } = useAccount();
  const router = useRouter();
  useEffect(() => {
    if (isConnected) {
      router.push('/dashboard');
    }
  }, [isConnected, router]);
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <WalletConnect />
    </div>
  );
}
