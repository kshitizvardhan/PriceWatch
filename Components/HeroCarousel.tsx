"use client" // Still we didnt used any hooks or interactivity stuff like onClick, but under the hood the carousel did the interactivity so, need to add use client directive here, else error doesnt resolves

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const heroImages = [
    {imgUrl: "/assets/images/hero-1.svg", alt:"smartwatch"},
    {imgUrl: "/assets/images/hero-2.svg", alt:"bag"},
    {imgUrl: "/assets/images/hero-3.svg", alt:"lamp"},
    {imgUrl: "/assets/images/hero-4.svg", alt:"airfryer"},
    {imgUrl: "/assets/images/hero-5.svg", alt:"chair"},
]

const HeroCarousel = () => {
  return (
    <div className="hero-carousel flex justify-center items-center">
        <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
    >
      {heroImages.map((image,idx) => (
        <Image
            src={image.imgUrl}
            alt={image.alt}
            width={484}
            height={484}
            className="object-contain"
            key={idx}
        />
      ))}
    </Carousel>
    <Image
        src={"/assets/icons/hand-drawn-arrow.svg"}
        alt="arrow"
        width={175}
        height={175}
        className="max-xl:hidden absolute -left-[15%] -bottom-8 z-0"
    />
    </div>
  );
};

export default HeroCarousel;
