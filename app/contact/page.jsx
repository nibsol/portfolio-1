import React from 'react';
import {
  InputField,
  TextArea,
  Button,
  Accordian,
  WorkTogether,
  Hero
} from '../components';
import { ArrowUp } from '../assets/svgs/icons/arrow';
import { DESIGN_FLOW } from '../mock';


export default function ContactForm() {
  return (
    <div className='space-y-10 py-20'>
      <Hero title="Contact Me!" subtitle="Feel free to scroll through my recent works" />
      <form className="flex flex-col gap-10 items-center m-auto max-w-6xl">
        <div className="grid grid-cols-2 w-full gap-6">
          <InputField id="fullName" name="fullName" placeholder="Full Name*" required />
          <InputField id="email" name="email" type="email" placeholder="Email Address*" required />
        </div>
        <div className="grid grid-cols-2 w-full gap-6">
          <InputField id="organization" name="organization" placeholder="Organization*" required />
          <InputField id="contact" name="contact" placeholder="Contact*" required />
        </div>
        <TextArea id="message" name="message" placeholder="Your Message" />
        <Button text="Contact me" icon={ArrowUp} />
      </form>
      <div className='space-y-8'>
        <h1 className="text-3xl lg:text-6xl font-bold mb-6">
          My Design Flow
        </h1>
        <Accordian sections={DESIGN_FLOW} mode="steps" />
      </div>
      <div className='gap-20 flex  flex-col items-center'>
        <WorkTogether />
        <Button text="Contact me" icon={ArrowUp} />
      </div>
    </div>
  );
}
