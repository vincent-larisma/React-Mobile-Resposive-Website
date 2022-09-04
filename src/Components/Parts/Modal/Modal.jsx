import React from 'react'

//Pics
import Site from '../../../imgs/Footer/Mobile/site links.png'

import home from '../../../imgs/Footer/Mobile/home.png'
import about from '../../../imgs/Footer/Mobile/about us.png'
import insights from '../../../imgs/Footer/Mobile/insights.png'

import events from '../../../imgs/Footer/Mobile/events.png'

import contact from '../../../imgs/Footer/Mobile/contact.png'

export default function Modal() {
  return (
    <>
      <div className='Modal '>
        <div className='Overlay'></div>
        <div className='Modal-content grid-container pt-5 pb-6'>
          <div className='grid-container-center footer-link-centered pb-2'>
            <img src={Site} alt='Footer Content' />
          </div>
          <div className='grid-container-center footer-link-centered pb-2'>
            <img src={home} alt='Footer Content' />
          </div>
          <div className='grid-container-center footer-link-centered pb-2'>
            <img src={about} alt='Footer Content' />
          </div>
          <div className='grid-container-center footer-link-centered pb-2'>
            <img src={insights} alt='Footer Content' />
          </div>
          <div className='grid-container-center footer-link-centered pb-2'>
            <img src={events} alt='Footer Content' />
          </div>

          <div className='grid-container-center footer-link-centered pb-2'>
            <img src={contact} alt='Footer Content' />
          </div>
        </div>
      </div>
    </>
  )
}
