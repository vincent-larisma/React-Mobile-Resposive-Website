import React from 'react'

//Pics
import Content from '../../imgs/Banner/content.png'

export default function Banner() {
  return (
    <>
      <section className='banner-background-container columns'>
        <div className='column is-2'></div>
        <div className='content column'>
          <img src={Content} alt='Content' className='content-image' />
        </div>
        <div className='column is-half'></div>
      </section>
    </>
  )
}
