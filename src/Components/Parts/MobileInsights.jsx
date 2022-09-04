import React from 'react'
import Slider from './Slider'

//Pics
import Title from '../../imgs/Insights/Mobile/title.png'
import InsightOne from '../../imgs/Insights/Mobile/insightOne.png'
import InsightOneContent from '../../imgs/Insights/Mobile/Global Factor I.png'
import InsightTwo from '../../imgs/Insights/Mobile/insightTwo.png'
import InsightTwoContent from '../../imgs/Insights/Mobile/2019  Outlook.png'
import InsightThree from '../../imgs/Insights/three.png'
import InsightThreeContent from '../../imgs/Insights/ImageThree.png'

export default function MobileInsights() {
  return (
    <>
      <section className='grid-container mobile-insight-background-container pt-6'>
        <div className='grid-container-center pb-4'>
          <img src={Title} alt='content' />
        </div>
        <div className='grid-container-page-last '>
          <div className='grid-item-insights'>
            <Slider
              ContentOne={
                <div className='   card-one  '>
                  <div className='cards p-5'>
                    <img src={InsightOne} alt='Insights' />
                    <div className='content-size'>
                      <img src={InsightOneContent} alt='Insights' className='mb-1 card-size' />
                    </div>
                  </div>
                </div>
              }
              ContentTwo={
                <div className='  card-two '>
                  <div className='cards p-5'>
                    <img src={InsightTwo} alt='Insights' />
                    <div className='content-size-two'>
                      <img src={InsightTwoContent} alt='Insights' className='mb-1 card-size' />
                    </div>
                  </div>
                </div>
              }
              ContentThree={
                <div className='  card-three '>
                  <div className='cards p-5'>
                    <img src={InsightThree} alt='Insights' />
                    <div className='content-size'>
                      <img src={InsightThreeContent} alt='Insights' className='mb-1 card-size' />
                    </div>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </section>
    </>
  )
}
