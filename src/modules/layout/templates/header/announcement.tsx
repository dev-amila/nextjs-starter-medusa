"use client"

import { useEffect, useState } from "react"
import Slider from "react-slick"

import type { PromotionBanner } from "@lib/types/promotionBanner"

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 1000,
  slidesToShow: 1,
}

export const AnnouncemetBar = () => {
  const [promotions, setPromotions] = useState<PromotionBanner[]>([])

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/api/promotion-banners`)
        const data = await res.json()
        setPromotions(data.docs || [])
      } catch (error) {
        console.error("Failed to fetch promotion banners:", error)
      }
    }

    fetchPromotions()
  }, [])

  return (
    <div className="w-full bg-orange-500 text-gray-200 p-2 text-center">
      <Slider {...settings} className="container mx-auto">
        {promotions.map((banner, index) => (
          <p key={index} className="text-nowrap md:text-base text-sm">
            {banner.promotional}
          </p>
        ))}
      </Slider>
    </div>
  )
}
