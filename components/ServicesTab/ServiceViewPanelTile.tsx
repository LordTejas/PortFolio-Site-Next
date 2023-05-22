import React from "react";
import Image from "next/image";

export interface IServiceViewPanelTileProps {
  heading: string;
  sub_heading: string;
  imageShow: string;
}

export default function ServiceViewPanelTile({
  heading,
  sub_heading,
  imageShow,
}: IServiceViewPanelTileProps) {
  return (
    <div
      className="border-r border-b text-2xl text-center md: w-full p-3"
      onClick={() => {}}
    >
      {/* Desktop View */}
      <div className="hidden xl:flex flex-row justify-between items-center h-48 gap-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl text-bold text-justify">{heading}</h1>
          <h4 className="text-base text-medium text-justify overflow-hidden">
            {sub_heading}
          </h4>
        </div>

        <Image src={imageShow} alt="T" height={84} width={84} />
      </div>

      {/* Mobile View */}
      <div className="xl:hidden flex flex-row justify-between items-center h-24 gap-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-lg lg:text-xl text-bold text-justify">
            {heading}
          </h1>
        </div>

        <Image src={imageShow} alt="T" height={48} width={48} className="hidden sm:block"></Image>
      </div>
    </div>
  );
}
