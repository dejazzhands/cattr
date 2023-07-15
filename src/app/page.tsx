'use client'
import { useState, useEffect } from 'react'
import React from 'react'
import './globals.css'
import Image from 'next/image'
import HeroBanner from "./HeroBanner";

//css styling for the image to be displayed in the top center of the page
const imageStyle = {
  display: "top center",
  margin: "auto",
};

//Header component contains the logo of the site
export const ImageHead = () => {
  return (
    <Image
      src="/logo.png"
      width={300}
      height={100}
      alt="logo of the site"
      sizes='(max-width: 300px) 100vw, 300px'
      style={imageStyle}
    />
  )
}

// This is the main page of the site, with all the components.
const Home = (page: any) => {
  useEffect(() => {
    document.title = "Cattr";
  }, []);

  return (
    <div>
      <ImageHead />
      <HeroBanner />
    </div>
  );
}

export default Home;
