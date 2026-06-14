import { Briefcase, Code, User, Zap } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
  return (
    <section id='about' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'>Me</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          {/* Left part */}
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold'>Aspiring Web Developer</h3>
            <p className='text-muted-foreground text-justify'>I am currently pursuing a BSc.IT degree and focusing my career 
              goals on web development. To build a strong technical skill set, I am actively learning full-stack engineering 
              with a primary focus on the MERN stack. I enjoy building dynamic web projects and learning how frontend design 
              and backend logic work together.
            </p>
            <p className='text-muted-foreground text-justify'>I prefer learning by doing, so I am constantly working on practical projects to 
              improve my coding skills. I enjoy the process of creating smooth user interfaces and connecting them 
              to reliable backend systems. My goal is to keep learning new tools and prepare myself for a successful career 
              in web development.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href="#contact" className='cosmic-button'>Get In Touch</a>

              <a href="#contact" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/20 transition-colors duration-300'>Download CV</a>

            </div>

          </div>

          {/* Right part */}
          <div className=' grid grid-cols-1 gap-6'>
            <div className='gradient-border p-6 card-hover'> 
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                <Code className='h-6 w-6'/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Strong foundation in MERN Stack</h4>
                  <p className='text-muted-foreground'>I have a solid foundation in modern 
                    tools like MERN Stack and can easily adapt to new technologies a project requires.</p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'> 
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                <Zap className='h-6 w-6'/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Fast Learner</h4>
                  <p className='text-muted-foreground'>I catch on quickly to new concepts and programming languages. 
                    I love picking up new skills and can get up to speed on a new project or tech stack in no time.</p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'> 
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                <Briefcase className='h-6 w-6'/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Flexible & Adaptable</h4>
                  <p className='text-muted-foreground'>I handle change well. Whether it’s switching to a different task, learning a new tool, or adjusting to fresh project goals, I adapt easily and keep things moving forward.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
