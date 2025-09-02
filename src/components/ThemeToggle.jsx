import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        }   else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                setIsDarkMode(true);
            }
        };

    return ( 
        <button onClick = {toggleTheme} className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 shadow-lg z-50"> 
            {isDarkMode ? ( <Sun className="h-6 w-6 text-yellow-300"/> ) : (<Moon className="h-6 w-6 text-blue-300"/>)} 
        </button>
    );
};
