import { Navbar } from "../components/navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { AboutMe } from "../components/AboutMe";


export const Home = () => {
    return (
    <div className="min-h-screen bg-background text-foreground ">
    
        {/* Theme Toggle */} 
        <ThemeToggle/>
        {/*  */} 
        {/* NavBar */} 
        <Navbar/>
        
        {/* Profile */} 
        <AboutMe/>
        {/* Projects */} 
        {/* Footer */} 
    </div>
    );
};