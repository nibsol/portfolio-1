'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Hero, Accordian, ImageGrid, CaseStudies, TitleWithButton } from "./components";
import { SINCE_2018 } from "./mock";
import { Diamond } from './assets/svgs/icons/diamond';

export default function Home() {
  const router = useRouter();

  return (
    <div className="space-y-16">
      <Hero title={["Talha", "Shahid"]}>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <span className="text-lg sm:text-xl">Principal Product Designer</span>
          <Diamond />
          <span className="text-lg sm:text-xl">UX Expert</span>
          <Diamond />
          <span className="text-lg sm:text-xl">Design Enthusiast</span>
        </div>
      </Hero>

      <ImageGrid
        image1='/pngs/Card_5.png'
        image2='/pngs/Card.png'
        image3='/pngs/Card_2.png'
        image4='/pngs/Card_3.png'
        image5='/pngs/Card_1.png'
      />

      <TitleWithButton
        title={["DESIGNING", "FOR PASSION SINCE 2018"]}
      />
      <Accordian mode="images" sections={SINCE_2018} />


      <TitleWithButton
        title={"RECENT PROJECTS"}
        buttonText="TAKE ME THERE"
        onButtonClick={() => { }}
      />
      <div className="space-y-8">
        <Image width={100} height={100} className="w-full h-full object-cover" unoptimized quality={100} src='/pngs/cover_1.png' />
        <Image width={100} height={100} className="w-full h-full object-cover" unoptimized quality={100} src='/pngs/cover_3.png' />
        <Image width={100} height={100} className="w-full h-full object-cover" unoptimized quality={100} src='/pngs/cover_2.png' />
      </div>

      <div>
        <TitleWithButton
          title={["CASE STUDIES"]}
          buttonText="View all"
          onButtonClick={() => router.push('/my-work')}
        />

        <CaseStudies />
      </div>
    </div>
  );
}
