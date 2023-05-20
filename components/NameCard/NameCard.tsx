import React from 'react';

export interface INameCardProps {}

export default function NameCard ({}: INameCardProps) {
  return (
    <section className="flex w-full name_card">
        {/* Video Background */}
        <div className="relative w-full h-full bg-black">
          <video
            className="w-full h-full object-top object-cover"
            autoPlay
            muted
            loop
          >
            <source
              src="/assets/videos/circuit-dark-blue.mp4"
              type="video/mp4"
            />
          </video>

          {/* Content */}
          <div className="absolute w-full  inset-0 flex flex-col items-center justify-center font-bold text-2xl md:text-3xl xl:text-6xl text-center text-white">
            <p className="">
              Hello, I am{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
                TEJAS KANJI
              </span>
              .
            </p>
            <p className="flex flex-col md:flex-row md:gap-3">
              <span>
              Not Your Average
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                FULL STACK DEVELOPER
              </span>
            </p>
          </div>

        </div>
      </section>
  );
}
