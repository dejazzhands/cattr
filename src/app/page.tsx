import React from 'react'
import './globals.css'
import Image from 'next/image'

//css styling for the image to be displayed in the top center of the page
const imageStyle = {
  display: "top center",
  margin: "auto",
};

// Header component contains the logo of the site
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
export default function Home(page: any) {
  return (
    <div>
      <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      </head>

      <ImageHead />
      
    </div>
  )
}


