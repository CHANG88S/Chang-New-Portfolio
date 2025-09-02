import { Navbar } from "../components/navbar";
import { ThemeToggle } from "../components/ThemeToggle";


export const Home = () => {
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    
        {/* Theme Toggle */} 
        <ThemeToggle/>
        {/*  */} 
        {/* NavBar */} 
        <Navbar/>
        
        {/* Profile */} 
        {/* Projects */} 
        {/* Footer */} 
    </div>
    );
};