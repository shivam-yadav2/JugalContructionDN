import BannerComponent from "@/Components/BannerComponent";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React, { useState } from "react";

const Career = () => {
    return (
        <div>
            <Navbar />
            <BannerComponent
                imageSrc={"/assets/images/Career/Asset 2.png"}
                titleText={"Career"}
            />
            <section className="max-w-6xl mx-auto py-16 md:py-20 lg:py-24">
                <div className="flex flex-col items-center gap-12 justify-center ">
                    <h1 className=" text-3xl pb-1 md:text-4xl lg:text-5xl font-[500] newF bg-gradient-to-r from-[#9c7948] via-[#d1a260] to-[#fcc06c] bg-clip-text text-transparent ">
                        Why Join LJK?
                    </h1>
                    <p className="text-gray-600 r-m text-center mb-8">
                        LJK is a team of energetic and dedicated individuals
                        that are constantly looking for innovative ways to
                        develop and grow. We at LJK will provide you with the
                        opportunity to work with people who share your passion
                        for excellence. If you're seeking a career in a
                        fast-paced industry with opportunities for advancement
                        and personal development, consider joining us. As a
                        member of our team, you have the opportunity to work on
                        a variety of intriguing projects.
                    </p>
                    <h2 className="text-3xl pb-1 mb-12 md:text-4xl lg:text-5xl font-[500] newF bg-gradient-to-r from-[#9c7948] via-[#d4a562] to-[#fcc06c] bg-clip-text text-transparent ">
                        Think you'd be a good fit for our team?
                    </h2>
                </div>
            </section>
            <div className="w-full">
                <img
                    src="/assets/images/Career/Asset 1.png" // Replace with the actual image URL
                    alt="Person walking up stairs"
                    className="w-full h-auto object-cover"
                />
            </div>

            <section className="bg-white py-16 md:py-20 lg:py-24">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid  gap-12 items-center">
                        {/* Apply Online Form */}
                        <div className="flex flex-col items-center w-full justify-center">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#8b6f47] mb-8">
                                Apply Online
                            </h2>

                            <div className="space-y-4 w-full">
                                <input
                                    type="text"
                                    placeholder="FULL NAME"
                                    className="w-full px-4 py-3 bg-[#f1eee7] text-sm outline-none border-none focus:outline-none focus:border-none focus:ring-0"
                                />

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="relative">
                                        <input
                                            type="tel"
                                            placeholder="PHONE"
                                            className="w-full px-4 py-3 pl-16 bg-[#f1eee7] text-sm outline-none border-none focus:outline-none focus:border-none focus:ring-0"
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
                                        className="w-full px-4 py-3 bg-[#f1eee7] text-sm outline-none border-none focus:outline-none focus:border-none focus:ring-0"
                                    />
                                </div>

                                <textarea
                                    placeholder="MESSAGE"
                                    rows="5"
                                    className="w-full px-4 py-3 bg-[#f1eee7] text-sm outline-none border-none focus:outline-none focus:border-none focus:ring-0"
                                ></textarea>

                                <div className="flex items-center justify-between">
                                    <div className="w-2/3">
                                        <input
                                            type="text"
                                            placeholder="UPLOAD YOUR CV"
                                            className="w-full px-4 py-3 bg-[#f1eee7] text-sm outline-none border-none focus:outline-none focus:border-none focus:ring-0"
                                            readOnly
                                        />
                                        <p className="text-gray-500 text-xs mt-1">
                                            (Accepted formats: .doc, .docx,
                                            .pdf, .zip)
                                        </p>
                                    </div>
                                    <button className="bg-[#4a2c2a] text-white px-6 py-2 text-sm">
                                        BROWSE...
                                    </button>
                                </div>

                                <div className="flex justify-center">


                                <button className="bg-[#EBD2A0] text-black r-m px-8 py-3 tracking-widest transition-colors duration-200">
                                    SUBMIT
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Career;
