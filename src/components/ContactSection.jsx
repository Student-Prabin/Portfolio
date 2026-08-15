import { Mail } from 'lucide-react'
import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { DiGithub } from 'react-icons/di'
import { LiaLinkedin } from 'react-icons/lia'

const ContactSection = () => {

    return (
        <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Get In <span className='text-primary'>Touch</span>
                </h2>

                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-sm md:text-base'>
                    Have a question? Feel free to reach out through any of the channels below.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">

                    {/* Email Contact Card */}
                    <div className="flex items-start space-x-4 w-full bg-card p-4 rounded-xl border border-border/40 shadow-2xs card-hover">
                        <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                            <Mail className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div className="space-y-0.5">
                            <p className="font-semibold text-sm text-foreground">Email</p>
                            <a 
                                href="mailto:dahalprabin74@gmail.com" 
                                className="text-muted-foreground hover:text-primary transition-colors text-xs break-all font-medium"
                            >
                                dahalprabin74@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* LinkedIn Professional Connection Card */}
                    <div className="flex items-start space-x-4 w-full bg-card p-4 rounded-xl border border-border/40 shadow-2xs card-hover">
                        <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                            <LiaLinkedin className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div className="space-y-0.5">
                            <p className="font-semibold text-sm text-foreground">LinkedIn</p>
                            <a 
                                href="https://www.linkedin.com/in/prabin-dahal-497359343/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="Visit Prabin Dahal's LinkedIn profile"
                                className="text-muted-foreground hover:text-primary transition-colors text-xs font-medium"
                            >
                                Prabin Dahal
                            </a>
                        </div>
                    </div>

                    {/* Twitter/X Platform Connection Card */}
                    <div className="flex items-start space-x-4 w-full bg-card p-4 rounded-xl border border-border/40 shadow-2xs card-hover">
                        <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                            <BsTwitter className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div className="space-y-0.5">
                            <p className="font-semibold text-sm text-foreground">Twitter / X</p>
                            <a 
                                href="https://x.com/dahalprabin74" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="Visit Prabin Dahal's Twitter profile"
                                className="text-muted-foreground hover:text-primary transition-colors text-xs font-medium"
                            >
                                @dahalprabin74
                            </a>
                        </div>
                    </div>

                    {/* GitHub Code Repository Card */}
                    <div className="flex items-start space-x-4 w-full bg-card p-4 rounded-xl border border-border/40 shadow-2xs card-hover">
                        <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                            <DiGithub className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div className="space-y-0.5">
                            <p className="font-semibold text-sm text-foreground">GitHub</p>
                            <a 
                                href="https://github.com/Student-Prabin" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="Visit Student-Prabin's GitHub code repositories"
                                className="text-muted-foreground hover:text-primary transition-colors text-xs font-medium"
                            >
                                @Student-Prabin
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactSection
