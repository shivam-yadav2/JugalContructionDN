import BannerComponent from "@/Components/BannerComponent";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React, { useState } from "react";
import { Link } from "@inertiajs/react";


function ProjectBanner({ img }) {
    return (
        <div className="w-full   flex items-center justify-center p-4 md:p-8 lg:p-12">
            <div className="w-full max-w-6xl">
                {/* Image Container */}
                <div className="relative w-full  overflow-hidden mb-[-60px] md:mb-[-80px] lg:mb-[-100px]">
                    <img
                        src={img}
                        alt="Luxury Project Entrance"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Bottom Section with Brown Box and Button */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-7 gap-0">
                    {/* Brown Box - Left Side */}
                    <div className="bg-[#2D1C11] col-span-4 flex flex-col ml-[80px] justify-center items-center px-8 py-10 md:px-12 md:py-12 lg:px-16 lg:py-16">
                        {/* Project Name */}
                        <h1 className="text-3xl newF pb-1 md:text-4xl lg:text-5xl font-[500] bg-gradient-to-r from-[#9c7948] via-[#d1a260] to-[#fcc06c] bg-clip-text text-transparent mb-2">
                            Project Name
                        </h1>

                        {/* Location & Details Subtitle */}
                        <h2 className="text-[#ebd2a0] text-sm tracking-[0.2em] uppercase mb-6 font-[400]">
                            PROJECT LOCATION & DETAILS
                        </h2>

                        {/* Description Text */}
                        <p className="text-white text-center text-sm md:text-base lg:text-lg leading-relaxed mb-0 font-[300]">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                        </p>
                    </div>

                    {/* Right Side - Button Container */}
                    <div className="bg-transparent flex col-span-3 items-center justify-end py-8 md:py-12 lg:py-16">
                        <Link href={"/project-detail"}>
                            <button className="bg-[#ebd2a0] hover:bg-[#c49a54] r-m transition-colors duration-300 text-[#2D1C11] px-8 py-3 md:px-10 md:py-4 lg:px-12 lg:py-4 text-xs md:text-sm lg:text-base tracking-[0.15em] uppercase font-[500]">
                                VIEW MORE
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
function ProjectBannerRight({ img }) {
    return (
        <div className="w-full   flex items-center justify-center p-4 md:p-8 lg:p-12">
            <div className="w-full max-w-6xl">
                {/* Image Container */}
                <div className="relative w-full  overflow-hidden mb-[-60px] md:mb-[-80px] lg:mb-[-100px]">
                    <img
                        src={img}
                        alt="Luxury Project Entrance"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Bottom Section with Brown Box and Button */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-7 gap-0">
                    {/* Right Side - Button Container */}
                    <div className="bg-transparent flex col-span-3 lg:order-1 order-2 items-center justify-start py-8 md:py-12 lg:py-16">
                        <Link href={"/project-detail"}>
                            <button className="bg-[#ebd2a0] hover:bg-[#c49a54] r-m transition-colors duration-300 text-[#2D1C11] px-8 py-3 md:px-10 md:py-4 lg:px-12 lg:py-4 text-xs md:text-sm lg:text-base tracking-[0.15em] uppercase font-[500]">
                                VIEW MORE
                            </button>
                        </Link>
                    </div>
                    {/* Brown Box - Left Side */}
                    <div className="bg-[#2D1C11] lg:order-2 order-1 col-span-4 flex flex-col mr-[80px] justify-center items-center px-8 py-10 md:px-12 md:py-12 lg:px-16 lg:py-16">
                        {/* Project Name */}
                        <h1 className="text-3xl newF pb-1 md:text-4xl lg:text-5xl font-[500] bg-gradient-to-r from-[#9c7948] via-[#d1a260] to-[#fcc06c] bg-clip-text text-transparent mb-2">
                            Project Name
                        </h1>

                        {/* Location & Details Subtitle */}
                        <h2 className="text-[#ebd2a0] text-sm tracking-[0.2em] uppercase mb-6 font-[400]">
                            PROJECT LOCATION & DETAILS
                        </h2>

                        {/* Description Text */}
                        <p className="text-white text-center text-sm md:text-base lg:text-lg leading-relaxed mb-0 font-[300]">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Residential = () => {
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
            <Navbar />
            <BannerComponent
                imageSrc={"/assets/images/Project/Asset 11.png"}
                titleText={"Residential Development"}
            />
            <section className="py-16 md:py-20 lg:py-24 bg-[#f1eee7]">
                <ProjectBanner img={"/assets/images/Project/Asset 15.png"} />
                <ProjectBannerRight
                    img={"/assets/images/Project/Asset 14.png"}
                />
                <ProjectBanner img={"/assets/images/Project/Asset 13.png"} />
                <ProjectBannerRight
                    img={"/assets/images/Project/Asset 12.png"}
                />
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
            <Footer />
        </div>
    );
};

export default Residential;
