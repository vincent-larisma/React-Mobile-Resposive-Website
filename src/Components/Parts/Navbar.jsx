import React from 'react'

//Pics
import SiteTitle from '../../imgs/Nav/site-title.png'
import CompanyLogo from '../../imgs/Nav/logo.png'

export default function Navbar() {
  return (
    <>
      <section className='background-nav columns'>
        <div className='column is-2 placeholder-div placeholder-one'></div>
        <div className='column is-1'>
          <div className='background-logo'>
            <img src={CompanyLogo} alt='Company Logo' className='company-logo' />
          </div>
        </div>
        <div className='column company-title is-2'>
          <img src={SiteTitle} className='company-title-img' alt='Site Title' />
        </div>
        <div className='column is-5 flex-list-container mt-5'>
          <div className='border-left'></div>
          <li>Home</li>
          <li>About us</li>
          <li>Insights</li>
          <li>Events</li>
          <li>Contact Us</li>
        </div>
        <div className='column is-2 placeholder-div placeholder-two'></div>
      </section>
      <div className='background-nav-bottom'></div>
    </>
  )
}
