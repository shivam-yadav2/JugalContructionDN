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
            <section className="grid md:grid-cols-3 space-0 m-0 p-0 overflow-hidden  g-0">
                {/* Residential Projects */}
                <div className="relative h-96 md:h-[650px] group -m-1 p-0  overflow-hidden border-0 border-transparent">
                    <img
                        src="/assets/images/home/Asset 21.png"
                        alt="Residential Projects"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 flex flex-col items-center mb-6 justify-end py-5 text-center px-6">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif newF bg-gradient-to-r from-[#a88451] via-[#b38e5a] to-[#eebe7a] bg-clip-text text-transparent mb-6">
                            Residential Projects
                        </h3>
                        <button className="bg-[#c41e3a] hover:bg-[#a01629] text-white px-6 py-1  font-semibold text-sm tracking-wider transition-colors duration-200">
                            COMING SOON
                        </button>
                    </div>
                </div>

                {/* Commercial Projects */}
                <div className="relative h-96 md:h-[650px] group -m-1 p-0  overflow-hidden border-0 border-transparent">
                    <img
                        src="/assets/images/Homepage/Asset 19.png"
                        alt="Commercial Projects"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 flex flex-col items-center mb-6 justify-end py-5 text-center px-6">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif newF bg-gradient-to-r from-[#a88451] via-[#b38e5a] to-[#eebe7a] bg-clip-text text-transparent mb-6">
                            Commercial Projects
                        </h3>
                        <button className="bg-[#c41e3a] hover:bg-[#a01629] text-white px-6 py-1 font-bold text-sm tracking-wider transition-colors duration-200">
                            COMING SOON
                        </button>
                    </div>
                </div>

                {/* Plotted Development */}
                <div className="relative h-96 md:h-[650px] group -m-1 p-0  overflow-hidden border-0 border-transparent">
                    <img
                        src="/assets/images/home/Asset 20.png"
                        alt="Plotted Development"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 flex flex-col items-center mb-6 justify-end py-5 text-center px-6">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif newF bg-gradient-to-r from-[#a88451] via-[#b38e5a] to-[#eebe7a] bg-clip-text text-transparent mb-6">
                            Plotted Development
                        </h3>
                        <button className="bg-[#c41e3a] hover:bg-[#a01629] text-white px-6 py-1 font-bold text-sm tracking-wider transition-colors duration-200">
                            COMING SOON
                        </button>
                    </div>
                </div>
            </section>

            {/* Get in Touch Section */}
            <section className="bg-white  py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-4xl md:text-5xl newF lg:text-6xl font-serif text-[#8b6f47] mb-8">
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
                                    className="w-full px-4 py-3 bg-[#f1eee7]  text-sm outline-none border-none focus:outline-none focus:border-none focus:ring-0"
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
                                            className="w-full px-4 py-3 pl-16  bg-[#f1eee7]  text-sm outline-none border-none focus:outline-none focus:border-none focus:ring-0"
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
                                        className="w-full px-4 py-3 bg-[#f1eee7]  text-sm outline-none border-none focus:outline-none focus:border-none focus:ring-0"
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
                                    className="w-full px-4 py-3 bg-[#f1eee7]  text-sm outline-none border-none focus:outline-none focus:border-none focus:ring-0"
                                ></textarea>

                                <button
                                    onClick={handleSubmit}
                                    className="bg-[#EBD2A0]  text-black r-m  px-8 py-3  tracking-widest transition-colors duration-200"
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

           
        </>
    );
};

export default ProjectContactFooter;
