import BannerComponent from "@/Components/BannerComponent";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React, { useState } from "react";

const Team = () => {
    return (
        <div>
            <Navbar />
            <BannerComponent
                imageSrc={"/assets/images/About Us/Asset 8.png"}
                titleText={"Our Team"}
            />

            <section className="max-w-6xl mx-auto py-20 md:py-28 lg:py-36">
                <div className="grid grid-cols-1 md:grid-cols-7 gap-x-12 pb-28 border-b-2 border-gray-900">
                    <div className="col-span-2">
                        <img
                            src="/assets/images/About Us/Asset 9.png"
                            alt="Mr. Arpit Rastogi"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="col-span-5">
                        <div className="">
                            <h2 className="text-3xl newF  text-[#2D1C11]">
                                Mr. Arpit Rastogi
                            </h2>
                            <p className="text-lg mt-2 font-semibold text-[#2D1C11]">
                                DIRECTOR
                            </p>
                            <p className="mt-8 text-[#2D1C11] text-sm leading-relaxed">
                                Mr. Arpit Rastogi represents the next generation
                                of leadership at LJK Constructions, bringing
                                with him a powerful blend of vision, heritage,
                                and entrepreneurial expertise. A graduate of the
                                University of Lucknow, he seamlessly integrates
                                modern business acumen with the deep-rooted
                                values of his family legacy, shaping both the
                                culture and long-term vision of the company.
                                Alongside his role in real estate, Mr. Rastogi
                                also leads Lala Jugal Kishore Jewellers, the
                                parent company and one of India's most
                                celebrated jewelry houses with a legacy spanning
                                generations. His stewardship of the jewelry
                                vertical reflects his ability to honor tradition
                                while embracing innovation, ensuring the brand
                                continues to flourish in a modern era.
                            </p>
                            <p className="mt-2 text-sm text-[#2D1C11] leading-relaxed">
                                Respected as both a strategic leader and
                                cultural custodian, he brings fresh perspectives
                                to every challenge and opportunity. His
                                leadership is defined by a steadfast focus on
                                innovation, sustainable growth, and long-term
                                value creation, inspiring his team to deliver
                                excellence in every endeavour. Under his
                                leadership, LJK Constructions is not only
                                shaping landmark projects but also creating a
                                legacy where tradition meets innovation and
                                every structure reflects trust, excellence, and
                                enduring value.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-7 gap-x-12 pt-28">
                    <div className="col-span-2">
                        <img
                            src="/assets/images/About Us/Asset 9.png"
                            alt="Mr. Arpit Rastogi"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="col-span-5">
                        <div className="">
                            <h2 className="text-3xl newF  text-[#2D1C11]">
                                Mr. Shashi Shekhar Mishra
                            </h2>
                            <p className="text-lg mt-2 font-semibold text-[#2D1C11]">
                                DIRECTOR
                            </p>
                            <p className="mt-8 text-[#2D1C11] text-sm leading-relaxed">
                                Shashi Shekhar Mishra, a distinguished
                                postgraduate from Lucknow University, is the
                                driving force behind some of Lucknow’s most
                                successful real estate and infrastructure
                                projects. With over 15 years of proven
                                expertise, he brings unmatched vision,
                                executional excellence, and a deep commitment to
                                shaping the city’s skyline. A true real estate
                                and infrastructure pioneer, he embodies
                                versatility and dynamism. His focus on ethical
                                practices, innovation, and long-term value
                                creation has set new benchmarks in the industry.
                                Recognized as a strategic leader and project
                                execution specialist.
                            </p>
                            <p className="mt-2 text-sm text-[#2D1C11] leading-relaxed">
                                He strongly believes in win–win
                                solutions—ensuring that every project balances
                                investment opportunities with societal welfare.
                                For him, real estate is not just about
                                structures, but about creating opportunities,
                                empowering clients to understand investments,
                                and building lasting relationships. Under his
                                leadership, LJK Constructions continues to shape
                                modern infrastructure with a vision that
                                combines sustainable growth, client trust, and
                                long-term community impact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Team;
