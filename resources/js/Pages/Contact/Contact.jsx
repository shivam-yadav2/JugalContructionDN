import BannerComponent from "@/Components/BannerComponent";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React, { useState } from "react";

const Contact = () => {
    return (
        <div>
            <Navbar />
            <BannerComponent
                imageSrc={"/assets/images/Contact Us/Asset 1.png"}
                titleText={"Contact Us"}
            />

            <section className="bg-white py-16 md:py-20 lg:py-24">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid  gap-12 items-center">
                        {/* Apply Online Form */}
                        <div className="flex flex-col items-center w-full justify-center">
                            <h2 className="text-3xl pb-1 md:text-4xl lg:text-5xl font-[500] newF bg-gradient-to-r from-[#9c7948] via-[#d1a260] to-[#fcc06c] bg-clip-text text-transparent mb-8">
                                Register Your Interest
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

            <section className="max-w-6xl mx-auto py-16 md:py-20 lg:py-24">
                <div>
                    <div className="w-full bg-[#ebd2a0] py-24 px-4">
                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Phone Section */}
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src="/assets/images/Contact Us/Asset 4.png"
                                    alt=""
                                    className="mb-4"
                                />

                                <h3 className="text-2xl text-[#2D1C11] my-3 newF tracking-wider">
                                    PHONE
                                </h3>
                                <p className="text-[#2D1C11] text-lg">
                                    0522-4001195
                                </p>
                            </div>

                            {/* Divider */}
                            {/* <div className="hidden md:block border-l border-amber-900 opacity-40"></div> */}

                            {/* Address Section */}
                            <div className="flex flex-col items-center text-center md:border-l-2  md:border-[#2D1C11] ">
                                <img
                                    src="/assets/images/Contact Us/Asset 3.png"
                                    alt=""
                                    className="mb-4"
                                />

                                <h3 className="text-2xl text-[#2D1C11] my-3 newF tracking-wider">
                                    ADDRESS
                                </h3>
                                <p className="text-[#2D1C11] text-base leading-relaxed">
                                    LJK Construction India Pvt Ltd,
                                    <br />
                                    7th Floor, Eldeco Corporate Chambers - II,
                                    <br />
                                    Vibhuti Khand, Gomti Nagar,
                                    <br />
                                    Lucknow - 226010
                                </p>
                            </div>

                            {/* Divider */}
                            {/* <div className="hidden md:block border-l border-amber-900 opacity-40"></div> */}

                            {/* Email Section */}
                            <div className="flex flex-col items-center text-center md:border-l-2  md:border-[#2D1C11] ">
                                <img
                                    src="/assets/images/Contact Us/Asset 2.png"
                                    alt=""
                                    className="mb-4"
                                />

                                <h3 className="text-2xl text-[#2D1C11] my-3 newF tracking-wider">
                                    E-MAIL
                                </h3>
                                <p className="text-[#2D1C11] text-lg break-all">
                                    sales@lalajugalkishore.org
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Contact;
