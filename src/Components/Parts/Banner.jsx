import React from 'react'

//Pics
import Content from '../../imgs/Banner/content.png'

export default function Banner() {
  return (
    <>
      <section className='banner-background-container columns'>
        <div className='content column'>
          <img src={Content} alt='Content' />
        </div>
        <div className='column'></div>
      </section>
    </>
  )
}
