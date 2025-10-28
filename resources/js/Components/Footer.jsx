import React, { useState } from "react";
import { Facebook, Instagram, Youtube, Linkedin, Send } from "lucide-react";

const Footer = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        message: "",
    });

    const [newsletter, setNewsletter] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        console.log("Newsletter email:", newsletter);
    };
    return (
        <div>
            {/* Footer */}
            <footer className="bg-[#2D1C11] text-white  py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
                        {/* Logo and Address */}
                        <div className="lg:col-span-2">
                            <img
                                src="/assets/images/Homepage/Asset 34.png"
                                alt="LALA Jugal Kishore Constructions"
                                className="mb-12 h-36"
                            />

                            <div className="space-y-2  leading-relaxed">
                                <div>
                                    <p className="roboto ">
                                        <span className="text-[#d8a864]">
                                            {" "}
                                            A:
                                        </span>{" "}
                                        LJK Construction India Pvt Ltd, 7th
                                        Floor,
                                    </p>
                                    <p className="ml-4">
                                        Eldeco Corporate Chambers - II, Vibhuti
                                        Khand,
                                    </p>
                                    <p className="ml-4">
                                        Gomti Nagar, Lucknow - 226010
                                    </p>
                                </div>
                                <p className="mt-4 ">
                                    <span className="text-[#d8a864]">T:</span>{" "}
                                    0522-4001195
                                </p>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div>
                            <nav className="space-y-4">
                                <a
                                    href="#home"
                                    className="block text-[#EBD2A0]"
                                >
                                    Home
                                </a>
                                <a
                                    href="#about"
                                    className="block text-[#EBD2A0]"
                                >
                                    About Us
                                </a>
                                <a
                                    href="#projects"
                                    className="block text-[#EBD2A0]"
                                >
                                    Projects
                                </a>
                                <a
                                    href="#media"
                                    className="block text-[#EBD2A0]"
                                >
                                    Media
                                </a>
                                <a
                                    href="#blog"
                                    className="block text-[#EBD2A0]"
                                >
                                    Blog
                                </a>
                                <a
                                    href="#career"
                                    className="block text-[#EBD2A0]"
                                >
                                    Career
                                </a>
                                <a
                                    href="#contact"
                                    className="block text-[#EBD2A0]"
                                >
                                    Contact Us
                                </a>
                            </nav>
                        </div>

                        {/* Newsletter and Social */}
                        <div className="lg:col-span-2">
                            <h3 className="text-lg text-[#EBD2A0] font-bold mb-4 tracking-wider">
                                NEWSLETTER
                            </h3>

                            <div className="relative mb-6">
                                <input
                                    type="email"
                                    placeholder="Enter Your Email"
                                    value={newsletter}
                                    onChange={(e) =>
                                        setNewsletter(e.target.value)
                                    }
                                    className="w-full px-4 py-3 bg-transparent border border-[#EBD2A0] focus:border-[#EBD2A0] focus:outline-none text-sm text-white placeholder-white/60"
                                />
                                <button
                                    onClick={handleNewsletterSubmit}
                                    className="absolute right-0 top-0 h-full text-black px-4 bg-[#EBD2A0] hover:bg-[#EBD2A0] transition-colors duration-200"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>

                            <h3 className="text-lg text-[#EBD2A0] font-bold mb-4 tracking-wider">
                                FOLLOW US ON
                            </h3>
                            <div className="flex gap-4">
                                <a href="#facebook" className="">
                                    <img
                                        src="/assets/images/home/Asset 27.png"
                                        alt=""
                                    />
                                </a>
                                <a
                                    href="#instagram"
                                    className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:opacity-90 flex items-center justify-center transition-opacity duration-200"
                                >
                                    <img
                                        src="/assets/images/home/Asset 25.png"
                                        alt=""
                                    />
                                </a>
                                <a href="#youtube" className="">
                                    <img
                                        src="/assets/images/home/Asset 28.png"
                                        alt=""
                                    />
                                </a>
                                <a href="#linkedin" className="">
                                    <img
                                        src="/assets/images/home/Layer 2.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="flex mt-8 gap-6">
                                {/* RERA QR Code */}
                                <div className=" bg-white  inline-block">
                                    <img
                                        src="/assets/images/home/Asset 29.png"
                                        alt="RERA QR Code"
                                        className=""
                                    />
                                </div>
                                <div className="mt-2 text-xs">
                                    <p className="">
                                        PROMOTER RERA NO.: UPRERAPRM00000
                                    </p>
                                    <p>PROJECT RERA NO.: UPRERAPRJ00000</p>
                                    <p>
                                        LAUNCH DATE: 00-00-2025 | WEBSITE:
                                        www.up-rera.in
                                    </p>
                                    <p>Bank: | A/c No:</p>
                                    <p>Branch:</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
