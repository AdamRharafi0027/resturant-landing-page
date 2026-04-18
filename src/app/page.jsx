import DiscountBanner from '@/components/DiscountBanner/DiscountBanner'
import PopularDishes from '@/components/PopularDish/PopularDish'
import SpecialDeals from '@/components/SpecialDeals/SpecialDeals'
import Hero from '@/sections/Hero/Hero'
import MenuSection from '@/sections/MenuSection/MenuSection'
import OurLocations from '@/sections/OurLocations/OurLocations'
import React from 'react'

const Home = () => {
  return (
    <>
  
    <Hero />
    <PopularDishes />
    <MenuSection />
    <SpecialDeals />
    <DiscountBanner />
    <OurLocations />
   
    </>
  )
}

export default Home