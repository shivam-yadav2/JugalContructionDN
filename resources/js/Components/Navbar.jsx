import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { usePage } from "@inertiajs/react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("Home");
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
    const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);
    const aboutDropdownRef = useRef(null);
    const mediaDropdownRef = useRef(null);

    const { url } = usePage();

    const toggleAboutDropdown = () => {
        setAboutDropdownOpen((prev) => !prev);
        setMediaDropdownOpen(false);
    };

    const openAboutDropdown = () => {
        setAboutDropdownOpen(true);
        setMediaDropdownOpen(false);
    };

    const closeAboutDropdown = () => {
        setAboutDropdownOpen(false);
    };

    const toggleMediaDropdown = () => {
        setMediaDropdownOpen((prev) => !prev);
        setAboutDropdownOpen(false);
    };

    const openMediaDropdown = () => {
        setMediaDropdownOpen(true);
        setAboutDropdownOpen(false);
    };

    const closeMediaDropdown = () => {
        setMediaDropdownOpen(false);
    };

    const navItems = [
        { title: "Home", url: "/" },
        { title: "About Us", url: "/about", hasDropdown: true },
        { title: "Projects", url: "/projects" },
        { title: "Media", url: "/media", hasDropdown: true },
        { title: "Blog", url: "/blog" },
        { title: "Career", url: "/career" },
        { title: "Contact Us", url: "/contact-us" },
    ];

    const aboutUsSubItems = [
        { title: "INTRODUCTION", href: "/about/introduction" },
        { title: "VISION & MISSION", href: "/about/vision-mission" },
        { title: "OUR TEAM", href: "/about/our-team" },
    ];

    const mediaSubItems = [
        { title: "PRESS COVERAGE", href: "/media/press-coverage" },
        { title: "NEWS & EVENTS", href: "/media/news-events" },
    ];

    // Check if current path matches any About Us submenu
    const isAboutUsActive = () => {
        const currentPath = window.location.pathname;
        return aboutUsSubItems.some((item) => currentPath === item.href);
    };

    // Check if current path matches any Media submenu
    const isMediaActive = () => {
        const currentPath = window.location.pathname;
        return mediaSubItems.some((item) => currentPath === item.href);
    };

    // Check if a specific submenu item is active
    const isSubItemActive = (href) => {
        return window.location.pathname === href;
    };

    useEffect(() => {
        if (url === "/home") {
            window.location.href = "/";
        }
    }, [url]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScrolled(scrollTop > 50);

            // Check if we're on a dropdown page first
            if (isAboutUsActive()) {
                setActiveItem("About Us");
                return;
            }
            if (isMediaActive()) {
                setActiveItem("Media");
                return;
            }

            // Determine active section based on scroll
            let current = "Home";
            const checkItems = navItems.filter(
                (item) => !item.hasDropdown
            );
            checkItems.forEach((item) => {
                const sectionId = item.title.toLowerCase().replace(/\s+/g, "-");
                const section = document.getElementById(sectionId);
                if (section) {
                    const sectionTop = section.offsetTop - 100;
                    const sectionHeight = section.clientHeight;
                    if (
                        scrollTop >= sectionTop &&
                        scrollTop < sectionTop + sectionHeight
                    ) {
                        current = item.title;
                    }
                }
            });
            setActiveItem(current);
        };

        const handleClickOutside = (event) => {
            if (
                aboutDropdownRef.current &&
                !aboutDropdownRef.current.contains(event.target)
            ) {
                setAboutDropdownOpen(false);
            }
            if (
                mediaDropdownRef.current &&
                !mediaDropdownRef.current.contains(event.target)
            ) {
                setMediaDropdownOpen(false);
            }
        };

        // Initial check on mount
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
                    scrolled
                        ? "bg-[#2D1C11] backdrop-blur-md shadow-lg"
                        : "bg-gradient-to-b from-black/50 to-transparent"
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <img
                        src="/assets/images/Homepage/Asset 34.png"
                        alt="LALA Jugal Kishore Constructions"
                        className="lg:h-24 h-16 w-auto transition-all duration-300"
                    />
                    <div className="flex items-center gap-x-6 space-x-6">
                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center space-x-10">
                            {navItems.map((item) =>
                                item.title === "About Us" ? (
                                    <div
                                        key={item.title}
                                        className="relative"
                                        ref={aboutDropdownRef}
                                    >
                                        <button
                                            onClick={toggleAboutDropdown}
                                            onMouseEnter={openAboutDropdown}
                                            className={`text-[#ebd2a0] hover:text-amber-200 transition-colors duration-300 font-medium text-md ${
                                                activeItem === item.title ||
                                                isAboutUsActive()
                                                    ? "underline text-amber-200"
                                                    : ""
                                            }`}
                                        >
                                            {item.title}
                                        </button>

                                        {/* Dropdown Menu */}
                                        {aboutDropdownOpen && (
                                            <div
                                                className="absolute top-full left-0 mt-2 w-56 bg-[#ebd2a0] shadow-xl z-50"
                                                onMouseLeave={closeAboutDropdown}
                                            >
                                                {aboutUsSubItems.map((subItem) => (
                                                    <a
                                                        key={subItem.title}
                                                        href={subItem.href}
                                                        className={`block px-6 py-2 text-[#2D1C11] hover:bg-[#fff] transition-colors duration-200 font-medium text-sm ${
                                                            isSubItemActive(subItem.href)
                                                                ? "bg-white"
                                                                : ""
                                                        }`}
                                                        onClick={closeAboutDropdown}
                                                    >
                                                        {subItem.title}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : item.title === "Media" ? (
                                    <div
                                        key={item.title}
                                        className="relative"
                                        ref={mediaDropdownRef}
                                    >
                                        <button
                                            onClick={toggleMediaDropdown}
                                            onMouseEnter={openMediaDropdown}
                                            className={`text-[#ebd2a0] hover:text-amber-200 transition-colors duration-300 font-medium text-md ${
                                                activeItem === item.title ||
                                                isMediaActive()
                                                    ? "underline text-amber-200"
                                                    : ""
                                            }`}
                                        >
                                            {item.title}
                                        </button>

                                        {/* Dropdown Menu */}
                                        {mediaDropdownOpen && (
                                            <div
                                                className="absolute top-full left-0 mt-2 w-56 bg-[#ebd2a0] shadow-xl z-50"
                                                onMouseLeave={closeMediaDropdown}
                                            >
                                                {mediaSubItems.map((subItem) => (
                                                    <a
                                                        key={subItem.title}
                                                        href={subItem.href}
                                                        className={`block px-6 py-2 text-[#2D1C11] hover:bg-[#fff] transition-colors duration-200 font-medium text-sm ${
                                                            isSubItemActive(subItem.href)
                                                                ? "bg-white"
                                                                : ""
                                                        }`}
                                                        onClick={closeMediaDropdown}
                                                    >
                                                        {subItem.title}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <a
                                        key={item.title}
                                        href={item.url}
                                        className={`text-[#ebd2a0] hover:text-amber-200 transition-colors duration-300 font-medium text-md ${
                                            activeItem === item.title
                                                ? "underline text-amber-200"
                                                : ""
                                        }`}
                                    >
                                        {item.title}
                                    </a>
                                )
                            )}
                        </div>

                        {/* Enquire Button */}
                        <button className="hidden lg:block px-6 py-2 bg-[#ebd2a0] text-[#202020] hover:bg-amber-200 transition-all duration-300">
                            ENQUIRE NOW
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden text-white"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Drawer */}
            <div
                className={`lg:hidden fixed top-0 right-0 h-full w-2/3 sm:w-1/2 bg-amber-950 shadow-2xl transform transition-transform duration-500 z-[60] ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Close Button */}
                <button
                    onClick={() => setMenuOpen(false)}
                    className="absolute top-6 right-6 text-white hover:text-amber-200 transition-colors"
                    aria-label="Close menu"
                >
                    <X size={32} />
                </button>

                <div className="flex flex-col items-start space-y-8 px-8 py-20">
                    {navItems.map((item) => (
                        <a
                            key={item.title}
                            href={item.url}
                            className={`text-lg font-medium text-white hover:text-amber-200 transition-colors duration-200 ${
                                activeItem === item.title ||
                                (item.title === "About Us" && isAboutUsActive()) ||
                                (item.title === "Media" && isMediaActive())
                                    ? "underline text-amber-200"
                                    : ""
                            }`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.title}
                        </a>
                    ))}
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="px-6 py-2 rounded bg-amber-100 text-amber-900 hover:bg-amber-200 font-semibold text-sm transition-all duration-200 mt-4"
                    >
                        ENQUIRE NOW
                    </button>
                </div>
            </div>

            {/* Overlay */}
            {menuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-40"
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </>
    );
};

export default Navbar;