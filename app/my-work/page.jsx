import React from "react";
import { Hero, TitleWithButton, CaseStudies, ImageGridOne } from '../components';

const MyWork = () => {
  return (
    <div className='space-y-10'>
      <Hero title={["Recent", "Works"]} subtitle="Feel free to scroll through my recent works" children={undefined} />
      <section className='space-y-5'>
        <TitleWithButton
          title="RECENT PROJECTS"
        />
        <ImageGridOne
          topImage={{
            src: "/pngs/Card.png",
            alt: "Woman with finger on lips",
            text: "101: Crafting a Memorable Brand Mark",
            className: 'w-full rounded-[34px] h-[500px]'

          }}
          bottomLeftImage={{
            src: "/pngs/Card_3.png",

            alt: "Holographic faces",
            text: "101: Crafting a Memorable",
            className: 'w-full rounded-[34px] h-[500px]'
          }}
          bottomRightImage={{
            src: "/pngs/Card_1.png",
            alt: "Abstract design on device screen",
            text: "101: Crafting a Memorable",
            className: 'w-full rounded-[34px] h-[500px]'
          }}
        />
        <ImageGridOne
          topImage={{
            src: "/pngs/Card.png",
            alt: "Woman with finger on lips",
            text: "101: Crafting a Memorable Brand Mark",
            className: 'w-full rounded-[34px] h-[500px]'

          }}
          bottomLeftImage={{
            src: "/pngs/Card_3.png",

            alt: "Holographic faces",
            text: "101: Crafting a Memorable",
            className: 'w-full rounded-[34px] h-[500px]'
          }}
          bottomRightImage={{
            src: "/pngs/Card_1.png",
            alt: "Abstract design on device screen",
            text: "101: Crafting a Memorable",
            className: 'w-full rounded-[34px] h-[500px]'
          }}
        />
      </section>
      <section className='space-y-5'>
        <TitleWithButton
          title="CASE STUDIES"
        />
        <CaseStudies />
      </section>
    </div>
  )
}


export default MyWork