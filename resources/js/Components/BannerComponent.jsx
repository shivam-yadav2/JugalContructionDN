import React from "react";

const BannerComponent = ({ imageSrc, titleText }) => {
    return (
        <div
            className="relative w-full  flex items-center justify-center overflow-hidden"
            //   style={{ backgroundColor: '#2d1c11' }}
        >
            <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-amber-950/80 to-transparent" />

            <img src={imageSrc} alt="" className="lg:h-auto h-[25vh] object-cover" />

            {/* Overlay */}
            {/* <div className="absolute inset-0" style={{ backgroundColor: 'rgba(45, 28, 17, 0.4)' }}></div> */}

            {/* Content */}
            <div className="absolute w-full h-full flex flex-col justify-end items-center z-10  text-white px-4">
                <h1 className="text-4xl md:text-7xl mb-8 lg:mb-16  newF  ">
                    {titleText}
                </h1>
            </div>
        </div>
    );
};

export default BannerComponent;
