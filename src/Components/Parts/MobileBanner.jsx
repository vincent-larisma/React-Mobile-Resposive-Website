import React from 'react'

//Pics
import Content from '../../imgs/Banner/Mobile/content.png'

export default function MobileBanner() {
  return (
    <>
      <section className='grid-container mobile-banner-background-container pt-6'>
        <div className='grid-container-center'>
          <img src={Content} alt='content' />
        </div>
      </section>
    </>
  )
}
