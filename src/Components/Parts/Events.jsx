import React from 'react'

//Pics
import Title from '../../imgs/EventsImage/title.png'
import firstContent from '../../imgs/EventsImage/insights.png'
import secondContent from '../../imgs/EventsImage/city.png'
import thirdContent from '../../imgs/EventsImage/research.png'
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
          <div className='column'>
            <div className='events-flex-container-items event-image-first mb-6'>
              <img src={firstContent} alt='Event content' />

              <button className='event-btn '>Get More Insight</button>
            </div>
          </div>

          <div className=' column  '>
            <div className='events-flex-container-items event-image-second mb-6 '>
              <img src={secondContent} alt='Event content' />

              <button className='event-btn'>Get More Insight</button>
            </div>
          </div>

          <div className=' column'>
            <div className='events-flex-container-items event-image-third mb-6 '>
              <img src={thirdContent} alt='Event content' />

              <button className='event-btn'>Get More Insight</button>
            </div>
          </div>

          <div className='column is-2'></div>
        </section>
      </div>
    </>
  )
}
