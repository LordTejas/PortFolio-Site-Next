import Image from 'next/image';
import React from 'react';

export interface IServiceViewProps {
  currentTabIndex: number;
}

export default function ServiceView ({ currentTabIndex }: IServiceViewProps) {

  return (
    <div className="flex-1 w-full h-full">
        <div className="relative">
          <div className="relative ">

          </div>
          <Image src="/assets/images/back-end-development.png" alt="hero Image" width={800} height={400} className="absolute right-0 object-cover" />
        </div>
    </div>
  );
}
