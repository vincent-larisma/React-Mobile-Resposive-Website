import React from 'react'

//Pics
import Email from '../../imgs/Footer/email.png'
import Twitter from '../../imgs/Footer/twitter.png'
import Facebook from '../../imgs/Footer/facebook.png'
import LinkedIn from '../../imgs/Footer/linkedin.png'

export default function Footer() {
  return (
    <>
      <footer className='footer-background columns is-mobile'>
        <div className='column is-2'></div>
        <div className='column has-text-white'>
          <p>Call us at 111-222-333</p>
          <p>for more information</p>
        </div>
        <div className='column flex-icon-container has-text-white'>
          <p>Social Share</p>
          <a href='#'>
            <img src={Twitter} alt='Social Media Icon' />
          </a>
          <a href='#'>
            <img src={Facebook} alt='Social Media Icon' />
          </a>
          <a href='#'>
            <img src={LinkedIn} alt='Social Media Icon' />
          </a>
          <a href='#'>
            <img src={Email} alt='Social Media Icon' />
          </a>
        </div>
        <div className='column is-2'></div>
      </footer>
    </>
  )
}
