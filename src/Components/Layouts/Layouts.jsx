import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import navImg from '/Image/IMAGE.png'
import './Layouts.scss'

export default function Layouts() {
  return (
    <div className='Layouts'>
      <img className='Layouts__img' src={navImg} alt="navImg" />
        <Navbar/>
        <Outlet/>
    </div>
  )
}
