import React from 'react'
import Button from './Button'
const Header = () => {
  return (
    <>
    <nav className='navbar container pt-3 pb-3 align-items-start'>
      <a className='navbar-brand text-light' href="">stock prediction portal</a> 
      <div>
        <Button text='login' classname='btn-outline-info' />
        &nbsp;  
        <Button text='register' classname='btn-info' />
    
      </div> 
    </nav>
    </>
  )
}

export default Header
