import React from 'react';
import ServiceViewPanelTile from './ServiceViewPanelTile';
import ServiceData from './ServicesData';


export interface IServiceViewPanelProps {
}

export default function ServiceViewPanel ({ }: IServiceViewPanelProps) {
 
    
    
    return (
    <div className="flex flex-col md:flex-row w-full bg-white shadow-xl">
        {ServiceData && ServiceData.map(ServiceViewPanelTile)}
    </div>
  );
}
