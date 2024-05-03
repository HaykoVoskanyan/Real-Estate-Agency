import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.scss'

export default function Navbar() {
  return (
    <div className='Navbar'>
        <nav className='conteiner'>
            <ul className='Navbar__nav-ul'>
              <li>
                 <NavLink to='/' className='logo'> Nude </NavLink>
              </li>
              <li className='Navbar__a'>
                <NavLink to='/about'> About </NavLink>
                <NavLink to='/legal'> Legal</NavLink>
                <NavLink to='/drops'> Drops </NavLink>
                <NavLink to='/connect'> Connect </NavLink>
              </li>
            </ul>
        </nav>
    </div>
  )
}
