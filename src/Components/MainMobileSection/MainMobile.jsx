import React from 'react'
import './MainMobile.scss'
import mob1 from '/Image/IMAGE4.png'
import mob2 from '/Image/IMAGE5.png'
import mob3 from '/Image/IMAGE6.png'
import mob4 from '/Image/IMAGE7.png'
import google from '/Icons/IMAGE1.svg'
import apple from '/Icons/IMAGE.svg'


export default function MainMobile() {
  return (
    <div className='MainMobile'>
        <div className="MainMobile__title">
          <h1>So how can Nude help you?</h1>
          <p>Here are some of the many things our app can do for you.</p>
        </div>
          <div className="MainMobile__card">
            <img src={mob1} alt="" />
             <div className="MainMobile__card-dsc">
              <h3>  Find out how much you need</h3>
              <p>Search any postcode in Britain and choose the type of property you want. Then, we use real-life house prices to show you how much you could need for your deposit.</p>
             </div>
          </div>
          <div className="MainMobile__card">
             <div className="MainMobile__card-dsc">
              <h3>  Find out how much you need</h3>
              <p>Search any postcode in Britain and choose the type of property you want. Then, we use real-life house prices to show you how much you could need for your deposit.</p>
             </div>
             <img src={mob2} alt="" />
          </div>
          <div className="MainMobile__card">
            <img src={mob3} alt="" />
             <div className="MainMobile__card-dsc">
              <h3>  Find out how much you need</h3>
              <p>Search any postcode in Britain and choose the type of property you want. Then, we use real-life house prices to show you how much you could need for your deposit.</p>
             </div>
          </div>
          <div className="MainMobile__card">
             <div className="MainMobile__card-dsc">
              <h3>  Find out how much you need</h3>
              <p>Search any postcode in Britain and choose the type of property you want. Then, we use real-life house prices to show you how much you could need for your deposit.</p>
             </div>
             <img src={mob4} alt="" />
          </div>
          <div className='Mobile__footer'>
            <h2>You’ll have the keys in no time</h2>
            <p>Install Nude today and start the countdown to buying your first place.</p>
            <div className='Mobile__footer-btn'>
              <a href="https://googlplay.com/">  <img className='google' src={google}  alt="google" /></a>
              <a href="https://apple.com/"><img className='apple' src={apple} alt="apple" /></a>
            </div>
          </div>
    </div>
  )
}
