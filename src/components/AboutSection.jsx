import { Briefcase, Code, User, Zap } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
  return (
    <section id='about' className='py-24 px-4 relative bg-background'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'>Me</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          {/* Left Column */}
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold text-foreground'>Aspiring Full-Stack Web Developer</h3>
            <p className='text-muted-foreground text-justify leading-relaxed'>
              I am currently pursuing my BSc.IT degree and channeling my academic foundation directly into professional web development. 
              To build a reliable full-stack technical skill set, I am actively engineering applications with a primary focus on the MERN stack (MongoDB, Express, React, Node.js). 
              I enjoy constructing dynamic web systems and discovering how intuitive frontend design intersects with robust backend server logic.
            </p>
            <p className='text-muted-foreground text-justify leading-relaxed'>
              I prioritize a practical, hands-on learning approach, which drives me to consistently build real-world web apps to refine my architectural capabilities. 
              Creating responsive user interfaces and integrating them seamlessly with secure data endpoints keeps me deeply engaged. 
              My objective is to persistently adopt modern cloud tooling to build a high-impact career in full-stack engineering.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start'>
              <a href="#contact" className='cosmic-button text-center'>
                Get In Touch
              </a>
              <a  
                href="/certificates/prabin-dahal-cv.pdf"  
                download="Prabin-Dahal-CV.pdf" 
                className='px-6 py-2.5 rounded-full border border-primary text-primary hover:bg-primary/10 text-center font-medium text-sm transition-colors duration-300'
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className='grid grid-cols-1 gap-6'>
            <div className='gradient-border p-6 card-hover bg-card rounded-lg border border-border/40'> 
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10 text-primary shrink-0'>
                  <Code className='h-6 w-6' aria-hidden="true" />
                </div>
                <div className='text-left'>
                
                  <p className='font-semibold text-lg text-foreground mb-1'>Strong MERN Stack Foundation</p>
                  <p className='text-muted-foreground text-sm leading-relaxed'>
                    I have built solid core proficiencies with modern database modeling and interface development tools, letting me pivot across backend and frontend environments easily.
                  </p>
                </div>
              </div>
            </div>

            <div className='gradient-border p-6 card-hover bg-card rounded-lg border border-border/40'> 
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10 text-primary shrink-0'>
                  <Zap className='h-6 w-6' aria-hidden="true" />
                </div>
                <div className='text-left'>
                  <p className='font-semibold text-lg text-foreground mb-1'>Fast & Continuous Learner</p>
                  <p className='text-muted-foreground text-sm leading-relaxed'>
                    I grasp new programming paradigms and computational theories quickly. I thoroughly enjoy discovering complex tooling frameworks to maintain rapid building tempos.
                  </p>
                </div>
              </div>
            </div>

            <div className='gradient-border p-6 card-hover bg-card rounded-lg border border-border/40'> 
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10 text-primary shrink-0'>
                  <Briefcase className='h-6 w-6' aria-hidden="true" />
                </div>
                <div className='text-left'>
                  <p className='font-semibold text-lg text-foreground mb-1'>Flexible & Adaptable Developer</p>
                  <p className='text-muted-foreground text-sm leading-relaxed'>
                    I manage technical adjustments fluidly. Whether refactoring system endpoints, switching environments, or realigning project definitions, I adapt cleanly to keep production moving.
                  </p>
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
