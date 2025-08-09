import ContactOrder from '@/components/ContactOrder/ContactOrder'
import DiscountBanner from '@/components/DiscountBanner/DiscountBanner'
import Header from '@/components/Header/Header'
import PopularDishes from '@/components/PopularDish/PopularDish'
import SpecialDeals from '@/components/SpecialDeals/SpecialDeals'
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton'
import Footer from '@/page/Footer/Footer'
import Hero from '@/page/Hero/Hero'
import Menu from '@/page/Menu/Menu'
import OurLocations from '@/page/OurLocations/OurLocations'

import React from 'react'

const Home = () => {
  return (
    <>
      <Header />
    <Hero />
    <PopularDishes />
    <Menu />
    <SpecialDeals />
    <DiscountBanner />
    <OurLocations />
    <WhatsAppButton />
    <ContactOrder />
    <Footer />
    </>
  )
}

export default Home