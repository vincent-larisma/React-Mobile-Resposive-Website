import React from 'react'
import Slider from './Slider'

//Pics
import Title from '../../imgs/EventsImage/Mobile/title.png'

export default function MobileEvents() {
  return (
    <>
      <section className='grid-container mobile-event-background-container py-6'>
        <div className='grid-container-center event-title-size pb-4'>
          <img src={Title} alt='content' />
        </div>
        <div className='grid-container-page-last '>
          <div className='grid-item-insights '>
            <Slider
              ContentOne={<div className='event-one'></div>}
              ContentTwo={<div className='event-two'></div>}
              ContentThree={<div className='event-three'></div>}
            />
          </div>
        </div>
      </section>
    </>
  )
}
