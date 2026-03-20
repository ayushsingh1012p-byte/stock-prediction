import React, { useContext } from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    isLoggedIn(false)
    navigate("/login")

  }
  return (
    <>
      <nav className='navbar container pt-3 pb-3 align-items-start'>
        <Link className='navbar-brand text-light' to="/">stock prediction portal</Link>

        {isLoggedIn ? (<button classname='btn-outline-danger' onClick={handleLogout}>logout</button>
        ) : (
          <>
            <Button text='login' classname='btn-outline-info' url='/login' />
            &nbsp;
            <Button text='register' classname='btn-info' url='/register' />

          </>)}


      </nav>
    </>
  )
}

export default Header
