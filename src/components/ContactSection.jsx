import { Mail } from 'lucide-react'
import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { DiGithub } from 'react-icons/di'
import { LiaLinkedin } from 'react-icons/lia'

const ContactSection = () => {

    return (
        <section id='contact'
            className='py-24 px-4 relative bg-secondary/30'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text4xl font-bold mb-4 text-center'>Get In <span className='text-primary'>Touch</span></h2>

                <p className='text-center text-muted-foreground mb-8 max-w-2xl mx-auto'>
                    Feel free to reach out.
                </p>
                <h3 className=' text-2xl font-semibold mb-6 mx-auto'>Contact Me</h3>
                {/* Switched container to a responsive grid instead of flex + space-x */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center sm:justify-items-start max-w-4xl mx-auto">

                    {/* Email */}
                    <div className="flex items-start w-full">
                        <div className="p-2 rounded-full bg-primary/10 shrink-0">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-medium">Email</h4>
                            <a href="mailto:dahalprabin74@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm break-all">
                                dahalprabin74@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* LinkedIn */}
                    <div className="flex items-start space-x-4 w-full">
                        <div className="p-3 rounded-full bg-primary/10 shrink-0">
                            <LiaLinkedin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-medium">LinkedIn</h4>
                            <a href="https://www.linkedin.com/in/prabin-dahal-497359343/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                Prabin Dahal
                            </a>
                        </div>
                    </div>

                    {/* Twitter */}
                    <div className="flex items-start space-x-4 w-full">
                        <div className="p-3 rounded-full bg-primary/10 shrink-0">
                            <BsTwitter className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="font-medium">Twitter</h4>
                            <a href="https://x.com/dahalprabin74" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                Prabin Dahal
                            </a>
                        </div>
                    </div>

                    {/* GitHub */}
                    <div className="flex items-start space-x-4 w-full">
                        <div className="p-3 rounded-full bg-primary/10 shrink-0">
                            <DiGithub className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-medium">GitHub</h4>
                            <a href="https://github.com/Student-Prabin" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                Student-Prabin
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactSection
