import React, { useEffect, useState } from 'react';


const navItems = [
    { name: 'home', href: '#home' },
    { name: 'about', href: '#about' },]

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
        // <header className={"fixed top-0 w-full p-2 px-5 z-50 backdrop-blur-sm mx-[-130px] xl:mx-[-30px] xs:-mx-2,"}  style={{ willChange: 'auto', transform: 'none' }} >
        //     <nav className="flex justify-between items-center">
        //         <ul className="flex">
        //             <li className="relative z-10 block cursor-pointer text-xs uppercase">
        //                 <a className="px-3 py-1.5 block" href="#Home">home</a>
        //             </li>
        //             <li className="relative z-10 block cursor-pointer text-xs uppercase">
        //                 <a className="px-3 py-1.5 block" href="#home">home</a>
        //             </li>
        //             <li className="relative z-10 block cursor-pointer text-xs uppercase">
        //                 <a className="px-3 py-1.5 block" href="#home">home</a>
        //             </li>
        //             <li className="relative z-10 block cursor-pointer text-xs uppercase">
        //                 <a className="px-3 py-1.5 block" href="#home">home</a>
        //             </li>
        //             <li className="relative z-10 block cursor-pointer text-xs uppercase">
        //                 <a className="px-3 py-1.5 block" href="#home">home</a>
        //             </li>
        //         </ul>
        //     </nav>
        // </header>
        <nav className = {(
            "fixed w-full p-2 px-5 z-40 backdrop-blur-sm " + // mx-[-130px] xl:mx-[-30px] xs:-mx-2
            (iscrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : " py-5 ")
        )}
        >
        <div className = "container flex items-center justify-between mx-auto">
            <div className="md:flex items-center justify-end space-x-8 text-sm font-medium">
                {navItems.map((item, key) => (
                    <a key = {key} href = {item.href} className=""> {item.name} </a>
                ))}
            </div>
        </div>
        </nav>
    );
};