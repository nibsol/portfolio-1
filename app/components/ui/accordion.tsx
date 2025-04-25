'use client';
import React, { useState } from 'react';

interface AccordionImage {
  src: string;
  alt?: string;
}

interface AccordionSection {
  title: string;
  steps?: string[];
  images?: AccordionImage[] | string[];
}

interface AccordionProps {
  sections: AccordionSection[];
  mode: 'steps' | 'images';
}

const Accordion: React.FC<AccordionProps> = ({ sections, mode }) => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="w-full bg-white">
      <div className="space-y-4">
        {sections.map((section, index) => (
          <div key={index}>
            <div className="border-2 border-black rounded-2xl p-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection(index)}
              >
                <h2 className="text-xl lg:text-4xl font-medium">+ {section.title}</h2>
              </div>
              {openSection === index && mode === 'steps' && section.steps && (
                <ol className="list-decimal text-lg lg:text-2xl list-inside space-y-2 mt-4">
                  {section.steps.map((step, stepIndex) => (
                    <li key={stepIndex}>{step}</li>
                  ))}
                </ol>
              )}
            </div>
            {openSection === index && mode === 'images' && section.images && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {section.images.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={typeof image === 'string' ? image : image.src}
                    alt={typeof image === 'string' ? `Image ${imageIndex + 1}` : (image.alt || `Image ${imageIndex + 1}`)}
                    className="w-full rounded-3xl h-auto"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion; 