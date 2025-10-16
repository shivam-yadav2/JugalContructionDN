import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePage } from "@inertiajs/react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("Home");
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
    const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
    const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);
    
    // Mobile dropdown states
    const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
    const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
    const [mobileMediaOpen, setMobileMediaOpen] = useState(false);
    
    const aboutDropdownRef = useRef(null);
    const projectsDropdownRef = useRef(null);
    const mediaDropdownRef = useRef(null);

    const { url } = usePage();

    const toggleAboutDropdown = () => {
        setAboutDropdownOpen((prev) => !prev);
        setProjectsDropdownOpen(false);
        setMediaDropdownOpen(false);
    };

    const openAboutDropdown = () => {
        setAboutDropdownOpen(true);
        setProjectsDropdownOpen(false);
        setMediaDropdownOpen(false);
    };

    const closeAboutDropdown = () => {
        setAboutDropdownOpen(false);
    };

    const toggleProjectsDropdown = () => {
        setProjectsDropdownOpen((prev) => !prev);
        setAboutDropdownOpen(false);
        setMediaDropdownOpen(false);
    };

    const openProjectsDropdown = () => {
        setProjectsDropdownOpen(true);
        setAboutDropdownOpen(false);
        setMediaDropdownOpen(false);
    };

    const closeProjectsDropdown = () => {
        setProjectsDropdownOpen(false);
    };

    const toggleMediaDropdown = () => {
        setMediaDropdownOpen((prev) => !prev);
        setAboutDropdownOpen(false);
        setProjectsDropdownOpen(false);
    };

    const openMediaDropdown = () => {
        setMediaDropdownOpen(true);
        setAboutDropdownOpen(false);
        setProjectsDropdownOpen(false);
    };

    const closeMediaDropdown = () => {
        setMediaDropdownOpen(false);
    };

    const navItems = [
        { title: "Home", url: "/" },
        { title: "About Us", url: "/about", hasDropdown: true },
        { title: "Projects", url: "/projects", hasDropdown: true },
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

    const projectsSubItems = [
        { title: "PLOTTED DEVELOPMENT", href: "/projects/plotted-development" },
        { title: "RESIDENTIAL PROJECTS", href: "/projects/residential" },
        { title: "COMMERCIAL PROJECTS", href: "/projects/commercial" },
    ];

    const mediaSubItems = [
        { title: "PRESS COVERAGE", href: "/media/press-coverage" },
        { title: "NEWS & EVENTS", href: "/media/news-events" },
    ];

    const isAboutUsActive = () => {
        const currentPath = window.location.pathname;
        return aboutUsSubItems.some((item) => currentPath === item.href);
    };

    const isProjectsActive = () => {
        const currentPath = window.location.pathname;
        return projectsSubItems.some((item) => currentPath === item.href);
    };

    const isMediaActive = () => {
        const currentPath = window.location.pathname;
        return mediaSubItems.some((item) => currentPath === item.href);
    };

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

            if (isAboutUsActive()) {
                setActiveItem("About Us");
                return;
            }
            if (isProjectsActive()) {
                setActiveItem("Projects");
                return;
            }
            if (isMediaActive()) {
                setActiveItem("Media");
                return;
            }

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
                projectsDropdownRef.current &&
                !projectsDropdownRef.current.contains(event.target)
            ) {
                setProjectsDropdownOpen(false);
            }
            if (
                mediaDropdownRef.current &&
                !mediaDropdownRef.current.contains(event.target)
            ) {
                setMediaDropdownOpen(false);
            }
        };

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
                <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
                    {/* Logo */}
                    <a href="/">
                        <img
                            src="/assets/images/Homepage/Asset 34.png"
                            alt="LALA Jugal Kishore Constructions"
                            className="h-12 sm:h-16 lg:h-24 w-auto transition-all duration-300"
                        />
                    </a>
                    <div className="flex items-center gap-x-3 md:gap-x-6">
                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
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
                                            className={`text-[#ebd2a0] hover:text-amber-200 transition-colors duration-300 font-medium text-sm xl:text-md ${
                                                activeItem === item.title ||
                                                isAboutUsActive()
                                                    ? "underline text-amber-200"
                                                    : ""
                                            }`}
                                        >
                                            {item.title}
                                        </button>

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
                                ) : item.title === "Projects" ? (
                                    <div
                                        key={item.title}
                                        className="relative"
                                        ref={projectsDropdownRef}
                                    >
                                        <button
                                            onClick={toggleProjectsDropdown}
                                            onMouseEnter={openProjectsDropdown}
                                            className={`text-[#ebd2a0] hover:text-amber-200 transition-colors duration-300 font-medium text-sm xl:text-md ${
                                                activeItem === item.title ||
                                                isProjectsActive()
                                                    ? "underline text-amber-200"
                                                    : ""
                                            }`}
                                        >
                                            {item.title}
                                        </button>

                                        {projectsDropdownOpen && (
                                            <div
                                                className="absolute top-full left-0 mt-2 w-60 bg-[#ebd2a0] shadow-xl z-50"
                                                onMouseLeave={closeProjectsDropdown}
                                            >
                                                {projectsSubItems.map((subItem) => (
                                                    <a
                                                        key={subItem.title}
                                                        href={subItem.href}
                                                        className={`block px-6 py-2 text-[#2D1C11] hover:bg-[#fff] transition-colors duration-200 font-medium text-sm ${
                                                            isSubItemActive(subItem.href)
                                                                ? "bg-white"
                                                                : ""
                                                        }`}
                                                        onClick={closeProjectsDropdown}
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
                                            className={`text-[#ebd2a0] hover:text-amber-200 transition-colors duration-300 font-medium text-sm xl:text-md ${
                                                activeItem === item.title ||
                                                isMediaActive()
                                                    ? "underline text-amber-200"
                                                    : ""
                                            }`}
                                        >
                                            {item.title}
                                        </button>

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
                                        className={`text-[#ebd2a0] hover:text-amber-200 transition-colors duration-300 font-medium text-sm xl:text-md ${
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
                        <button className="hidden lg:block px-4 xl:px-6 py-2 bg-[#ebd2a0] text-[#202020] hover:bg-amber-200 transition-all duration-300 text-sm xl:text-base font-medium">
                            ENQUIRE NOW
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden text-white"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Drawer */}
            <div
                className={`lg:hidden fixed top-0 right-0 h-full w-4/5 sm:w-2/3 md:w-1/2 bg-[#2D1C11] shadow-2xl transform transition-transform duration-500 z-[60] overflow-y-auto ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Close Button */}
                <button
                    onClick={() => setMenuOpen(false)}
                    className="absolute top-4 right-4 text-white hover:text-amber-200 transition-colors"
                    aria-label="Close menu"
                >
                    <X size={28} />
                </button>

                <div className="flex flex-col items-start space-y-4 px-6 py-16">
                    {navItems.map((item) => (
                        <div key={item.title} className="w-full">
                            {item.title === "About Us" ? (
                                <>
                                    <button
                                        onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                                        className={`w-full flex items-center justify-between text-left text-base font-medium text-white hover:text-amber-200 transition-colors duration-200 py-2 ${
                                            activeItem === item.title || isAboutUsActive()
                                                ? "text-amber-200"
                                                : ""
                                        }`}
                                    >
                                        <span>{item.title}</span>
                                        <ChevronDown
                                            size={20}
                                            className={`transform transition-transform duration-300 ${
                                                mobileAboutOpen ? "rotate-180" : ""
                                            }`}
                                        />
                                    </button>
                                    {mobileAboutOpen && (
                                        <div className="ml-4 mt-2 space-y-2">
                                            {aboutUsSubItems.map((subItem) => (
                                                <a
                                                    key={subItem.title}
                                                    href={subItem.href}
                                                    className={`block text-sm py-2 transition-colors duration-200 ${
                                                        isSubItemActive(subItem.href)
                                                            ? "text-amber-200 font-medium"
                                                            : "text-[#ebd2a0] hover:text-amber-200"
                                                    }`}
                                                    onClick={() => setMenuOpen(false)}
                                                >
                                                    {subItem.title}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : item.title === "Projects" ? (
                                <>
                                    <button
                                        onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                                        className={`w-full flex items-center justify-between text-left text-base font-medium text-white hover:text-amber-200 transition-colors duration-200 py-2 ${
                                            activeItem === item.title || isProjectsActive()
                                                ? "text-amber-200"
                                                : ""
                                        }`}
                                    >
                                        <span>{item.title}</span>
                                        <ChevronDown
                                            size={20}
                                            className={`transform transition-transform duration-300 ${
                                                mobileProjectsOpen ? "rotate-180" : ""
                                            }`}
                                        />
                                    </button>
                                    {mobileProjectsOpen && (
                                        <div className="ml-4 mt-2 space-y-2">
                                            {projectsSubItems.map((subItem) => (
                                                <a
                                                    key={subItem.title}
                                                    href={subItem.href}
                                                    className={`block text-sm py-2 transition-colors duration-200 ${
                                                        isSubItemActive(subItem.href)
                                                            ? "text-amber-200 font-medium"
                                                            : "text-[#ebd2a0] hover:text-amber-200"
                                                    }`}
                                                    onClick={() => setMenuOpen(false)}
                                                >
                                                    {subItem.title}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : item.title === "Media" ? (
                                <>
                                    <button
                                        onClick={() => setMobileMediaOpen(!mobileMediaOpen)}
                                        className={`w-full flex items-center justify-between text-left text-base font-medium text-white hover:text-amber-200 transition-colors duration-200 py-2 ${
                                            activeItem === item.title || isMediaActive()
                                                ? "text-amber-200"
                                                : ""
                                        }`}
                                    >
                                        <span>{item.title}</span>
                                        <ChevronDown
                                            size={20}
                                            className={`transform transition-transform duration-300 ${
                                                mobileMediaOpen ? "rotate-180" : ""
                                            }`}
                                        />
                                    </button>
                                    {mobileMediaOpen && (
                                        <div className="ml-4 mt-2 space-y-2">
                                            {mediaSubItems.map((subItem) => (
                                                <a
                                                    key={subItem.title}
                                                    href={subItem.href}
                                                    className={`block text-sm py-2 transition-colors duration-200 ${
                                                        isSubItemActive(subItem.href)
                                                            ? "text-amber-200 font-medium"
                                                            : "text-[#ebd2a0] hover:text-amber-200"
                                                    }`}
                                                    onClick={() => setMenuOpen(false)}
                                                >
                                                    {subItem.title}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <a
                                    href={item.url}
                                    className={`block text-base font-medium text-white hover:text-amber-200 transition-colors duration-200 py-2 ${
                                        activeItem === item.title
                                            ? "text-amber-200"
                                            : ""
                                    }`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.title}
                                </a>
                            )}
                        </div>
                    ))}
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="w-full px-6 py-3 bg-[#ebd2a0] text-[#202020] hover:bg-amber-200 font-medium text-sm transition-all duration-200 mt-6"
                    >
                        ENQUIRE NOW
                    </button>
                </div>
            </div>

            {/* Overlay */}
            {menuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/60 z-40"
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </>
    );
};

export default Navbar;