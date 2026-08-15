import { ArrowRight, ExternalLink, FileCode2, Link } from 'lucide-react'
import { DiGithub } from 'react-icons/di'
import React from 'react'

const ProjectsSection = () => {

    const projects = [
        {
            id: 1,
            title: "LinkUp: Social Media Platform",
            description: "LinkUp is a full-stack social networking platform where users can share stories, connect with friends, chat in real time, and interact through likes and comments.",
            image: '/projects/LinkUp.png',
            altText: "LinkUp MERN stack social media application dashboard preview showing real-time chat interface and user activity stories.",
            tags: ["React", "Tailwind", "MongoDB", "Express", "Node.js"],
            demoUrl: "https://link-up-chi.vercel.app/",
            githubUrl: "https://github.com/Student-Prabin/Social-Media",
        }, {
            id: 2,
            title: "MealZone: Collection of Recipes",
            description: "MealZone is an interactive web application that helps users find and prepare delicious meals by pulling real-time recipe cards and instructional tutorials from the web.",
            image: '/projects/MealZone.png',
            altText: "MealZone recipe finder web app interface displaying culinary categories and cooking video step-by-step components.",
            tags: ["React", "Tailwind", "Axios", "REST API"],
            demoUrl: "https://meal-zone-pi.vercel.app/",
            githubUrl: "https://github.com/Student-Prabin/MealZone",
        }, {
            id: 3,
            title: "Task Planner: Plan your schedules",
            description: "Task Planner is a simple and efficient web-based To-Do application designed to help users organize their daily tasks effortlessly with local browser persistence.",
            image: '/projects/TaskPlanner.png',
            altText: "Task Planner tool user interface layout tracking daily lists, check boxes, and completion progress metrics.",
            tags: ["React", "Tailwind", "JavaScript", "LocalStorage"],
            demoUrl: "https://to-do-app-lake-iota.vercel.app/",
            githubUrl: "https://github.com/Student-Prabin/ToDo-app",
        },
        {
            id: 4,
            title: "Music Player",
            description: "A modern and responsive web-based music player built with HTML, CSS, and JavaScript. It allows users to play, pause, skip tracks, and enjoy their favorite songs through an elegant and interactive interface.",
            image: '/projects/MusicPlayer.png',
            altText: "Responsive dark-themed audio web streaming platform UI showing progress volume bars and track queues.",
            tags: ["React", "Tailwind", "JavaScript"],
            demoUrl: "https://music-player-ten-ruby-73.vercel.app/",
            githubUrl: "https://github.com/Student-Prabin/Music-Player",
        },
        {
            id: 5,
            title: "Memory Game",
            description: "An interactive, browser-based memory card game built to challenge and improve short-term visual retention. Flip cards, find matching pairs, and try to clear the board!",
            image: '/projects/MemoryGame.png',
            altText: "Interactive puzzle matching block framework demonstrating fluid 3D card flip transitions.",
            tags: ["React", "Tailwind", "JavaScript"],
            demoUrl: "https://memory-card-game-beta-sand.vercel.app/",
            githubUrl: "https://github.com/Student-Prabin/Memory-Card-Game",
        }
    ]

    return (
       <section id='projects' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Featured <span className='text-primary'>Projects</span>
                </h2>
                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Here are some of my recent projects. Each project was carefully crafted with attention to detail,
                    performance, and user experience.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                    {projects.map((project, key) => (
                        <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col justify-between border border-border/40'>
                            <div>
                                <div className='h-48 overflow-hidden bg-muted relative'>
                                    {/* Using targeted descriptive text instead of raw titles for alt attributes */}
                                    <img 
                                        src={project.image} 
                                        alt={project.altText} 
                                        loading="lazy" 
                                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' 
                                    />
                                </div>

                                <div className='p-6 pb-0'>
                                    <div className='flex flex-wrap gap-2 mb-4 justify-start'>
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className='px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border/60'>{tag}</span>
                                        ))}
                                    </div>
                                    <h3 className='text-lg font-semibold mb-1 text-foreground'>{project.title}</h3>
                                    <p className='text-muted-foreground text-sm mb-4 text-justify leading-relaxed'>{project.description}</p>
                                </div>
                            </div>

                            <div className='p-6 pt-2'>
                                <div className='flex items-center justify-between border-t border-border/40 pt-4'>
                                    <div className='flex space-x-4 w-full'>
                                        {/* Added rel properties for secure handling of external tabs */}
                                        <a 
                                            href={project.demoUrl} 
                                            target='_blank' 
                                            rel='noopener noreferrer' 
                                            className='flex items-center gap-1.5 text-sm text-foreground/80 hover:text-primary transition-colors duration-300'
                                        >
                                            <Link size={16} aria-hidden="true" />
                                            <span>Live Demo</span>
                                        </a>
                                        <a 
                                            href={project.githubUrl} 
                                            target='_blank' 
                                            rel='noopener noreferrer' 
                                            className='flex items-center gap-1.5 text-sm text-foreground/80 hover:text-primary transition-colors duration-300'
                                        >
                                            <DiGithub size={18} aria-hidden="true" />
                                            <span>GitHub</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className='text-center mt-12'>
                    <a 
                        href="https://github.com/Student-Prabin" 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        className='cosmic-button w-fit flex items-center mx-auto gap-2'
                    >
                        <span>Check My GitHub</span> 
                        <ArrowRight size={16} aria-hidden="true" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection
