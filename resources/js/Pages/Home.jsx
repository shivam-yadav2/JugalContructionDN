import Navbar from "../Components/Navbar";
import HeroSlider from "../Components/Hero";
import { Button } from "@/components/ui/button";
import PrFooter from "../Components/PrFooter";

function Home() {
    return (
        <div>
            <Navbar />
            <HeroSlider />
            {/* About Us Section */}
            <section className="bg-[#3d2920] py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-white">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#d4af37] mb-8">
                                About Us
                            </h2>

                            <div className="space-y-6 text-base md:text-lg leading-relaxed">
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

                            <button className="mt-8 inline-flex items-center text-[#d4af37] hover:text-white font-semibold transition-colors duration-200 group">
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
                                {/* Dark green decorative frame on right side */}
                                <div className="absolute -right-6 top-0 bottom-0 w-32 bg-[#1a3b2f] z-10">
                                    <div
                                        className="absolute inset-0 bg-[#d4af37] opacity-10"
                                        style={{
                                            backgroundImage:
                                                "repeating-linear-gradient(45deg, transparent, transparent 8px, currentColor 8px, currentColor 16px)",
                                        }}
                                    ></div>
                                </div>

                                {/* Main living room image */}
                                <div className="relative bg-black">
                                    <img
                                        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
                                        alt="Modern living room interior"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>

                            {/* Bottom left decorative diagonal pattern */}
                            <div
                                className="absolute -bottom-8 -left-8 w-48 h-48 z-0"
                                style={{
                                    background:
                                        "repeating-linear-gradient(45deg, #d4af37, #d4af37 10px, transparent 10px, transparent 20px)",
                                    opacity: 0.3,
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Sets Us Apart Section */}
            <section className="bg-[#3d2920] py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#d4af37] text-center mb-16">
                        What sets us apart?
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {/* Feature 1 */}
                        <div className="text-white space-y-4">
                            <h3 className="text-xl md:text-2xl font-bold text-[#d4af37] uppercase tracking-wide">
                                LEGACY
                                <br />
                                AND TRUST
                            </h3>
                            <p className="text-sm md:text-base leading-relaxed">
                                Over a century of trust built with our clients,
                                derived from integrity, transparency, and
                                ethical conduct.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="text-white space-y-4">
                            <h3 className="text-xl md:text-2xl font-bold text-[#d4af37] uppercase tracking-wide">
                                TIMELY DELIVERY
                                <br />
                                AND QUALITY
                            </h3>
                            <p className="text-sm md:text-base leading-relaxed">
                                Ensuring each project is delivered within the
                                promised timeframe, with leading-edge materials,
                                meticulous workmanship, and sustainable
                                practices.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="text-white space-y-4">
                            <h3 className="text-xl md:text-2xl font-bold text-[#d4af37] uppercase tracking-wide">
                                CUSTOMER CENTRIC
                                <br />
                                APPROACH
                            </h3>
                            <p className="text-sm md:text-base leading-relaxed">
                                From the first enquiry to post-handover support,
                                we believe in exceeding expectations.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="text-white space-y-4">
                            <h3 className="text-xl md:text-2xl font-bold text-[#d4af37] uppercase tracking-wide">
                                LIFESTYLE FOCUSED
                                <br />
                                AMENITIES
                            </h3>
                            <p className="text-sm md:text-base leading-relaxed">
                                From green parks, wide roads, and landscaped
                                walkways to robust security and modern
                                utilities, our aim is to create not just homes,
                                but communities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full relative bg-white py-6 lg:py-12 2xl:py-16">
                <div className="relative ">
                    <div className=" container mx-auto bg-[#0C3C3A] py-16 px-20 grid md:grid-cols-2 items-center">
                        <div className="absolute left-0 top-0 bottom-0 w-1/2 py-16">
                            <img
                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
                                alt="Vasto"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="relative col-start-2 text-white pl-8">
                            <div className="w-full mx-auto flex flex-col items-center md:items-center ">
                                <h2 className="text-[#D4AF37] text-2xl md:text-3xl font-semibold mb-4">
                                    Come Discover
                                </h2>

                                <img
                                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80" // your LALA logo
                                    alt="LALA logo"
                                    className="mx-auto md:mx-0 mb-4 w-40 h-auto"
                                />

                                <h3 className="text-lg tracking-wide mb-2 font-medium">
                                    JUGAL KISHORE <br /> CONSTRUCTIONS
                                </h3>

                                <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#C27C48] mb-6">
                                    VASTO
                                </h1>

                                <p className="text-sm md:text-base text-center max-w-lg text-gray-200 mb-8 leading-relaxed">
                                    Where luxury and lifestyle meet in perfect
                                    harmony, and the possibilities are truly
                                    endless.
                                </p>

                                <Button
                                    variant="outline"
                                    className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0C3C3A] rounded-full px-6"
                                >
                                    KNOW MORE →
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Projects Section */}
            <section className="bg-[#3d2920] py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-12 bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] bg-clip-text text-transparent">
                        Upcoming Projects that Redefine
                        <br />
                        Modern Living
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Township Living Card */}
                        <div
                            className="relative group overflow-hidden bg-cover bg-center h-96"
                            style={{
                                backgroundImage:
                                    "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80)",
                            }}
                        >
                            <div className="absolute inset-0 bg-white/60 group-hover:bg-white/70 transition-colors duration-300"></div>
                            <div className="relative h-full flex flex-col justify-between p-8 md:p-10">
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-[#3d2920] mb-4">
                                        Township Living
                                    </h3>
                                    <p className="text-[#3d2920] text-sm md:text-base leading-relaxed max-w-md">
                                        Expansive landscapes, thoughtfully
                                        curated amenities, and visionary design
                                        come together to define the future of
                                        township living.
                                    </p>
                                </div>
                                <button className="bg-[#c41e3a] hover:bg-[#a01629] text-white px-6 py-3 font-bold text-sm tracking-wider transition-colors duration-200 self-start">
                                    COMING SOON
                                </button>
                            </div>
                        </div>

                        {/* Group Housing Card */}
                        <div
                            className="relative group overflow-hidden bg-cover bg-center h-96"
                            style={{
                                backgroundImage:
                                    "url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80)",
                            }}
                        >
                            <div className="absolute inset-0 bg-white/60 group-hover:bg-white/70 transition-colors duration-300"></div>
                            <div className="relative h-full flex flex-col justify-between p-8 md:p-10">
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-[#3d2920] mb-4">
                                        Group Housing
                                    </h3>
                                    <p className="text-[#3d2920] text-sm md:text-base leading-relaxed max-w-md">
                                        Exclusive residences crafted for
                                        contemporary lifestyles, blending smart
                                        design, premium amenities, and a vibrant
                                        community spirit.
                                    </p>
                                </div>
                                <button className="bg-[#c41e3a] hover:bg-[#a01629] text-white px-6 py-3 font-bold text-sm tracking-wider transition-colors duration-200 self-start">
                                    COMING SOON
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* LJK Promise Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-12 bg-gradient-to-r from-[#8b6f47] via-[#d4af37] to-[#8b6f47] bg-clip-text text-transparent">
                        LJK Promise
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {/* Trust */}
                        <div className="bg-[#3d2920] p-8 md:p-10 flex flex-col items-center justify-center text-center aspect-square">
                            <div className="mb-6">
                                <svg
                                    className="w-16 h-16 text-[#d4af37]"
                                    viewBox="0 0 64 64"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                >
                                    <circle cx="32" cy="28" r="12" />
                                    <path
                                        d="M20 26 L26 32 L38 20"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M32 40 L28 48 L32 46 L36 48 L32 40"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M20 40 C20 40 18 44 20 48"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M44 40 C44 40 46 44 44 48"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-[#d4af37]">
                                Trust
                            </h3>
                        </div>

                        {/* Transparency */}
                        <div className="bg-[#e8d5b7] p-8 md:p-10 flex flex-col items-center justify-center text-center aspect-square">
                            <div className="mb-6">
                                <svg
                                    className="w-16 h-16 text-[#8b6f47]"
                                    viewBox="0 0 64 64"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                >
                                    <circle cx="32" cy="32" r="18" />
                                    <circle cx="32" cy="32" r="10" />
                                    <line
                                        x1="32"
                                        y1="14"
                                        x2="32"
                                        y2="22"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-[#8b6f47]">
                                Transparency
                            </h3>
                        </div>

                        {/* World Class Quality */}
                        <div className="bg-[#3d2920] p-8 md:p-10 flex flex-col items-center justify-center text-center aspect-square">
                            <div className="mb-6">
                                <svg
                                    className="w-16 h-16 text-[#d4af37]"
                                    viewBox="0 0 64 64"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                >
                                    <circle cx="32" cy="32" r="20" />
                                    <path
                                        d="M32 12 C32 12 42 18 42 32 C42 46 32 52 32 52"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M32 12 C32 12 22 18 22 32 C22 46 32 52 32 52"
                                        strokeLinecap="round"
                                    />
                                    <line
                                        x1="12"
                                        y1="32"
                                        x2="52"
                                        y2="32"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-[#d4af37]">
                                World Class
                                <br />
                                Quality
                            </h3>
                        </div>

                        {/* Timely Delivery */}
                        <div className="bg-[#e8d5b7] p-8 md:p-10 flex flex-col items-center justify-center text-center aspect-square">
                            <div className="mb-6">
                                <svg
                                    className="w-16 h-16 text-[#8b6f47]"
                                    viewBox="0 0 64 64"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                >
                                    <rect
                                        x="16"
                                        y="20"
                                        width="32"
                                        height="28"
                                        rx="2"
                                    />
                                    <line
                                        x1="24"
                                        y1="16"
                                        x2="24"
                                        y2="24"
                                        strokeLinecap="round"
                                    />
                                    <line
                                        x1="40"
                                        y1="16"
                                        x2="40"
                                        y2="24"
                                        strokeLinecap="round"
                                    />
                                    <line
                                        x1="16"
                                        y1="28"
                                        x2="48"
                                        y2="28"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-[#8b6f47]">
                                Timely
                                <br />
                                Delivery
                            </h3>
                        </div>

                        {/* Flexible Payment Plans */}
                        <div className="bg-[#e8d5b7] p-8 md:p-10 flex flex-col items-center justify-center text-center aspect-square">
                            <div className="mb-6">
                                <svg
                                    className="w-16 h-16 text-[#8b6f47]"
                                    viewBox="0 0 64 64"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                >
                                    <rect
                                        x="12"
                                        y="22"
                                        width="40"
                                        height="28"
                                        rx="2"
                                    />
                                    <line
                                        x1="12"
                                        y1="30"
                                        x2="52"
                                        y2="30"
                                        strokeLinecap="round"
                                    />
                                    <circle
                                        cx="20"
                                        cy="38"
                                        r="2"
                                        fill="currentColor"
                                    />
                                    <circle
                                        cx="28"
                                        cy="38"
                                        r="2"
                                        fill="currentColor"
                                    />
                                    <circle
                                        cx="36"
                                        cy="38"
                                        r="2"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-[#8b6f47]">
                                Flexible
                                <br />
                                Payment Plans
                            </h3>
                        </div>

                        {/* Customer Relationships */}
                        <div className="bg-[#3d2920] p-8 md:p-10 flex flex-col items-center justify-center text-center aspect-square">
                            <div className="mb-6">
                                <svg
                                    className="w-16 h-16 text-[#d4af37]"
                                    viewBox="0 0 64 64"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                >
                                    <path
                                        d="M20 35 C20 35 24 32 32 32 C40 32 44 35 44 35"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M16 28 C16 28 20 38 32 38 C44 38 48 28 48 28"
                                        strokeLinecap="round"
                                    />
                                    <circle cx="32" cy="24" r="8" />
                                </svg>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-[#d4af37]">
                                Customer
                                <br />
                                Relationships
                            </h3>
                        </div>

                        {/* Best in Class Amenities */}
                        <div className="bg-[#e8d5b7] p-8 md:p-10 flex flex-col items-center justify-center text-center aspect-square">
                            <div className="mb-6">
                                <svg
                                    className="w-16 h-16 text-[#8b6f47]"
                                    viewBox="0 0 64 64"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                >
                                    <rect
                                        x="20"
                                        y="12"
                                        width="24"
                                        height="40"
                                    />
                                    <line
                                        x1="24"
                                        y1="12"
                                        x2="24"
                                        y2="52"
                                        strokeLinecap="round"
                                    />
                                    <line
                                        x1="28"
                                        y1="12"
                                        x2="28"
                                        y2="52"
                                        strokeLinecap="round"
                                    />
                                    <line
                                        x1="32"
                                        y1="12"
                                        x2="32"
                                        y2="52"
                                        strokeLinecap="round"
                                    />
                                    <line
                                        x1="36"
                                        y1="12"
                                        x2="36"
                                        y2="52"
                                        strokeLinecap="round"
                                    />
                                    <line
                                        x1="40"
                                        y1="12"
                                        x2="40"
                                        y2="52"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M12 20 L20 12 L44 12 L52 20"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-[#8b6f47]">
                                Best in
                                <br />
                                Class Amenities
                            </h3>
                        </div>

                        {/* Post-Handover Support */}
                        <div className="bg-[#3d2920] p-8 md:p-10 flex flex-col items-center justify-center text-center aspect-square">
                            <div className="mb-6">
                                <svg
                                    className="w-16 h-16 text-[#d4af37]"
                                    viewBox="0 0 64 64"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                >
                                    <circle cx="32" cy="28" r="12" />
                                    <path
                                        d="M20 40 L32 52 L44 40"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <line
                                        x1="32"
                                        y1="40"
                                        x2="32"
                                        y2="52"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-[#d4af37]">
                                Post-Handover
                                <br />
                                Support
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
            <PrFooter />
        </div>
    );
}

export default Home;
