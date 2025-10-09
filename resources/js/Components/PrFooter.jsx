import React, { useState } from "react";
import { Facebook, Instagram, Youtube, Linkedin, Send } from "lucide-react";

const ProjectContactFooter = () => {
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
        <>
            {/* Project Categories Section */}
            <section className="grid md:grid-cols-3">
                {/* Residential Projects */}
                <div className="relative h-96 md:h-[500px] group overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                        alt="Residential Projects"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#d4af37] mb-6">
                            Residential Projects
                        </h3>
                        <button className="bg-[#c41e3a] hover:bg-[#a01629] text-white px-6 py-3 font-bold text-sm tracking-wider transition-colors duration-200">
                            COMING SOON
                        </button>
                    </div>
                </div>

                {/* Commercial Projects */}
                <div className="relative h-96 md:h-[500px] group overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                        alt="Commercial Projects"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#d4af37] mb-6">
                            Commercial Projects
                        </h3>
                        <button className="bg-[#c41e3a] hover:bg-[#a01629] text-white px-6 py-3 font-bold text-sm tracking-wider transition-colors duration-200">
                            COMING SOON
                        </button>
                    </div>
                </div>

                {/* Plotted Development */}
                <div className="relative h-96 md:h-[500px] group overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80"
                        alt="Plotted Development"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#d4af37] mb-6">
                            Plotted Development
                        </h3>
                        <button className="bg-[#c41e3a] hover:bg-[#a01629] text-white px-6 py-3 font-bold text-sm tracking-wider transition-colors duration-200">
                            COMING SOON
                        </button>
                    </div>
                </div>
            </section>

            {/* Get in Touch Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#8b6f47] mb-8">
                                Get in touch
                            </h2>

                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="FULL NAME"
                                    value={formData.fullName}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            fullName: e.target.value,
                                        })
                                    }
                                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 focus:border-[#8b6f47] focus:outline-none text-sm"
                                />

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="relative">
                                        <input
                                            type="tel"
                                            placeholder="PHONE"
                                            value={formData.phone}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    phone: e.target.value,
                                                })
                                            }
                                            className="w-full px-4 py-3 pl-12 bg-gray-100 border border-gray-200 focus:border-[#8b6f47] focus:outline-none text-sm"
                                        />
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-1">
                                            <span className="text-orange-500 text-lg">
                                                🇮🇳
                                            </span>
                                            <span className="text-gray-400 text-sm">
                                                ▼
                                            </span>
                                        </div>
                                    </div>

                                    <input
                                        type="email"
                                        placeholder="EMAIL"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                email: e.target.value,
                                            })
                                        }
                                        className="w-full px-4 py-3 bg-gray-100 border border-gray-200 focus:border-[#8b6f47] focus:outline-none text-sm"
                                    />
                                </div>

                                <textarea
                                    placeholder="MESSAGE"
                                    rows="5"
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            message: e.target.value,
                                        })
                                    }
                                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 focus:border-[#8b6f47] focus:outline-none text-sm resize-none"
                                ></textarea>

                                <button
                                    onClick={handleSubmit}
                                    className="bg-[#d4af37] hover:bg-[#c49b2a] text-white px-8 py-3 font-bold text-sm tracking-wider transition-colors duration-200"
                                >
                                    SUBMIT
                                </button>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.6448975!2d80.9467!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUwJzQ4LjEiTiA4MMKwNTYnNDguMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Location Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#3d2920] text-white py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
                        {/* Logo and Address */}
                        <div className="lg:col-span-2">
                            <img
                                src="https://via.placeholder.com/200x120/d4af37/3d2920?text=LALA+LOGO"
                                alt="LALA Jugal Kishore Constructions"
                                className="mb-6 h-24 w-auto"
                            />

                            <div className="space-y-2 text-sm leading-relaxed">
                                <p className="font-semibold">
                                    A: LJK Construction India Pvt Ltd, 7th
                                    Floor,
                                </p>
                                <p className="ml-4">
                                    Eldeco Corporate Chambers - II, Vibhuti
                                    Khand,
                                </p>
                                <p className="ml-4">
                                    Gomti Nagar, Lucknow - 226010
                                </p>
                                <p className="mt-4 font-semibold">
                                    T: 0522-4001192, 0522-4001195
                                </p>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div>
                            <nav className="space-y-3">
                                <a
                                    href="#home"
                                    className="block hover:text-[#d4af37] transition-colors duration-200"
                                >
                                    Home
                                </a>
                                <a
                                    href="#about"
                                    className="block hover:text-[#d4af37] transition-colors duration-200"
                                >
                                    About Us
                                </a>
                                <a
                                    href="#projects"
                                    className="block hover:text-[#d4af37] transition-colors duration-200"
                                >
                                    Projects
                                </a>
                                <a
                                    href="#media"
                                    className="block hover:text-[#d4af37] transition-colors duration-200"
                                >
                                    Media
                                </a>
                                <a
                                    href="#blog"
                                    className="block hover:text-[#d4af37] transition-colors duration-200"
                                >
                                    Blog
                                </a>
                                <a
                                    href="#career"
                                    className="block hover:text-[#d4af37] transition-colors duration-200"
                                >
                                    Career
                                </a>
                                <a
                                    href="#contact"
                                    className="block hover:text-[#d4af37] transition-colors duration-200"
                                >
                                    Contact Us
                                </a>
                            </nav>
                        </div>

                        {/* Newsletter and Social */}
                        <div className="lg:col-span-2">
                            <h3 className="text-lg font-bold mb-4 tracking-wider">
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
                                    className="w-full px-4 py-3 bg-transparent border border-white/30 focus:border-[#d4af37] focus:outline-none text-sm text-white placeholder-white/60"
                                />
                                <button
                                    onClick={handleNewsletterSubmit}
                                    className="absolute right-0 top-0 h-full px-4 bg-[#d4af37] hover:bg-[#c49b2a] transition-colors duration-200"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>

                            <h3 className="text-lg font-bold mb-4 tracking-wider">
                                FOLLOW US ON
                            </h3>
                            <div className="flex gap-4">
                                <a
                                    href="#facebook"
                                    className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors duration-200"
                                >
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a
                                    href="#instagram"
                                    className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:opacity-90 flex items-center justify-center transition-opacity duration-200"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a
                                    href="#youtube"
                                    className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition-colors duration-200"
                                >
                                    <Youtube className="w-5 h-5" />
                                </a>
                                <a
                                    href="#linkedin"
                                    className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-800 flex items-center justify-center transition-colors duration-200"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                            <div className="flex mt-8 gap-6">
                                {/* RERA QR Code */}
                                <div className=" bg-white p-4 inline-block">
                                    <img
                                        src="https://via.placeholder.com/80x80/000000/FFFFFF?text=QR"
                                        alt="RERA QR Code"
                                        className="w-20 h-20"
                                    />
                                </div>
                                <div className="mt-2 text-xs">
                                    <p className="font-semibold">
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
        </>
    );
};

export default ProjectContactFooter;
