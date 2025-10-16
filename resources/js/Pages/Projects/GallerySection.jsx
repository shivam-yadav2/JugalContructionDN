import React from "react";

export default function GallerySection() {
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

                    {/* Image 6 - Kitchen 2 */}
                    <div className="col-span-2 row-span-1 overflow-hidden group cursor-pointer">
                        <img
                            src={galleryImages[5].src}
                            alt={galleryImages[5].alt}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                    {/* Image 7 - Bathroom 2 */}
                    <div className="col-span-1 row-span-1 overflow-hidden group cursor-pointer">
                        <img
                            src={galleryImages[6].src}
                            alt={galleryImages[6].alt}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                    <div className="col-span-1 row-span-1 overflow-hidden group cursor-pointer">
                        <img
                            src={galleryImages[2].src}
                            alt={galleryImages[2].alt}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
