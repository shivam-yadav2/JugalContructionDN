import BannerComponent from "@/Components/BannerComponent";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import GallerySection from "./GallerySection";

const ProjectDetail = () => {
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
    const amenities = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
            title: "GYMNASIUM",
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=800&q=80",
            title: "SWIMMING POOL",
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
            title: "JOGGING TRACK",
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
            title: "YOGA AREA",
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
            title: "CLUBHOUSE",
        },
        {
            id: 6,
            image: "/assets/images/Project/Asset 20.png",
            title: "CCTV SECURED GATED COMMUNITY",
        },
        {
            id: 7,
            image: "/assets/images/Project/Asset 21.png",
            title: "WIDE ROADS 9 AND 10 METERS",
        },
        {
            id: 8,
            image: "/assets/images/Project/Asset 19.png",
            title: "SHOPPING CENTRE",
        },
        {
            id: 9,
            image: "/assets/images/Project/Asset 17.png",
            title: "SCHOOL AND COLLEGE",
        },
        {
            id: 10,
            image: "/assets/images/Project/Asset 18.png",
            title: "SEVER, STP PLANT",
        },
        {
            id: 10,
            image: "/assets/images/Project/Asset 16.png",
            title: "UNDERGROUND ELECTRICITY SUPPLY",
        },
    ];

    const plotTypes = [
        {
            id: 1,
            type: "PLOT TYPE A",
            area: "1000 Sq. Ft.",
            dimension: "15x40",
        },
        {
            id: 2,
            type: "PLOT TYPE B",
            area: "1000 Sq. Ft.",
            dimension: "15x40",
        },
        {
            id: 3,
            type: "PLOT TYPE C",
            area: "1000 Sq. Ft.",
            dimension: "15x40",
        },
        {
            id: 4,
            type: "PLOT TYPE D",
            area: "1000 Sq. Ft.",
            dimension: "15x40",
        },
    ];

    const galleryImages = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
            alt: "Living Room",
            span: "row-span-2",
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80",
            alt: "Kitchen",
            span: "",
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
            alt: "Bathroom",
            span: "",
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
            alt: "Bedroom",
            span: "row-span-2",
        },
        {
            id: 5,
            src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
            alt: "Bedroom 2",
            span: "",
        },
        {
            id: 6,
            src: "https://images.unsplash.com/photo-1556911261-6bd341186b2f?w=800&q=80",
            alt: "Kitchen 2",
            span: "",
        },
        {
            id: 7,
            src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
            alt: "Bathroom 2",
            span: "",
        },
    ];

    return (
        <div>
            <Navbar />
            <div className={`relative  w-full overflow-hidden`}>
                <img
                    src="/assets/images/Project/Asset 1.png"
                    alt="Crafting Dream Homes"
                    className="w-full h-[40vh] lg:h-full object-cover"
                />
                <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-amber-950/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-amber-950/80 to-transparent" />

                <div className="absolute inset-0  flex items-center flex-col justify-center pb-24">
                    <div className=" w-full h-full flex items-center  justify-center  ">
                        <img
                            src="/assets/images/home/Asset 7.png"
                            alt="Logo Accent"
                            className="mt-24 lg:h-auto h-28 object-cover"
                        />
                    </div>
                    <div className="text-center w-full h-full flex items-center flex-col justify-end text-white px-4 max-w-5xl"></div>
                </div>
            </div>

            <section className="py-16 md:py-20 lg:py-24 lg:px-0 px-5">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Side - Heading */}
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-[400] mb-4">
                            <span className="bg-gradient-to-r newF from-[#9c7948] via-[#d1a260] to-[#fcc06c] bg-clip-text text-transparent">
                                Live a life that is
                            </span>
                        </h2>
                        <h2 className="text-6xl md:text-7xl text-[#d48153] lg:text-8xl !font-[400] newF tracking-wider">
                            <span className="">'VAST'</span>
                        </h2>
                    </div>

                    {/* Right Side - Description */}
                    <div className="space-y-6">
                        <p className="text-gray-800 r-m text-sm md:text-base  leading-relaxed font-[400]">
                            A vast living space is a reflection of one's own
                            unique personality and style, a place to express
                            oneself and to create a space that truly feels like
                            home.
                        </p>
                        <p className="text-gray-800 r-m text-sm md:text-base  leading-relaxed font-[400]">
                            Imagine waking up in a luxurious living space that
                            stretches as far as the eye can see. Where light
                            floods in through grand windows, illuminating every
                            inch of the 'vasto' expanse before you. This is not
                            just a home, it's a grand haven, a space that
                            inspires and uplifts, a space that invites you to
                            dream big and live even bigger.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full relative bg-[#1a3d3d] py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-20">
                <div className="max-w-6xl ">
                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl newF lg:text-5xl font-[400] text-center mb-12 md:mb-16 lg:mb-20">
                        <span className="bg-gradient-to-r from-[#9c7948] via-[#d1a260] to-[#fcc06c] bg-clip-text text-transparent">
                            Amenities that Redefine your Lifestyle
                        </span>
                    </h2>
                </div>
                <div className="relative">
                    <div className="max-w-6xl mx-auto">
                        {/* Swiper Slider */}
                        <div className="relative amenities-slider">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                navigation={{
                                    prevEl: ".swiper-button-prev-custom",
                                    nextEl: ".swiper-button-next-custom",
                                }}
                                pagination={{
                                    clickable: true,
                                    bulletClass:
                                        "swiper-pagination-bullet-custom",
                                    bulletActiveClass:
                                        "swiper-pagination-bullet-active-custom",
                                }}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                }}
                                className="pb-16"
                            >
                                {amenities.map((amenity) => (
                                    <SwiperSlide key={amenity.id}>
                                        <div className="group cursor-pointer">
                                            <div className="relative overflow-hidden aspect-[4/3] mb-6">
                                                <img
                                                    src={amenity.image}
                                                    alt={amenity.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                            </div>
                                            <h3 className="text-[#ebd2a0] text-center text-sm md:text-base lg:text-lg tracking-[0.15em] uppercase font-[400]">
                                                {amenity.title}
                                            </h3>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    {/* Custom Navigation Buttons */}
                    <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center text-white hover:text-[#d1a260] transition-colors duration-300">
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                    <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center text-white hover:text-[#d1a260] transition-colors duration-300">
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>

                <style jsx>{`
                    .swiper-pagination-bullet-custom {
                        width: 10px;
                        height: 10px;
                        background: #6b5d52;
                        opacity: 1;
                        margin: 0 6px !important;
                        border-radius: 50%;
                        transition: all 0.3s ease;
                    }
                    .swiper-pagination-bullet-active-custom {
                        background: #d1a260;
                        width: 12px;
                        height: 12px;
                    }
                `}</style>
            </section>
            <GallerySection />
            <section className="pt-16 md:pt-20 lg:pt-24 ">
                <div className="max-w-6xl mx-auto flex justify-center">
                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl newF lg:text-5xl font-[400] text-center mb-12 md:mb-16 lg:mb-20">
                        <span className="bg-gradient-to-r from-[#9c7948] via-[#d1a260] to-[#fcc06c] bg-clip-text text-transparent">
                            Site Plan
                        </span>
                    </h2>
                </div>

                <img src="/assets/images/Project/Asset 9.png" className="lg:h-auto h-[30vh] object-cover" alt="" />
            </section>

            <div className="w-full">
                {/* Plot Types Section */}
                <section className="w-full  py-16 md:py-20 lg:py-24 ">
                    <div className="max-w-6xl mx-auto">
                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-[400] text-center mb-12 md:mb-16">
                            <span className="bg-gradient-to-r newF from-[#9c7948] via-[#d1a260] to-[#fcc06c] bg-clip-text text-transparent">
                                Plot Types
                            </span>
                        </h2>

                        {/* Plot Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:px-0 px-5">
                            {plotTypes.map((plot) => (
                                <div
                                    key={plot.id}
                                    className="bg-[#2D1C11] text-white p-8 md:p-8 lg:p-10 text-center hover:bg-[#3a2618] transition-colors duration-300 cursor-pointer"
                                >
                                    <h3 className="text-xl md:text-2xl lg:text-3xl text-[#ebd2a0] font-[500] mb-4 tracking-wide">
                                        {plot.type}
                                    </h3>
                                    <p className="text-sm md:text-base lg:text-lg font-[300]">
                                        Plot Area : {plot.area} | Dimension :{" "}
                                        {plot.dimension}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Project Location Section */}
                <section className="w-full bg-[#e8e4df] py-16 md:py-20 lg:py-24 ">
                    <div className=" mx-auto">
                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-[400] text-center mb-12 md:mb-16">
                            <span className="bg-gradient-to-r newF from-[#9c7948] via-[#d1a260] to-[#fcc06c] bg-clip-text text-transparent">
                                Project Location
                            </span>
                        </h2>

                        {/* Map Container */}
                        <div className="w-full h-[400px] md:h-[600px]  overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.6522891234567!2d80.9462!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale-[0.3] sepia-[0.1]"
                                title="Project Location Map"
                            ></iframe>
                        </div>
                    </div>
                </section>
            </div>

            <section className="w-full bg-[#f5f2ed] py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-[400] text-center mb-12 md:mb-16 lg:mb-20">
                        <span className="bg-gradient-to-r newF from-[#9c7948] via-[#d1a260] to-[#fcc06c] bg-clip-text text-transparent">
                            Gallery
                        </span>
                    </h2>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2  auto-rows-[200px] md:auto-rows-[250px]">
                        {/* Image 1 - Living Room (Tall) */}
                        <div className="col-span-1 row-span-2 overflow-hidden group cursor-pointer">
                            <img
                                src={galleryImages[0].src}
                                alt={galleryImages[0].alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        {/* Image 2 - Kitchen */}
                        <div className="col-span-1 row-span-1 overflow-hidden group cursor-pointer">
                            <img
                                src={galleryImages[1].src}
                                alt={galleryImages[1].alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        {/* Image 4 - Bedroom (Tall) */}
                        <div className="col-span-2 row-span-2 overflow-hidden group cursor-pointer">
                            <img
                                src={galleryImages[3].src}
                                alt={galleryImages[3].alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        {/* Image 5 - Bedroom 2 */}
                        <div className="col-span-1 row-span-1 overflow-hidden group cursor-pointer">
                            <img
                                src={galleryImages[4].src}
                                alt={galleryImages[4].alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section className="">
                <iframe className="h-[30vh] lg:h-screen w-full" src="https://www.youtube.com/embed/8DKy8ob_hHo?si=KzYE3N0HU1saYTK6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

export default ProjectDetail;
