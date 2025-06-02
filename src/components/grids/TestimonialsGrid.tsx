'use client';

import Image from 'next/image';
import { useState } from 'react';

import { TiltedCard } from './tilted-card';
import { TestimonialType } from '@/lib/type';

type Props = {
  testimonials: TestimonialType[];
};

export default function TestimonialsGrid({ testimonials }: Props) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className='w-full py-2 px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {testimonials.map((t, i) => {
        const overlayContent = (
          <div className='absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-neutral-100/80 to-transparent dark:from-black/80 dark:to-transparent rounded-b-[15px] z-10'>
            {/* Avatar Row */}
            <div className='flex items-center gap-3 mb-3'>
              <Image
                src='/avatar.svg'
                alt='Avatar'
                width={40}
                height={40}
                className='rounded-full'
              />
              <div>
                <p className='font-bold text-sm text-neutral-800 dark:text-neutral-200'>
                  {t.name}
                </p>
                <p className='text-xs text-neutral-500 dark:text-neutral-400'>
                  {t.from.slice(0, 6)}...{t.from.slice(-4)}
                </p>
              </div>
            </div>

            {/* Tip & Rating */}
            <div className='flex gap-2 text-sm font-semibold mb-2'>
              <div className='bg-neutral-100 dark:bg-neutral-800 rounded px-2 py-1 text-neutral-900 dark:text-neutral-100'>
                TIP: {t.tip}
              </div>
              <div className='bg-neutral-100 dark:bg-neutral-800 rounded px-2 py-1 text-neutral-900 dark:text-neutral-100'>
                ⭐ {t.rating}/5
              </div>
            </div>

            {/* Message */}
            <p className='text-xs font-medium mb-1 text-neutral-800 dark:text-neutral-100'>
              {t.message}
            </p>

            {/* Work Description */}
            <div className='text-sm mt-2'>
              <p className='text-xs text-neutral-500 dark:text-neutral-400 uppercase'>
                Work Details
              </p>
              {t.workDescription.length > 50 ? (
                <span className='font-bold text-neutral-900 dark:text-white'>
                  {expandedIndex === i ? (
                    <>
                      {t.workDescription}
                      <button
                        onClick={() => setExpandedIndex(null)}
                        className='text-sm text-blue-600 dark:text-blue-300 underline ml-1'
                      >
                        less..
                      </button>
                    </>
                  ) : (
                    <>
                      {t.workDescription.slice(0, 30)}...
                      <button
                        onClick={() => setExpandedIndex(i)}
                        className='text-sm text-blue-600 dark:text-blue-300 underline ml-1'
                      >
                        more..
                      </button>
                    </>
                  )}
                </span>
              ) : (
                <span className='font-bold text-neutral-900 dark:text-white'>
                  {t.workDescription}
                </span>
              )}
            </div>

            {/* Timestamp */}
            <p className='text-[10px] text-right mt-2 text-neutral-500 dark:text-neutral-400'>
              {t.timestamp}
            </p>
          </div>
        );

        return (
          <TiltedCard
            key={i}
            imageSrc='/bg-card.jpg'
            altText='Testimonial Card'
            captionText={`⭐ ${t.rating}/5`}
            containerHeight='340px'
            containerWidth='100%'
            imageHeight='100%'
            imageWidth='100%'
            scaleOnHover={1.07}
            rotateAmplitude={12}
            showMobileWarning={false}
            showTooltip={false}
            overlayContent={overlayContent}
            displayOverlayContent={true}
          />
        );
      })}
    </div>
  );
}
