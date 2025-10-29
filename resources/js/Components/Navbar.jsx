import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePage } from "@inertiajs/react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("Home");
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
    const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
    const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);
    const [enquireOpen, setEnquireOpen] = useState(false);
    const [reraFormOpen, setReraFormOpen] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        message: "",
    });

    // Mobile dropdown states
    const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
    const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
    const [mobileMediaOpen, setMobileMediaOpen] = useState(false);

    const aboutDropdownRef = useRef(null);
    const projectsDropdownRef = useRef(null);
    const mediaDropdownRef = useRef(null);

    const { url } = usePage();

    const navItems = [
        { title: "Home", url: "/" },
        { title: "About Us", url: "/about", hasDropdown: true },
        { title: "Projects", url: "/projects", hasDropdown: true },
        // { title: "Media", url: "/media", hasDropdown: true },
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
        // { title: "PLOTTED DEVELOPMENT", href: "/projects/plotted-development" },
        { title: "RESIDENTIAL PROJECTS", href: "/projects/residential" },
        { title: "COMMERCIAL PROJECTS", href: "/projects/commercial" },
    ];

    const mediaSubItems = [
        { title: "PRESS COVERAGE", href: "/media/press-coverage" },
        { title: "NEWS & EVENTS", href: "/media/news-events" },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        console.log("Form submitted:", formData);
        // Handle form submission here (send to backend, etc.)
        setFormData({ fullName: "", phone: "", email: "", message: "" });
        setEnquireOpen(false);
    };

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

    useEffect(() => {
        if (url === "/home") {
            window.location.href = "/";
        }
    }, [url]);

    // Debug enquireOpen state
    useEffect(() => {
        console.log("enquireOpen state changed:", enquireOpen);
    }, [enquireOpen]);

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
            const checkItems = navItems.filter((item) => !item.hasDropdown);
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
                    <div className="flex items-center gap-x-3 md:gap-x-12">
                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
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
                                                onMouseLeave={
                                                    closeAboutDropdown
                                                }
                                            >
                                                {aboutUsSubItems.map(
                                                    (subItem) => (
                                                        <a
                                                            key={subItem.title}
                                                            href={subItem.href}
                                                            className={`block px-6 py-2 text-[#2D1C11] hover:bg-[#fff] transition-colors duration-200 font-medium text-sm ${
                                                                isSubItemActive(
                                                                    subItem.href
                                                                )
                                                                    ? "bg-white"
                                                                    : ""
                                                            }`}
                                                            onClick={
                                                                closeAboutDropdown
                                                            }
                                                        >
                                                            {subItem.title}
                                                        </a>
                                                    )
                                                )}
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
                                                onMouseLeave={
                                                    closeProjectsDropdown
                                                }
                                            >
                                                {projectsSubItems.map(
                                                    (subItem) => (
                                                        <a
                                                            key={subItem.title}
                                                            href={subItem.href}
                                                            className={`block px-6 py-2 text-[#2D1C11] hover:bg-[#fff] transition-colors duration-200 font-medium text-sm ${
                                                                isSubItemActive(
                                                                    subItem.href
                                                                )
                                                                    ? "bg-white"
                                                                    : ""
                                                            }`}
                                                            onClick={
                                                                closeProjectsDropdown
                                                            }
                                                        >
                                                            {subItem.title}
                                                        </a>
                                                    )
                                                )}
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
                                                onMouseLeave={
                                                    closeMediaDropdown
                                                }
                                            >
                                                {mediaSubItems.map(
                                                    (subItem) => (
                                                        <a
                                                            key={subItem.title}
                                                            href={subItem.href}
                                                            className={`block px-6 py-2 text-[#2D1C11] hover:bg-[#fff] transition-colors duration-200 font-medium text-sm ${
                                                                isSubItemActive(
                                                                    subItem.href
                                                                )
                                                                    ? "bg-white"
                                                                    : ""
                                                            }`}
                                                            onClick={
                                                                closeMediaDropdown
                                                            }
                                                        >
                                                            {subItem.title}
                                                        </a>
                                                    )
                                                )}
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
                        <button
                            onClick={() => {
                                console.log(
                                    "Enquire button clicked, opening modal..."
                                );
                                setEnquireOpen(true);
                            }}
                            className="hidden lg:block px-4 xl:px-6 py-2 bg-[#ebd2a0] text-[#202020] hover:bg-amber-200 transition-all duration-300 text-sm xl:text-base font-medium"
                        >
                            ENQUIRE NOW
                        </button>
                        <a
                            href="mailto:sales@lalajugalkishore.org"
                            className="hidden lg:block  transition-all duration-300 text-sm xl:text-base  font-medium"
                        >
                            <img
                                src="/assets/images/home/Asset 39.png"
                                alt="Enquire Now"
                                className="w-full h-10 object-contain"
                            />
                        </a>
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
                                        onClick={() =>
                                            setMobileAboutOpen(!mobileAboutOpen)
                                        }
                                        className={`w-full flex items-center justify-between text-left text-base font-medium text-white hover:text-amber-200 transition-colors duration-200 py-2 ${
                                            activeItem === item.title ||
                                            isAboutUsActive()
                                                ? "text-amber-200"
                                                : ""
                                        }`}
                                    >
                                        <span>{item.title}</span>
                                        <ChevronDown
                                            size={20}
                                            className={`transform transition-transform duration-300 ${
                                                mobileAboutOpen
                                                    ? "rotate-180"
                                                    : ""
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
                                                        isSubItemActive(
                                                            subItem.href
                                                        )
                                                            ? "text-amber-200 font-medium"
                                                            : "text-[#ebd2a0] hover:text-amber-200"
                                                    }`}
                                                    onClick={() =>
                                                        setMenuOpen(false)
                                                    }
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
                                        onClick={() =>
                                            setMobileProjectsOpen(
                                                !mobileProjectsOpen
                                            )
                                        }
                                        className={`w-full flex items-center justify-between text-left text-base font-medium text-white hover:text-amber-200 transition-colors duration-200 py-2 ${
                                            activeItem === item.title ||
                                            isProjectsActive()
                                                ? "text-amber-200"
                                                : ""
                                        }`}
                                    >
                                        <span>{item.title}</span>
                                        <ChevronDown
                                            size={20}
                                            className={`transform transition-transform duration-300 ${
                                                mobileProjectsOpen
                                                    ? "rotate-180"
                                                    : ""
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
                                                        isSubItemActive(
                                                            subItem.href
                                                        )
                                                            ? "text-amber-200 font-medium"
                                                            : "text-[#ebd2a0] hover:text-amber-200"
                                                    }`}
                                                    onClick={() =>
                                                        setMenuOpen(false)
                                                    }
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
                                        onClick={() =>
                                            setMobileMediaOpen(!mobileMediaOpen)
                                        }
                                        className={`w-full flex items-center justify-between text-left text-base font-medium text-white hover:text-amber-200 transition-colors duration-200 py-2 ${
                                            activeItem === item.title ||
                                            isMediaActive()
                                                ? "text-amber-200"
                                                : ""
                                        }`}
                                    >
                                        <span>{item.title}</span>
                                        <ChevronDown
                                            size={20}
                                            className={`transform transition-transform duration-300 ${
                                                mobileMediaOpen
                                                    ? "rotate-180"
                                                    : ""
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
                                                        isSubItemActive(
                                                            subItem.href
                                                        )
                                                            ? "text-amber-200 font-medium"
                                                            : "text-[#ebd2a0] hover:text-amber-200"
                                                    }`}
                                                    onClick={() =>
                                                        setMenuOpen(false)
                                                    }
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
                        onClick={() => {
                            setMenuOpen(false);
                            setEnquireOpen(true);
                        }}
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

            {/* Enquire Dialog */}
            <Dialog open={enquireOpen} onOpenChange={setEnquireOpen}>
                <DialogContent className="max-w-2xl bg-white border-none shadow-2xl z-[100]">
                    <DialogHeader>
                        <DialogTitle className="text-center">
                            <h2 className="text-3xl md:text-4xl newF pb-3 lg:text-5xl font-[500] bg-gradient-to-r from-[#9c7948] via-[#d1a260] to-[#fcc06c] bg-clip-text mb-4 text-transparent">
                                Register Your Interest
                            </h2>
                        </DialogTitle>
                    </DialogHeader>

                    <div className="space-y-4 px-4 pb-4">
                        <input
                            type="text"
                            name="fullName"
                            placeholder="FULL NAME"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-[#f1eee7] text-sm outline-none border-none focus:outline-none focus:ring-2 focus:ring-[#EBD2A0] transition-all"
                        />

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="relative">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="PHONE"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 pl-16 bg-[#f1eee7] text-sm outline-none border-none focus:outline-none focus:ring-2 focus:ring-[#EBD2A0] transition-all"
                                />
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-1">
                                    <span className="text-lg">🇮🇳</span>
                                    <span className="text-gray-400 text-sm">
                                        ▼
                                    </span>
                                </div>
                            </div>

                            <input
                                type="email"
                                name="email"
                                placeholder="EMAIL"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-[#f1eee7] text-sm outline-none border-none focus:outline-none focus:ring-2 focus:ring-[#EBD2A0] transition-all"
                            />
                        </div>

                        <textarea
                            name="message"
                            placeholder="MESSAGE"
                            rows="5"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-[#f1eee7] text-sm outline-none border-none focus:outline-none focus:ring-2 focus:ring-[#EBD2A0] transition-all resize-none"
                        ></textarea>

                        <div className="flex justify-center pt-4">
                            <button
                                onClick={handleSubmit}
                                className="bg-[#EBD2A0] text-black px-8 py-3 tracking-widest font-medium hover:bg-amber-200 transition-colors duration-200"
                            >
                                SUBMIT
                            </button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
            {/* ---------- WhatsApp Button ---------- */}
            <button className="fixed bottom-36 right-6  shadow-2xl transition-all duration-200 z-40 hover:scale-110">
                <img src="/assets/images/Homepage/Asset 38.png" alt="" />
            </button>
            <button className="fixed bottom-20 right-6 shadow-2xl transition-all duration-200 z-40 hover:scale-110">
                <img src="/assets/images/Homepage/Asset 37.png" alt="" />
            </button>

            {/* ---------- Chat Button ---------- */}
            <button className="fixed bottom-6 right-6  shadow-2xl transition-all duration-200 z-40 hover:scale-110">
                <img src="/assets/images/Homepage/Asset 36.png" alt="" />
            </button>

            {/* Fixed RERA Button on Right Side */}
            <button
                // onClick={() => setReraFormOpen(true)}
                className="fixed top-1/3 right-0 -translate-y-1/2 bg-[#EBD2A0]  text-[#2D1C11] p-2  text-sm shadow-2xl z-40 hover:bg-amber-200 transition-all  duration-300 hover:px-4 text-end"
            >
                CLICK <br /> HERE <br /> FOR <br /> RERA <br /> DETAILS
            </button>

            {/* Sliding RERA Form */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl transform transition-transform duration-500 z-[70] overflow-y-auto ${
                    reraFormOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <button
                    onClick={() => setReraFormOpen(false)}
                    className="absolute top-4 right-4 text-[#2D1C11] hover:text-[#9c7948] transition-colors"
                    aria-label="Close RERA form"
                >
                    <X size={28} />
                </button>

                <div className="px-6 py-16">
                    <h2 className="text-3xl md:text-4xl newF pb-3 lg:text-5xl font-[500] bg-gradient-to-r from-[#9c7948] via-[#d1a260] to-[#fcc06c] bg-clip-text mb-4 text-transparent text-center">
                        Register Your Interest
                    </h2>

                    <div className="space-y-4">
                        <input
                            type="text"
                            name="fullName"
                            placeholder="FULL NAME"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-[#f1eee7] text-sm outline-none border-none focus:outline-none focus:ring-2 focus:ring-[#EBD2A0] transition-all"
                        />

                        <div className="relative">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="PHONE"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 pl-16 bg-[#f1eee7] text-sm outline-none border-none focus:outline-none focus:ring-2 focus:ring-[#EBD2A0] transition-all"
                            />
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-1">
                                <span className="text-lg">🇮🇳</span>
                                <span className="text-gray-400 text-sm">▼</span>
                            </div>
                        </div>

                        <input
                            type="email"
                            name="email"
                            placeholder="EMAIL"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-[#f1eee7] text-sm outline-none border-none focus:outline-none focus:ring-2 focus:ring-[#EBD2A0] transition-all"
                        />

                        <textarea
                            name="message"
                            placeholder="MESSAGE"
                            rows="5"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-[#f1eee7] text-sm outline-none border-none focus:outline-none focus:ring-2 focus:ring-[#EBD2A0] transition-all resize-none"
                        ></textarea>

                        <div className="flex justify-center pt-4">
                            <button
                                onClick={handleSubmit}
                                className="bg-[#EBD2A0] text-black px-8 py-3 tracking-widest font-medium hover:bg-amber-200 transition-colors duration-200"
                            >
                                SUBMIT
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay for RERA Form */}
            {reraFormOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-[60]"
                    onClick={() => setReraFormOpen(false)}
                />
            )}
        </>
    );
};

export default Navbar;
