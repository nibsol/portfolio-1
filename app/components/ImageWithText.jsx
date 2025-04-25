import Image from "next/image";
import React from 'react';



const ImageWithText = ({ src, alt, text, width, height, className }) => {
  return (
    <div className="relative w-full h-full overflow-hidden object-contain rounded-[34px]">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        unoptimized
      />
      {text && (
        <h2 className="text-white absolute bottom-10 left-5 text-lg xl:text-2xl font-bold leading-tight">
          {text}
        </h2>
      )}
    </div>
  );
};

export default ImageWithText;
