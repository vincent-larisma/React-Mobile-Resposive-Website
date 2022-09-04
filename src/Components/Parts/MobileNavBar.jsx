import React, { useState } from 'react'
import Modal from './Modal/Modal'

//Pics
import CompanyLogo from '../../imgs/Nav/Mobile/Logo.png'
import HamburgerMenu from '../../imgs/Nav/Mobile/menu.png'
import HamburgerCancel from '../../imgs/Nav/Mobile/open/close icon.png'

export default function MobileNavBar() {
  const [modal, setModal] = useState(false)

  const handleClickToggleModal = () => {
    setModal(!modal)
  }
  return (
    <>
      {!modal && (
        <nav className='mobile-nav-flex-container'>
          <div></div>
          <div className='logo-flex-item'>
            <img src={CompanyLogo} alt='Company logo' />
          </div>
          <div className='menu-flex-item'>
            <img src={HamburgerMenu} alt='Hamburger Menu' onClick={handleClickToggleModal} />
          </div>
        </nav>
      )}
      {modal && (
        <>
          <nav className='mobile-nav-flex-container-open'>
            <div></div>
            <div className='logo-flex-item'>
              <img src={CompanyLogo} alt='Company logo' />
            </div>
            <div className='menu-flex-item'>
              <img src={HamburgerCancel} alt='Hamburger Menu' onClick={handleClickToggleModal} />
            </div>
          </nav>
          <Modal />
        </>
      )}
    </>
  )
}
