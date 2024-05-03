import React from 'react'
import footerWave from '/Image/IMAGE8.png'
import './MainBuyers.scss'


export default function MainBuyers() {
  return (
     <div className='MainBuyers'>
        <img src={footerWave} alt="Wave" />
        <div className='MainBuyers__title'>
            <span>A place to grow your first home fund</span>
            <h2>Accounts for first-time home buyers</h2>
        </div>

    </div>
  )
}
