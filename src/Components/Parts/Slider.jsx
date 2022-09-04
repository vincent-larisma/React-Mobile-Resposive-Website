import React from 'react'

import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

//import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

export default function Slider() {
  return (
    <>
      <Swiper modules={[Pagination]} spaceBetween={50} slidesPerView={3} pagination={{ clickable: true }}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  )
}
