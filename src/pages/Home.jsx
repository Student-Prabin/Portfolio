import AboutSection from "../components/AboutSection"
import ContactSection from "../components/ContactSection"
import HeroSection from "../components/HeroSection"
import { Navbar } from "../components/Navbar"
import ProjectsSection from "../components/ProjectsSection"
import SkillsSection from "../components/SkillsSection"
import StarBackground from "../components/StarBackground"
import ThemeToggle from "../components/ThemeToggle"

export const Home = () => {
    return (
        <div className="min-h-screen ">


            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Background effect */}
            <StarBackground />
            {/* Navbar */}
            <Navbar/>
            {/* Main */}
            <main>
                <HeroSection/>
                <AboutSection/>
                <SkillsSection/>
                <ProjectsSection />
                <ContactSection/>
            </main>
            {/* Footer */}
        </div>
    )
}