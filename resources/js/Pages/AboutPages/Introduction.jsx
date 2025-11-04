import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import BannerComponent from "../../Components/BannerComponent";
import Footer from "../../Components/Footer";
import FourPillars from "@/Components/FourPillars";
import { router } from "@inertiajs/react";

const Introduction = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        message: "",
    });

    const [newsletter, setNewsletter] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post('/enquiry', {
            name: formData.fullName,
            phone: formData.phone,
            email: formData.email,
            message: formData.message,
        }, {
            onSuccess: () => {
                setFormData({ fullName: "", phone: "", email: "", message: "" });
                alert('Thank you for your enquiry. We will get back to you soon!');
            },
            onError: (errors) => {
                console.error('Form submission errors:', errors);
            },
        });
    };

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        console.log("Newsletter email:", newsletter);
    };
    return (
        <div>
            <Navbar />
            <BannerComponent
                imageSrc={"/assets/images/About Us/Asset 17.png"}
                titleText={"Introduction"}
            />
            <section className="py-20 md:py-28 lg:py-36 bg-white">
                {/* 2. Centered container with max-width for content control */}
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-8 gap-x-16 xl:gap-x-24">
                        {/* Left Column: Impact Heading */}
                        <div className="lg:order-1 lg:col-span-3 mb-8 lg:mb-0">
                            <img
                                src="/assets/images/About Us/Asset 16.png"
                                alt=""
                            />
                        </div>

                        {/* Right Column: Body Text */}
                        <div className="lg:order-2 lg:col-span-5 space-y-6 text-[#202020] text-sm  r-m  leading-relaxed">
                            <h1 className="text-3xl lg:text-5xl   font-serif newF text-[#202020] ">
                                We build trust that stands tall through
                                generations
                            </h1>
                            <p>
                            From a legacy that dates back to 1857, LJK Construction India Pvt. Ltd., part of the esteemed Lala Jugal Kishore Group, has evolved into a distinguished real estate developer that seamlessly blends heritage with modernity. With deep roots in jewelry and craftsmanship, our true essence lies in creating lasting value — not just through exceptional buildings, but through trusted relationships, superior experiences, and timeless design.

                            </p>

                            <p>
                            At LJK, we specialize in crafting residential townships, independent villas, plotted developments, and commercial spaces that elevate everyday living. Every project reflects our unwavering commitment to thoughtful planning, world-class amenities, and sustainable architecture. We take pride in designing sun-facing layouts, nurturing green environments, and ensuring seamless infrastructure that enhances the way people live, work, and connect.
                            </p>

                            <p>
                            With a legacy built on trust and innovation, LJK continues to shape spaces that inspire communities and stand the test of time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="">
                <div className="relative">
                    <img
                        src="/assets/images/About Us/Asset 2.png"
                        className="lg:h-auto h-[35vh]"
                        alt=""
                    />
                    <div className="absolute w-full h-full top-0 left-0 ">
                        <div className="max-w-6xl mx-auto px-6 flex flex-col justify-center items-start gap-12 h-full">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-[500] newF bg-gradient-to-r from-[#9c7948] via-[#f7c073] to-[#fcc06c] bg-clip-text text-transparent ">
                                A Legacy of converting transactions into
                                relationships
                            </h1>
                            <p className="text-[#fff] text-sm  max-w-lg leading-relaxed">
                                Our timeless existence is enhanced by both
                                tradition and innovation. <br /> Enriching lives
                                has always been a cultural constant for us, and
                                it serves as a lens through which we see every
                                detail of our work. We're committed to making
                                your investments a rewarding experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <FourPillars />
            {/* Get in Touch Section */}
            <section className="bg-white  py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-4xl md:text-5xl newF lg:text-6xl font-serif text-[#8b6f47] mb-8">
                                Get in touch
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-4">
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
                                    required
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
                                            required
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
                                        required
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
                                    type="submit"
                                    className="bg-[#EBD2A0]  text-black r-m  px-8 py-3  tracking-widest transition-colors duration-200"
                                >
                                    SUBMIT
                                </button>
                            </form>
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

export default Introduction;
