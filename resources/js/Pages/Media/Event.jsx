import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "@/Components/Navbar";
import BannerComponent from "@/Components/BannerComponent";
import Footer from "@/Components/Footer";

const CardComponent = ({ imageSrc, title, location, date }) => {
    return (
        <div className="relative overflow-hidden group cursor-pointer">
            <div className="relative">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="bg-[#f1eee7] flex flex-col lg:items-start bottom-0 left-0 right-0 p-2 lg:p-6 text-[#2D1C11]">
                    <h3 className="lg:text-xl font-bold mb-1 tracking-wide">
                        {title}
                    </h3>
                    <p className="text-sm mb-3 opacity-90">{location}</p>
                    <div className="inline-block text-[#f1eee7] bg-[#2D1C11] px-4 py-2 font-semibold tracking-wider">
                        {date}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Event = () => {
    const [selectedYear, setSelectedYear] = useState("2025");
    const [selectedMonth, setSelectedMonth] = useState("OCT");

    const years = ["2025", "2024", "2023", "2022", "2021"];
    const months = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
    ];

    const pressCards = [
        {
            imageSrc: "/assets/images/Media/Asset 1.png",
            title: "TIMES OF INDIA",
            location: "Lucknow",
            date: "08 - DEC - 2021",
        },
        {
            imageSrc: "/assets/images/Media/Asset 2.png",
            title: "TIMES OF INDIA",
            location: "Lucknow",
            date: "08 - DEC - 2021",
        },
        {
            imageSrc: "/assets/images/Media/Asset 3.png",
            title: "TIMES OF INDIA",
            location: "Lucknow",
            date: "08 - DEC - 2021",
        },
        {
            imageSrc: "/assets/images/Media/Asset 4.png",
            title: "TIMES OF INDIA",
            location: "Lucknow",
            date: "08 - DEC - 2021",
        },
        {
            imageSrc: "/assets/images/Media/Asset 5.png",
            title: "TIMES OF INDIA",
            location: "Lucknow",
            date: "08 - DEC - 2021",
        },
        {
            imageSrc: "/assets/images/Media/Asset 6.png",
            title: "TIMES OF INDIA",
            location: "Lucknow",
            date: "08 - DEC - 2021",
        },
    ];

    return (
        <div>
            <Navbar />
            <BannerComponent
                imageSrc={"/assets/images/Media/Asset 8.png"}
                titleText={"News & Event"}
            />
            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-4 py-12">
                {/* Filters */}
                <div className="flex flex-wrap gap-6 mb-12">
                    {/* Year Selector */}
                    <div className="relative inline-flex items-center">
                        <span className="bg-[#f1eee7] text-[#2D1C11] px-4 py-2.5 text-xs font-semibold tracking-widest">
                            SELECT A YEAR
                        </span>
                        <div className="relative">
                            <select
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                                className="appearance-none bg-[#2D1C11] text-white px-4 py-2.5 text-xs font-semibold tracking-wider pr-8 cursor-pointer focus:outline-none"
                            >
                                {years.map((year) => (
                                    <option key={year} value={year} className="bg-white text-black">
                                        {year}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white pointer-events-none" />
                        </div>
                    </div>

                    {/* Month Selector */}
                    <div className="relative inline-flex items-center">
                        <span className="bg-[#f1eee7] text-[#2D1C11] px-4 py-2.5 text-xs font-semibold tracking-widest">
                            SELECT A MONTH
                        </span>
                        <div className="relative">
                            <select
                                value={selectedMonth}
                                onChange={(e) => setSelectedMonth(e.target.value)}
                                className="appearance-none bg-[#2D1C11] text-white px-4 py-2.5 text-xs font-semibold tracking-wider pr-8 cursor-pointer focus:outline-none"
                            >
                                {months.map((month) => (
                                    <option key={month} value={month} className="bg-white text-black">
                                        {month}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12">
                    {pressCards.map((card, index) => (
                        <CardComponent
                            key={index}
                            imageSrc={card.imageSrc}
                            title={card.title}
                            location={card.location}
                            date={card.date}
                        />
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Event;