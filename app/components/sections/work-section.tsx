import React from 'react';
import { Button } from '@/app/components/ui/button';
import { CASE_STUDIES } from '@/app/mock';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
  title: string;
  slug: string;
  description: string;
  tags?: string[];
  image: string;
}

const WorkSection = () => {
  return (
    <section id="work" className="py-20 space-y-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">My Work</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Explore my portfolio of projects spanning AI solutions, automation, and educational technology
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CASE_STUDIES.map((project: Project, index: number) => (
          <div key={index} className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all">
            <div className="aspect-video relative bg-muted">
              <Image
                src={project.image || "https://images.unsplash.com/photo-1677442135136-760c813f9612"}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags?.map((tag: string, tagIndex: number) => (
                  <span key={tagIndex} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <Button asChild className="mt-4">
                <a href="#contact">Learn More</a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection; 