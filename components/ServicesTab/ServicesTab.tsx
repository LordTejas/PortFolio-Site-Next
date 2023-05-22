"use client";

import React, { useState, useEffect } from "react";
import ServiceViewPanel from "./ServiceViewPanel";
import ServiceView from "./ServiceView";

export interface IServicesTabProps {
}

export default function ServicesTab({ }: IServicesTabProps) {

  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);

    return (
      <section className="flex flex-row md:flex-col w-full h-full bg-white">
        <ServiceViewPanel setCurrentTabIndex={setCurrentTabIndex} />
        <ServiceView currentTabIndex={currentTabIndex} />      
      </section>
    );
}
