import React from 'react'
import MobileNavBar from '../Parts/MobileNavBar'
import MobileBanner from '../Parts/MobileBanner'
import MobileInsights from '../Parts/MobileInsights'
import MobileWhoWeAre from '../Parts/MobileWhoWeAre'
import MobileEvents from '../Parts/MobileEvents'
import Footer from '../Parts/Footer'

export default function HomePageMobile() {
  return (
    <>
      <MobileNavBar />
      <MobileBanner />
      <MobileInsights />
      <MobileWhoWeAre />
      <MobileEvents />
    </>
  )
}
