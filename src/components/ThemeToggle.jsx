import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { cn } from '../lib/utils';

const ThemeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            return storedTheme === "dark";
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

  
    const toggleTheme = () => setIsDarkMode(prev => !prev);

    return (
        <div>
            <button 
                onClick={toggleTheme}
                className={cn(
                    "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                    "focus:outline-hidden cursor-pointer"
                )}
            >
                {isDarkMode ? (
                    <Sun className="h-6 w-6 text-yellow-400" />
                ) : (
                    <Moon className="h-6 w-6 text-slate-700" />
                )}
            </button>
        </div>
    );
};

export default ThemeToggle;