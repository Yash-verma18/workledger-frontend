'use client';

import { useAccount } from 'wagmi';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import WalletConnect from '@/components/rainbowKit/WalletConnect';
import Image from 'next/image';
export default function Home() {
  const { isConnected } = useAccount();
  const router = useRouter();
  useEffect(() => {
    if (isConnected) {
      router.push('/dashboard');
    }
  }, [isConnected, router]);
  return (
    <div className='flex flex-col items-center justify-center w-full gap-8 mt-20'>
      <Image
        src='/work.svg'
        alt='Work'
        width={1920}
        height={300}
        className='w-full max-w-[80%] object-contain mx-auto '
        priority
      />

      <WalletConnect />

      <Image
        src='/ledger.svg'
        alt='Ledger'
        width={1920}
        height={300}
        className='w-full max-w-[80%] object-contain '
      />
    </div>
  );
}
