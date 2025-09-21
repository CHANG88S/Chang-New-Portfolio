import React, { useEffect, useState } from 'react';


const navItems = [
    { name: 'home', href: '#home' },
    { name: 'projects', href: '#projects' },
    { name: 'skills', href: '#skills' },

    { name: 'resume', href: '#resume' }, ]

export const Navbar = () => {
    const [iscrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => { window.removeEventListener("scroll", handleScroll); };
    }, []);

    return (
        <nav className = {(
            "fixed w-full p-4 px-5 z-45  " + // mx-[-130px] xl:mx-[-30px] xs:-mx-2
            (iscrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : " py-5 ")
        )}
        >
        <div className = "container flex items-center justify-center mx-auto"> 
            <div className="flex items-center space-x-8 text-sm font-medium cursor-pointer">
                {navItems.map((item, key) => (
                    <a key = {key} href = {item.href} className=""> {item.name} </a>
                ))}
            </div>
        </div>
        </nav>
    );
};