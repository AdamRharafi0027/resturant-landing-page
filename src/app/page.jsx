import ContactOrder from '@/components/ContactOrder/ContactOrder'
import DiscountBanner from '@/components/DiscountBanner/DiscountBanner'
import Header from '@/components/Header/Header'
import PopularDishes from '@/components/PopularDish/PopularDish'
import SpecialDeals from '@/components/SpecialDeals/SpecialDeals'
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton'
import Footer from '@/sections/Footer/Footer'
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
    {/* <WhatsAppButton />
    <ContactOrder /> */}
    {/* <Footer /> */}
    </>
  )
}

export default Home