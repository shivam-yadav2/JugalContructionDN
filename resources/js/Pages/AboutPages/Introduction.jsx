import React , { useState } from "react";
import Navbar from "../../Components/Navbar";
import BannerComponent from "../../Components/BannerComponent";
import Footer from "../../Components/Footer";
import FourPillars from "@/Components/FourPillars";

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
                imageSrc={"/assets/images/About Us/Asset 1.png"}
                titleText={"Introduction"}
            />
            <section className="py-20 md:py-28 lg:py-36 bg-white">
                {/* 2. Centered container with max-width for content control */}
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-8 gap-x-16 xl:gap-x-24">
                        {/* Left Column: Impact Heading */}
                        <div className="lg:order-1 lg:col-span-3 mb-8 lg:mb-0">
                            <h1 className="text-5xl   font-serif newF text-[#202020] leading-tight">
                                Construction, like gem art, is a creative
                                process that promises to delight, inspire, and
                                transform.
                            </h1>
                        </div>

                        {/* Right Column: Body Text */}
                        <div className="lg:order-2 lg:col-span-5 space-y-6 text-[#202020] text-sm  r-m mt-16 leading-relaxed">
                            <p>
                                Lala Jugal Kishore Construction has secured
                                pronounced recognition and has become an
                                intrinsic part of the Awadhi culture since its
                                inception in 1857. Committed to delivering
                                incomparable value through exemplary jewellery
                                that masters all facets of luxury and
                                innovation. The foundation of our success lies
                                in the unwavering faith of people that motivates
                                us to serve even more. With increased focus and
                                dedication, we have diversified our brand
                                portfolio into the Real Estate sector.
                            </p>

                            <p>
                                LJK Construction is established with the goal of
                                developing residential townships and commercial
                                projects that offer state of art facilities, an
                                exclusive lifestyle, best in the class working
                                spaces and business operation establishments. In
                                line with our motto, we aspire to give value to
                                our customers, business partners and society as
                                a whole. LJK Construction is built on more than
                                simply concrete and steel; it is founded on the
                                virtues of trust, integrity, and inclusion that
                                the company has established over the course of
                                its 150+ year history.
                            </p>

                            <p>
                                The company’s unique advantage stems from its
                                thorough solution-oriented approach, which
                                includes high-quality construction, classic
                                designs, sustainable architecture, breathtaking
                                landscaping, and a plethora of lifestyle
                                amenities to provide affordable luxury and
                                improve the customer experience. LJK
                                Construction's roadmap for future development
                                envisions residential plots, group housings,
                                independent villas and commercial projects in
                                harmony with nature, reflecting the principles
                                of trust and exquisite craftsmanship synonymous
                                with the group's brand values.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="">
                <div className="relative">
                    <img src="/assets/images/About Us/Asset 2.png" className="lg:h-auto h-[35vh]" alt="" />
                    <div className="absolute w-full h-full top-0 left-0 ">
                        <div className="max-w-6xl mx-auto px-6 flex flex-col justify-center items-start gap-12 h-full">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-[500] newF bg-gradient-to-r from-[#9c7948] via-[#f7c073] to-[#fcc06c] bg-clip-text text-transparent ">
                                A Legacy of converting transactions into
                                relationships
                            </h1>
                            <p className="text-[#fff] text-sm  max-w-lg leading-relaxed">
                                Our timeless existence is enhanced by both
                                tradition and innovation. <br /> Enriching lives has
                                always been a cultural constant for us, and it
                                serves as a lens through which we see every
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

export default Introduction;
