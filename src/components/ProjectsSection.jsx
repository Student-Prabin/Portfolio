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
            tags: ["React", "Tailwind", "MongoDB"],
            demoUrl: "https://link-up-chi.vercel.app/",
            githubUrl: "https://github.com/Student-Prabin/Social-Media",
        }, {
            id: 2,
            title: "MealZone: Collection of Receipes",
            description: "MealZone is a simple web-based application which hepls the users to find and make delicious meals by learning the receipes from the web page.",
            image: '/projects/MealZone.png',
            tags: ["React", "Tailwind", "Axios"],
            demoUrl: "https://meal-zone-pi.vercel.app/",
            githubUrl: "https://github.com/Student-Prabin/MealZone",
        }, {
            id: 3,
            title: "Task Planner: Plan your schedules",
            description: "Task Planner is a simple and efficient web-based To-Do application designed to help users organize theirdaily tasks effortlessly.",
            image: '/projects/TaskPlanner.png',
            tags: ["React", "Tailwind","JavaScript"],
            demoUrl: "https://to-do-app-lake-iota.vercel.app/",
            githubUrl: "https://github.com/Student-Prabin/ToDo-app",
        },
        {
            id: 4,
            title: "Music Player",
            description: "A modern and responsive web-based music player built with HTML, CSS, and JavaScript. It allows users to play, pause, skip tracks, and enjoy their favorite songs through an elegant and interactive interface.",
            image: '/projects/MusicPlayer.png',
            tags: ["React", "Tailwind","JavaScript"],
            demoUrl: "https://music-player-ten-ruby-73.vercel.app/",
            githubUrl: "https://github.com/Student-Prabin/Music-Player",
        },
        {
            id: 5,
            title: "Memory Game",
            description: "An interactive, browser-based memory card game built to challenge and improve short-term visual retention. Flip cards, find matching pairs, and try to clear the board!",
            image: '/projects/MemoryGame.png',
            tags: ["React", "Tailwind","JavaScript"],
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

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 cursor-pointer'>
                    {projects.map((project, key) => (
                        <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
                            <div className='h-48 overflow-hidden'>
                                <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
                            </div >

                            <div className='p-6'>
                                <div className='flex flex-wrap gap-2 mb-4 justify-left'>
                                    {project.tags.map((tag) => (
                                        <span className='px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border'>{tag}</span>
                                    ))}
                                </div>
                            <h3 className='text-lg font-semibold mb-1'>{project.title}</h3>
                            <p className='text-muted-foreground text-sm  mb-4 text-justify'>{project.description}</p>
                            <div className='flex justify-between items-center'>
                                <div className='flex space-x-3 '>
                                    <a href={project.demoUrl} target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300'><Link size={20}/>Live Demo</a>
                                    <a href={project.githubUrl} target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300'><DiGithub size={20}/>GitHub</a>
                                </div>
                            </div>
                            </div>
                        </div>

                    ))}
                </div>
                <div className='text-center mt-12'>
                    <a href="https://github.com/Student-Prabin" target='_blank' className='cosmic-button w-fit flex items-center mx-auto gap-2'>
                        Check My GitHub <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection
