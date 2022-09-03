import React from 'react'

export default function WhoWeAre() {
  return (
    <>
      <section className='columns aboutus-background-container flex-container-aboutus'>
        <div className='column is-2 placeholder-div'></div>
        <div className='column has-text-centered'>
          <h1 className='title has-text-white title-font-size'>Our Commitment to Professionals</h1>
          <p className='content has-text-white paragraph-font-size'>
            We help our partners deliver industry leading results with a commitment to excellence, thought-provoking
            insights and experienced distribution. We are laser focused on our shared goal – helping clients achieve
            their objectives.
          </p>
          <button className='contact-us-btn'>Contact Us</button>
        </div>

        <div className='column is-2 placeholder-div'></div>
      </section>
    </>
  )
}
