import BannerComponent from "@/Components/BannerComponent";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";

const Blog = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <BannerComponent
                imageSrc="/assets/images/Blog/Asset 1.png"
                titleText="Blog"
            />

            <section className="max-w-6xl mx-auto py-10 md:py-20 lg:py-28 px-4">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:gap-0 gap-6">
                    {/* Left Text Section */}
                    <div
                        className="w-full flex flex-col justify-between p-4 sm:p-6 md:p-12 bg-gray-100"
                        style={{ backgroundColor: "#f5f1e9" }}
                    >
                        <div className="text-base sm:text-lg md:text-xl font-semibold text-[#2D1C11]">
                            <span className="pb-1 border-b-2 border-[#2D1C11]">
                                13 OCT, 2025
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl newF bg-gradient-to-r from-[#9c7948] via-[#cfa05f] to-[#c79754] bg-clip-text text-transparent mt-4">
                            Lorem ipsum dolor sit amet
                        </h2>
                        <p className="text-[#2D1C11] text-base sm:text-lg mt-4 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat voluptat. Ut wisi
                            enim ad minim veniam.
                        </p>
                        <button className="mt-4 inline-flex items-center tracking-widest text-[#2D1C11] text-sm sm:text-base transition-colors duration-200 group">
                            KNOW MORE
                            <svg
                                className="w-5 h-5 sm:w-6 sm:h-6 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Right Image Section */}
                    <div className="w-full h-full">
                        <img
                            src="/assets/images/Blog/Asset 2.png"
                            alt="Blog Image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto py-10 md:py-20 lg:pb-28 px-4">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:gap-0 gap-6">
                    {/* Right Image Section */}
                    <div className="w-full h-full order-1 md:order-2">
                        <img
                            src="/assets/images/Blog/Asset 2.png"
                            alt="Blog Image"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Left Text Section */}
                    <div
                        className="w-full flex flex-col justify-between p-4 sm:p-6 md:p-12 bg-gray-100 order-2 md:order-1"
                        style={{ backgroundColor: "#f5f1e9" }}
                    >
                        <div className="text-base sm:text-lg md:text-xl font-semibold text-[#2D1C11]">
                            <span className="pb-1 border-b-2 border-[#2D1C11]">
                                13 OCT, 2025
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl newF bg-gradient-to-r from-[#9c7948] via-[#cfa05f] to-[#c79754] bg-clip-text text-transparent mt-4">
                            Lorem ipsum dolor sit amet
                        </h2>
                        <p className="text-[#2D1C11] text-base sm:text-lg mt-4 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat voluptat. Ut wisi
                            enim ad minim veniam.
                        </p>
                        <button className="mt-4 inline-flex items-center tracking-widest text-[#2D1C11] text-sm sm:text-base transition-colors duration-200 group">
                            KNOW MORE
                            <svg
                                className="w-5 h-5 sm:w-6 sm:h-6 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Blog;