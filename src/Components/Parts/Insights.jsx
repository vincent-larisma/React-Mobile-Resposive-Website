import React from 'react'

//Pics
import InsightOne from '../../imgs/Insights/one.png'
import InsightOneContent from '../../imgs/Insights/ImageOne.png'
import InsightTwo from '../../imgs/Insights/two.png'
import InsightTwoContent from '../../imgs/Insights/ImageTwo.png'
import InsightThree from '../../imgs/Insights/three.png'
import InsightThreeContent from '../../imgs/Insights/ImageThree.png'
import Title from '../../imgs/Insights/title.png'

export default function Insights() {
  return (
    <>
      <div className='background-color pb-6  '>
        <section className='columns pt-5'>
          <div className='column is-2'></div>
          <div className='column'>
            <img src={Title} alt='Title' />
          </div>
        </section>
        <section className='columns '>
          <div className='column is-2'></div>
          <div className='column   card-one  '>
            <div className='cards p-5'>
              <figure className='image is-4by3 mb-6'>
                <img src={InsightOne} alt='Insights' />
              </figure>
              <img src={InsightOneContent} alt='Insights' className='mb-1 card-size' />
            </div>
          </div>
          <div className='column  card-two '>
            <div className='cards p-5'>
              <figure className='image is-4by3 mb-6'>
                <img src={InsightTwo} alt='Insights' />
              </figure>
              <img src={InsightTwoContent} alt='Insights' className='mb-1 card-size' />
            </div>
          </div>
          <div className='column  card-three '>
            <div className='cards p-5'>
              <figure className='image is-4by3 mb-6'>
                <img src={InsightThree} alt='Insights' />
              </figure>
              <img src={InsightThreeContent} alt='Insights' className='mb-1 card-size' />
            </div>
          </div>

          <div className='column is-2 '></div>
        </section>
      </div>
    </>
  )
}
