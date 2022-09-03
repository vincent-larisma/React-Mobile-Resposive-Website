import React from 'react'

import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

//import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

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

{
  /* <Swiper modules={[Pagination]} spaceBetween={50} slidesPerView={1.5} pagination={{ clickable: true }}>
            <SwiperSlide>
              <div className='column'>
                <div className=' p-5'>
                  <div className='events-flex-container-items event-image-first mb-6'>
                    <img src={firstContent} alt='Event content' />

                    <button className='event-btn '>Get More Insight</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=' column  '>
                <div className=' p-5'>
                  <div className='events-flex-container-items event-image-second mb-6 '>
                    <img src={secondContent} alt='Event content' />

                    <button className='event-btn'>Get More Insight</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className=' column'>
                <div className='  p-5'>
                  <div className='events-flex-container-items event-image-third mb-6 '>
                    <img src={thirdContent} alt='Event content' />

                    <button className='event-btn'>Get More Insight</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper> */
}
