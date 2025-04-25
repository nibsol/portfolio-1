import React from "react";
import ImageWithText from "./ImageWithText";
import Image from "next/image";

const CaseStudies = () => {
  // Sample data for case studies
  const caseStudyData = [
    {
      src: "/pngs/blog_card1.png", // Replace with your actual image paths
      alt: "Description of case study 1",
      text: "101: Crafting a Memorable Brand Mark",
    },
    {
      src: "/pngs/blog_card2.png",
      alt: "Description of case study 2",
      text: "101: Crafting a Memorable Brand Mark",
    },
    {
      src: "/pngs/blog_card3.png", 
      alt: "Description of case study 3",
      text: "101: Crafting a Memorable Brand Mark",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-content-center">
      {caseStudyData.map((caseStudy, index) => (
        <ImageWithText
          key={index} // Use a unique key if possible
          src={caseStudy.src}
          alt={caseStudy.alt}
          text={caseStudy.text}
          width={100}
          height={0}
          className="w-full rounded-xl"
          unoptimized
        />
      ))}
    </div>
  );
};

export default CaseStudies;
