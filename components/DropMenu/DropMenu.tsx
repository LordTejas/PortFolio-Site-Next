import React from 'react';

export interface IDropMenuProps {
    children: React.ReactNode,
}

export default function DropMenu ({children}: IDropMenuProps) {
  return (
    <div className="relative">
        {children}
    </div>
  );
}
