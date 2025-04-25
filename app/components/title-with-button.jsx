
'use client'
import React from "react";
import Button from './button';
import { ArrowUp } from '../assets/svgs/icons/arrow';


const TitleWithButton = ({ title, buttonText, onButtonClick }) => {
  return (
    <div className="flex items-center justify-between w-full mb-6">
      {/* Title */}
      <h1 className="text-2xl xl:text-6xl font-medium">
        {Array.isArray(title) ? (
          title.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))
        ) : (
          title
        )}
      </h1>

      {buttonText && onButtonClick && (
        <Button
          text={buttonText}
          icon={ArrowUp}
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
};


export default TitleWithButton