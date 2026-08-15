import { ArrowRight, Award } from 'lucide-react'
import React from 'react'

const CertificatesSection = () => {

    const certificates = [
        {
            id: 1,
            title: "MERN Stack Web Development Certification",
            issuer: "Mindrisers Institute of Technology",
            idNumber: "MR-82016-MS",
            image: '/certificates/MERN.png',
            altText: "Prabin Dahal's official MERN Stack course graduation certificate issued by Mindrisers Institute of Technology.",
            check: "https://www.mindrisers.com.np/certificate/validate/MR-82016-MS",
        }, {
            id: 2,
            title: "Foundations of User Experience (UX) Design",
            issuer: "Google via Coursera",
            idNumber: "Verification Link",
            image: '/certificates/FoundationOfUX.png',
            altText: "Google Career Credentials certificate awarded to Prabin Dahal for completing Foundations of User Experience (UX) Design.",
            check: "https://coursera.org/share/c9806ddebe65a762b922bd28eb4dca93",
        }, {
            id: 3,
            title: "Google AI Essentials Mastery",
            issuer: "Google via Coursera",
            idNumber: "Verification Link",
            image: '/certificates/AI.png',
            altText: "Google AI Essentials training course completion badge for leveraging generative models safely and effectively.",
            check: "https://coursera.org/share/69ced204d126a1d97199028ef36d4b5a",
        },
    ]

    return (
        <section id='certificates' className='py-24 px-4 relative bg-background'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Professional <span className='text-primary'>Certifications</span>
                </h2>
                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Verified tech skill credentials and professional training achievements earned from industry leaders.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
                    {certificates.map((certificate, key) => (
                        <div key={key} className='group bg-card rounded-lg overflow-hidden border border-border/40 shadow-xs card-hover flex flex-col justify-between'>
                            <div>
                                <div className='h-48 overflow-hidden bg-muted relative border-b border-border/20'>
                                    <img 
                                        src={certificate.image} 
                                        alt={certificate.altText} 
                                        loading="lazy"
                                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' 
                                    />
                                    <div className='absolute top-3 right-3 bg-background/80 backdrop-blur-xs p-1.5 rounded-full border border-border/50'>
                                        <Award className='h-4 w-4 text-primary' />
                                    </div>
                                </div>

                                <div className='p-6 pb-2'>
                               
                                    <h3 className='text-base font-semibold mb-1 text-foreground line-clamp-2 min-h-[3rem]'>{certificate.title}</h3>
                                    <p className='text-xs text-primary font-medium mb-1'>{certificate.issuer}</p>
                                    <p className='text-xs text-muted-foreground/80 font-mono'>ID: {certificate.idNumber}</p>
                                </div>
                            </div>

                            <div className='p-6 pt-4'>
                            
                                <a 
                                    href={certificate.check} 
                                    target='_blank' 
                                    rel='noopener noreferrer'
                                    aria-label={`Verify Prabin's ${certificate.title}`}
                                    className='cosmic-button w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium transition-transform'
                                >
                                    <span>Verify Credential</span>
                                    <ArrowRight size={14} aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CertificatesSection
