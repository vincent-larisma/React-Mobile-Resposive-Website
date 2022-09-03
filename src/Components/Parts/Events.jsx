import React from 'react'

//Pics
import Title from '../../imgs/EventsImage/title.png'
export default function Events() {
  return (
    <>
      <div className='background-color pb-3'>
        <section className='columns pt-5'>
          <div className='column is-2'></div>
          <div className='column'>
            <img src={Title} alt='Title' />
          </div>
        </section>
        <section className='columns'>
          <div className='column is-2'></div>
          <div className='event-flex-container column'>
            <div className='p-5'>
              <div className='events-flex-container-items event-image-first mb-6'>
                <p className='is-size-6 has-text-white '>Insight Exchange Network</p>
                <p className='has-text-white '>Join us for this conference showcasing innovation.</p>
                <button className='event-btn '>Get More Insight</button>
              </div>
            </div>
          </div>
          <div className='event-flex-container column  '>
            <div className='p-5'>
              <div className='events-flex-container-items event-image-second mb-6 '>
                <p className='is-size-6 has-text-white '>Citywide Buyer’s Retreat</p>
                <p className='has-text-white '>
                  Find out how banks are responding to the changing future of interest...
                </p>
                <button className='event-btn'>Get More Insight</button>
              </div>
            </div>
          </div>
          <div className='event-flex-container column'>
            <div className=' p-5'>
              <div className='events-flex-container-items event-image-third mb-6 '>
                <p className='is-size-6 has-text-white '>Research Exchange</p>
                <p className='has-text-white '>Find the best online resources to help with your investments...</p>
                <button className='event-btn'>Get More Insight</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
