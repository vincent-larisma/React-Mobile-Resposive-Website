import React from 'react'

//Pics
import CompanyLogo from '../../imgs/Nav/Mobile/Logo.png'
import HamburgerMenu from '../../imgs/Nav/Mobile/menu.png'

export default function MobileNavBar() {
  return (
    <>
      <nav className='mobile-nav-flex-container'>
        <div></div>
        <div className='logo-flex-item'>
          <img src={CompanyLogo} alt='Company logo' />
        </div>
        <div className='menu-flex-item'>
          <img src={HamburgerMenu} alt='Hamburger Menu' />
        </div>
      </nav>
    </>
  )
}
