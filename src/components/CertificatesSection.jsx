import { ArrowRight } from 'lucide-react'
import React from 'react'

const CertificatesSection = () => {

    const certificates = [
        {
            id: 1,
            title: "MERN Stack Certificate",
            image: '/certificates/MERN.png',
            check: "https://www.mindrisers.com.np/certificate/validate/MR-82016-MS",
        }, {
            id: 2,
            title: "UX Foundation Certificate",
            image: '/certificates/FoundationOfUX.png',
            check: "https://coursera.org/share/c9806ddebe65a762b922bd28eb4dca93",

        },
    ]

    return (
        <section id='certificates' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    My <span className='text-primary'>Certificates</span>
                </h2>
                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Here are some of the certificates I have collected so far.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:10 md:30 lg:gap-40 cursor-pointer'>
                    {certificates.map((certificate, key) => (
                        <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
                            <div className='h-48 overflow-hidden'>
                                <img src={certificate.image} alt={certificate.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
                            </div >

                            <div className='p-6'>
                                <h3 className='text-lg font-semibold mb-1'>{certificate.title}</h3>
                                <div className='text-center mt-12'>
                                    <a href={certificate.check} target='_blank' className='cosmic-button w-fit flex items-center mx-auto gap-2'>
                                        Check It Out<ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>

            </div>
        </section>
    )
}

export default CertificatesSection
