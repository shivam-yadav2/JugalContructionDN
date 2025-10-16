import Navbar from "../Components/Navbar";
import HeroSlider from "../Components/Hero";
import { Button } from "@/components/ui/button";
import PrFooter from "../Components/PrFooter";
import { MoveRight } from "lucide-react";
import Footer from "@/Components/Footer";

function Home() {
    return (
        <div>
            <Navbar />
            <HeroSlider />
            {/* About Us Section */}
            <section className="bg-[#2D1C11] py-16 border-t-8 border-[#d8a864] md:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-white lg:pr-12">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-[500] newF bg-gradient-to-r from-[#9c7948] via-[#f7c073] to-[#fcc06c] bg-clip-text text-transparent mb-10">
                                About Us
                            </h2>

                            <div className="space-y-6 roboto text-base  leading-relaxed">
                                <p>
                                    From a legacy that dates back to 1857, LJK
                                    Construction India Pvt. Ltd., part of the
                                    esteemed Lala Jugal Kishore Group, has
                                    evolved into a real estate developer that
                                    blends heritage with modernity. With roots
                                    in jewelry and craftsmanship, our real
                                    essence has always been about creating
                                    value, not just through buildings, but
                                    through trusted relationships, superior
                                    experiences, and enduring design.
                                </p>

                                <p>
                                    At LJK, we specialize in crafting
                                    residential townships, independent villas,
                                    plotted developments, and commercial spaces
                                    designed to elevate living. Our projects
                                    reflect our commitment to thoughtful
                                    planning, world-class amenities, sustainable
                                    architecture, sun-facing layouts, green
                                    environs, and seamless infrastructure.
                                </p>
                            </div>

                            <button className="mt-10 inline-flex items-center tracking-widest text-[#fcc06c]  hover:text-white r-m transition-colors duration-200 group text-lg">
                                KNOW MORE
                                <svg
                                    className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-200"
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

                        {/* Right Image with Frame Structure */}
                        <div className="relative">
                            {/* Main image container with dark green frame on right */}
                            <div className="relative">
                                {/* Main living room image */}
                                <div className="relative">
                                    <img
                                        src="/assets/images/home/Asset 5.png"
                                        alt="Modern living room interior"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Sets Us Apart Section */}
            <section className="bg-[#2D1C11]  py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-[500] newF bg-gradient-to-r from-[#9c7948] via-[#f7c073] to-[#fcc06c] bg-clip-text text-transparent text-center mb-16">
                        What sets us apart?
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
                        {/* Feature 1 */}
                        <div className="text-white space-y-4">
                            <h3 className="text-lg  font-semibold text-[#EBD2A0] uppercase tracking-wide">
                                LEGACY
                                <br />
                                AND TRUST
                            </h3>
                            <p className="text-sm  leading-relaxed">
                                Over a century of trust built with our clients,
                                derived from integrity, transparency, and
                                ethical conduct.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="text-white space-y-4">
                            <h3 className="text-lg font-semibold text-[#EBD2A0] uppercase tracking-wide">
                                TIMELY DELIVERY
                                <br />
                                AND QUALITY
                            </h3>
                            <p className="text-sm  leading-relaxed">
                                Ensuring each project is delivered within the
                                promised timeframe, with leading-edge materials,
                                meticulous workmanship, and sustainable
                                practices.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="text-white space-y-4">
                            <h3 className="text-lg  font-semibold text-[#EBD2A0] uppercase tracking-wide">
                                CUSTOMER CENTRIC
                                <br />
                                APPROACH
                            </h3>
                            <p className="text-sm leading-relaxed">
                                From the first enquiry to post-handover support,
                                we believe in exceeding expectations.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="text-white space-y-4">
                            <h3 className="text-lg font-semibold text-[#EBD2A0] uppercase tracking-wide">
                                LIFESTYLE FOCUSED
                                <br />
                                AMENITIES
                            </h3>
                            <p className="text-sm  leading-relaxed">
                                From green parks, wide roads, and landscaped
                                walkways to robust security and modern
                                utilities, our aim is to create not just homes,
                                but communities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full relative bg-white  py-20 md:py-32">
                <div className="relative ">
                    <div
                        className=" max-w-7xl border-t-8 border-[#d8a864] mx-auto -pt-1 -mt-1  py-16  grid md:grid-cols-2 items-center"
                        style={{
                            backgroundImage: `url('/assets/images/home/Asset 8.png')`,
                        }}
                    >
                        <div className="absolute left-0 top-0 bottom-0 lg:w-1/2 lg:p-0 p-6 lg:py-16">
                            <div className="relative lg:block hidden w-full h-full  shadow-lg">
                                <img
                                    src="/assets/images/home/Asset 6.png"
                                    alt="Vasto"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* <div className="relative lg:hidden  w-full h-full border-8 border-amber-900 shadow-lg">
                                <div className="  absolute top-0 left-0 w-full h-full bg-black/70"></div>
                                <img
                                    src="/assets/images/home/Asset 6.png"
                                    alt="Vasto"
                                    className="w-full h-full object-cover"
                                />
                            </div> */}
                        </div>

                        <div className="relative col-start-2 text-white p-3 lg:p-0  lg:pl-8">
                            <div className="w-full mx-auto flex flex-col items-center md:items-center gap-7 ">
                                <h2 className=" newF bg-gradient-to-r from-[#9c7948] via-[#f7c073] to-[#fcc06c] bg-clip-text text-transparent text-2xl lg:text-4xl 2xl:text-5xl mb-4 ">
                                    Come Discover
                                </h2>

                                <img
                                    src="/assets/images/home/Asset 7.png" // your LALA logo
                                    alt="LALA logo"
                                    className="mx-auto md:mx-0 mb-4"
                                />

                                {/* <h3 className="text-lg tracking-wide mb-2 font-medium">
                                    JUGAL KISHORE <br /> CONSTRUCTIONS
                                </h3>
                                <div>
                                    <img src="" alt="" />
                                    <h1 className="text-5xl md:text-4xl 2xl:text-7xl font-serif font-bold text-[#C27C48] mb-6">
                                        VASTO
                                    </h1>
                                </div> */}

                                <p className="text-sm md:text-base text-center max-w-md text-gray-200 mb-8 leading-relaxed font-light mt-6">
                                    Where luxury and lifestyle meet in perfect
                                    harmony, and the possibilities are truly
                                    endless.
                                </p>

                                <button
                                    variant="outline"
                                    className=" inline-flex items-center tracking-widest text-[#fcc06c]  hover:text-white r-m transition-colors duration-200 group text-lg"
                                >
                                    KNOW MORE <MoveRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Projects Section */}
            <section className="bg-[#2D1C11]  py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl newF lg:text-6xl leading-tight pb-2 font-serif mb-12 bg-gradient-to-r from-[#9c7948] via-[#f7c073] to-[#fcc06c] bg-clip-text text-transparent">
                        Upcoming Projects that Redefine
                        <br />
                        Modern Living
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                        {/* Township Living Card */}
                        <div
                            className="relative group overflow-hidden bg-cover bg-center h-96"
                            style={{
                                backgroundImage:
                                    "url('/assets/images/home/Asset 9.png')",
                            }}
                        >
                            <div className="relative h-full flex flex-col justify-end p-8 md:p-10">
                                <div className="flex flex-col gap-6">
                                    <h3 className="text-4xl newF tracking-wider 2xl:text-5xl font-bold text-[#2D1C11] mb-2">
                                        Township Living
                                    </h3>
                                    <p className="text-[#2D1C11] text-sm md:text-base leading-relaxed max-w-md mb-4">
                                        Expansive landscapes, thoughtfully
                                        curated amenities, and visionary design
                                        come together to define the future of
                                        township living.
                                    </p>
                                </div>
                                <button className="bg-[#c41e3a] mt-5 hover:bg-[#a01629] text-white px-6 py-3 roboto  tracking-wider transition-colors duration-200 self-start">
                                    COMING SOON
                                </button>
                            </div>
                        </div>

                        {/* Group Housing Card */}
                        <div
                            className="relative group overflow-hidden bg-cover bg-center h-96"
                            style={{
                                backgroundImage:
                                    "url('/assets/images/Homepage/Asset 10.png')",
                            }}
                        >
                            <div className="relative h-full flex flex-col justify-end p-8 md:p-10">
                                <div className="flex flex-col gap-6">
                                    <h3 className="text-4xl newF tracking-wider 2xl:text-5xl font-bold text-[#2D1C11] mb-2">
                                        Group Housing
                                    </h3>
                                    <p className="text-[#2D1C11] text-sm md:text-base leading-relaxed max-w-md mb-4">
                                        Exclusive residences crafted for
                                        contemporary lifestyles, blending smart
                                        design, premium amenities, and a vibrant
                                        community spirit.
                                    </p>
                                </div>
                                <button className="bg-[#c41e3a] mt-5 hover:bg-[#a01629] text-white px-6 py-3 roboto  tracking-wider transition-colors duration-200 self-start">
                                    COMING SOON
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* LJK Promise Section */}
            <section className="bg-white py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-12 bg-gradient-to-r from-[#8b6f47] via-[#b49160] to-[#e4b675] bg-clip-text text-transparent">
                        LJK Promise
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12">
                        {/* Trust */}
                        <div className="bg-[#2D1C11] p-4 lg:p-6 2xl:p-8">
                            <div className="mb-12 w-full flex justify-end">
                                <img
                                    src="/assets/images/Homepage/Asset 18.png"
                                    alt="Trust"
                                />
                            </div>
                            <div className="flex justify-start w-full">
                                <h3 className="text-lg md:text-2xl  newF bg-gradient-to-r from-[#8b6f47] via-[#b49160] to-[#e4b675] bg-clip-text text-transparent">
                                    Trust
                                </h3>
                            </div>
                        </div>

                        {/* Transparency */}
                        <div className="bg-[#e8d5b7] p-4 lg:p-6 2xl:p-8">
                            <div className="mb-12 w-full flex justify-end">
                                <img
                                    src="/assets/images/Homepage/Asset 11.png"
                                    alt="Transparency"
                                />
                            </div>
                            <div className="flex justify-start w-full">
                                <h3 className="text-lg md:text-2xl  newF bg-gradient-to-r from-[#8b6f47] via-[#b49160] to-[#e4b675] bg-clip-text text-transparent">
                                    Transparency
                                </h3>
                            </div>
                        </div>

                        {/* World Class Quality */}
                        <div className="bg-[#2D1C11] p-4 lg:p-6 2xl:p-8">
                            <div className="mb-12 w-full flex justify-end">
                                <img
                                    src="/assets/images/Homepage/Asset 17.png"
                                    alt="World Class Quality"
                                />
                            </div>
                            <div className="flex justify-start w-full">
                                <h3 className="text-lg md:text-2xl  newF bg-gradient-to-r from-[#8b6f47] via-[#b49160] to-[#e4b675] bg-clip-text text-transparent">
                                    World Class <br /> Quality
                                </h3>
                            </div>
                        </div>

                        {/* Timely Delivery */}
                        <div className="bg-[#e8d5b7] p-4 lg:p-6 2xl:p-8">
                            <div className="mb-12 w-full flex justify-end">
                                <img
                                    src="/assets/images/Homepage/Asset 16.png"
                                    alt="Timely Delivery"
                                />
                            </div>
                            <div className="flex justify-start w-full">
                                <h3 className="text-lg md:text-2xl  newF bg-gradient-to-r from-[#8b6f47] via-[#b49160] to-[#e4b675] bg-clip-text text-transparent">
                                    Timely <br /> Delivery
                                </h3>
                            </div>
                        </div>

                        {/* Flexible Payment Plans */}
                        <div className="bg-[#2D1C11] p-4 lg:p-6 2xl:p-8">
                            <div className="mb-12 w-full flex justify-end">
                                <img
                                    src="/assets/images/Homepage/Asset 15.png"
                                    alt="Flexible Payment Plans"
                                />
                            </div>
                            <div className="flex justify-start w-full">
                                <h3 className="text-lg md:text-2xl  newF bg-gradient-to-r from-[#8b6f47] via-[#b49160] to-[#e4b675] bg-clip-text text-transparent">
                                    Flexible <br /> Payment Plans
                                </h3>
                            </div>
                        </div>

                        {/* Customer Relationships */}
                        <div className="bg-[#e8d5b7] p-4 lg:p-6 2xl:p-8">
                            <div className="mb-12 w-full flex justify-end">
                                <img
                                    src="/assets/images/Homepage/Asset 13.png"
                                    alt="Customer Relationships"
                                />
                            </div>
                            <div className="flex justify-start w-full">
                                <h3 className="text-lg md:text-2xl  newF bg-gradient-to-r from-[#8b6f47] via-[#b49160] to-[#e4b675] bg-clip-text text-transparent">
                                    Customer <br /> Relationships
                                </h3>
                            </div>
                        </div>

                        {/* Best in Class Amenities */}
                        <div className="bg-[#2D1C11] p-4 lg:p-6 2xl:p-8">
                            <div className="mb-12 w-full flex justify-end">
                                <img
                                    src="/assets/images/Homepage/Asset 12.png"
                                    alt="Best in Class Amenities"
                                />
                            </div>
                            <div className="flex justify-start w-full">
                                <h3 className="text-lg md:text-2xl  newF bg-gradient-to-r from-[#8b6f47] via-[#b49160] to-[#e4b675] bg-clip-text text-transparent">
                                    Best in <br /> Class Amenities
                                </h3>
                            </div>
                        </div>

                        {/* Post-Handover Support */}
                        <div className="bg-[#e8d5b7] p-4 lg:p-6 2xl:p-8">
                            <div className="mb-12 w-full flex justify-end">
                                <img
                                    src="/assets/images/Homepage/Asset 14.png"
                                    alt="Post-Handover Support"
                                />
                            </div>
                            <div className="flex justify-start w-full">
                                <h3 className="text-lg md:text-2xl  newF bg-gradient-to-r from-[#8b6f47] via-[#b49160] to-[#e4b675] bg-clip-text text-transparent">
                                    Post-Handover <br /> Support
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <PrFooter />
            <Footer />
        </div>
    );
}

export default Home;
