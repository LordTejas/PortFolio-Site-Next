import React from "react";

export interface IDropMenuProps {
  children: React.ReactNode;
  toggleShow: React.ReactNode;
  toggleOption: boolean;
  toggleOptionHandle: () => void;
}

export default function DropMenu({
  children,
  toggleShow,
  toggleOption,
  toggleOptionHandle,
}: IDropMenuProps) {
  return (
    <>
      <div className="flex_row gap-2 relative">
        <div onClick={toggleOptionHandle}>
        {toggleShow}
        </div>
      </div>
      {toggleOption && (
        <div className="absolute top-10 right-0 w-40 p-2 bg-white shadow-md rounded-md z-10">
          <ul>{children}</ul>
        </div>
      )}
    </>
  );
}
