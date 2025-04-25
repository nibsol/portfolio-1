import React from 'react';

const Hero = ({ title, subtitle, children }) => (
  <div className="flex flex-col items-center text-center gap-4 px-4 py-14 w-full">
    <h1 className="leading-none font-normal text-[54px] md:text-[120px] lg:text-[152px]">
      {/* Check if title is an array and render each part */}
      {Array.isArray(title) ? (
        title.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            <br />
          </React.Fragment>
        ))
      ) : (
        title
      )}
    </h1>

    {subtitle && (
      <p className="text-lg sm:text-xl">
        {subtitle}
      </p>
    )}

    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
      {children}
    </div>
  </div>
);

export default Hero