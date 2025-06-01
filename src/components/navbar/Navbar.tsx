'use client';

import { useDisconnect } from 'wagmi';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from './breadcrumb';
import { Home } from 'lucide-react';

function Navbar() {
  const { disconnect } = useDisconnect();
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href='/' onClick={() => disconnect()}>
            <Home size={16} strokeWidth={2} aria-hidden='true' />
            <span className='sr-only'>Disconnect</span>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator> / </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink style={{ cursor: 'pointer' }}>
            Dashboard
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator> / </BreadcrumbSeparator>
        <BreadcrumbItem style={{ cursor: 'pointer' }}>
          <BreadcrumbLink>Leave Testimonial</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export { Navbar };
