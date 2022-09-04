import React from 'react'

import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

//import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

export default function Slider({ ContentOne, ContentTwo, ContentThree }) {
  return (
    <>
      <Swiper modules={[Pagination]} spaceBetween={50} slidesPerView={1.4} pagination={{ clickable: true }}>
        <SwiperSlide>{ContentOne}</SwiperSlide>
        <SwiperSlide>{ContentTwo}</SwiperSlide>
        <SwiperSlide>{ContentThree}</SwiperSlide>
      </Swiper>
    </>
  )
}
