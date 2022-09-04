import React from 'react'

//Pics
import Title from '../../imgs/Footer/Mobile/top bar.png'
import Site from '../../imgs/Footer/Mobile/site links.png'
import Policy from '../../imgs/Footer/Mobile/Policy.png'
import Terms from '../../imgs/Footer/Mobile/Terms.png'
import home from '../../imgs/Footer/Mobile/home.png'
import about from '../../imgs/Footer/Mobile/about us.png'
import insights from '../../imgs/Footer/Mobile/insights.png'

import events from '../../imgs/Footer/Mobile/events.png'

import diligence from '../../imgs/Footer/Mobile/diligence.png'

import contact from '../../imgs/Footer/Mobile/contact.png'

export default function MobileFooter() {
  return (
    <>
      <footer className='grid-container'>
        <div className='grid-container-full-width footer-logo-bg '>
          <img src={Title} alt='Footer Content' />
        </div>

        <div className='grid-container-center footer-link-centered py-5'>
          <div>
            <img src={Policy} alt='Footer Content footer-link-centered ' />
          </div>
          <div>
            <img src={Terms} alt='Footer Content footer-link-centered ' />
          </div>
        </div>
        <div className='grid-container-center footer-link-centered pb-3'>
          <img src={Site} alt='Footer Content' />
        </div>
        <div className='grid-container-center footer-link-centered pb-3'>
          <img src={home} alt='Footer Content' />
        </div>
        <div className='grid-container-center footer-link-centered pb-3'>
          <img src={about} alt='Footer Content' />
        </div>
        <div className='grid-container-center footer-link-centered pb-3'>
          <img src={insights} alt='Footer Content' />
        </div>
        <div className='grid-container-center footer-link-centered pb-3'>
          <img src={events} alt='Footer Content' />
        </div>
        <div className='grid-container-center footer-link-centered pb-3'>
          <img src={diligence} alt='Footer Content' />
        </div>
        <div className='grid-container-center footer-link-centered pb-3'>
          <img src={contact} alt='Footer Content' />
        </div>
      </footer>
    </>
  )
}
