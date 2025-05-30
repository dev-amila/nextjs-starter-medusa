"use client"

import Slider, { Settings } from "react-slick"
import type { HeroBannerType } from "@lib/types/heroBanner"
import { useState, useEffect } from "react"

const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
}

export const HeroBanner = () => {
  const [windowWidth, setWindowWidth] = useState(0)
  const [heroData, setHeroData] = useState<HeroBannerType[]>([])
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    const fetchHeros = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/api/hero-banners`
        )
        const data = await res.json()
        setHeroData(data.docs || [])
      } catch (error) {
        console.error("Failed to fetch hero banners:", error)
      }
    }

    const handleResize = () => setWindowWidth(window.innerWidth)

    fetchHeros()
    handleResize()
    window.addEventListener("resize", handleResize)
    setHasMounted(true)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!hasMounted) return null

  // If only one banner, repeat it 3 times to make Slick loop
  const bannersToRender =
    heroData.length === 1 ? Array(3).fill(heroData[0]) : heroData

  return (
    <div className="w-full md:p-5">
      <Slider {...settings}>
        {bannersToRender.map((banner, index) => (
          <div key={index} className="relative w-full">
            {windowWidth <= 600 ? (
              <img
                src={`${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}${banner.imageMobile.url}`}
                alt={banner.imageMobile.alt}
                className="w-full"
              />
            ) : (
              <img
                src={`${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}${banner.image.url}`}
                alt={banner.image.alt}
                className="w-full md:rounded-4xl"
              />
            )}
          </div>
        ))}
      </Slider>
    </div>
  )
}
