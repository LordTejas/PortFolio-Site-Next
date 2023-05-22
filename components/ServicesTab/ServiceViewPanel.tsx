import React from 'react';
import ServiceViewPanelTile from './ServiceViewPanelTile';
import ServiceData from './ServicesData';


export interface IServiceViewPanelProps {
  setCurrentTabIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function ServiceViewPanel ({ setCurrentTabIndex }: IServiceViewPanelProps) {

    

    return (
    <div className="flex-1 flex flex-col md:flex-row w-full bg-white shadow-xl">
        {ServiceData && ServiceData.map(ServiceViewPanelTile)}
    </div>
  );
}
