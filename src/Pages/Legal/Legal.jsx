import React from 'react'
import logoisa from '/Image/logoisa.png'
import logofooter from '/Image/logo-footer.png'
import './Legal.scss'
import { NavLink } from 'react-router-dom'

export default function Legal() {
  return (
    <div className='Legal'>
      <div className="conteiner">
       <div className="Legal__menu">
        <img src={logoisa} alt="Logo" />
        <nav className='Legal__menu-nav'>
          <ul>
            <NavLink to='/report'>ISA Reports</NavLink>
            <NavLink to='/subscript'>Subscription</NavLink> 
            <NavLink to='service'>Advisory Services</NavLink> 
          </ul>
        </nav>
       </div>
       <h2>Legal information</h2>
       <div className="Legal__about">
        <div className="Legal__about-card">
          <h3>Terms of Use</h3>
          <p>By purchasing any ISA products of services, you are deemed to have entered into an agreement with ISA as outlined below. If you have entered into a separating agreement with ISA concerning your usage of ISA products or services, the terms of that agreement shall prevail if there is any inconsistency with the terms set out in the sections below.</p>
        </div>
        <div className="Legal__about-card">
          <h3>Permitted Uses</h3>
          <p>You may use ISA material for internal reports, notes and presentations on an irregular basis unless you have agreed upon regular usage with ISA in advance. All ISA materials must be cited as such in any form of usage. You may place ISA reports on an internal intranet or distribute copies of such reports via cd-rom or print only to individuals within your organization.</p>
        </div>
        <div className="Legal__about-card">
          <h3>Prohibited Uses</h3>
          <p>You may not distribute ISA materials to any party outside of your organization unless you are specifically authorized by ISA to do so. You may not reproduce or store ISA materials to any other web site, mailing list, bulletin board, newsgroup or other such system. You also may not systematically store in print or electronic all or any part of ISA materials.</p>
        </div>
        <div className="Legal__about-card">
          <h3>Protection of Intellectual Property</h3>
          <p>All contents, designs and materials distributed by ISA are the copyright of International Strategic Analysis L.L.C.. All rights are reserved. You may not use or reproduce or allow anyone to use or reproduce any trade marks without the written permission of ISA.</p>
        </div>
        <div className="Logal__about-card">
          <h3>Fees and Payments</h3>
          <p>Access to certain ISA materials is subject to a fee. All payments, including applicable taxes, must be fully paid when due.</p>
        </div>
        <div className="Legal__about-card">
          <h3>No Warranty, Disclaimer of Liability and Indemnity</h3>
          <p>ISA has made every effort to ensure the accuracy and reliability of the information in ISA's reports, advisory services and on the web site. Nevertheless, ISA makes no warranty, express or implied, concerning this information and ISA disclaims all warranties. In no event will ISA be liable for direct or indirect damages arising from the use of ISA materials. This includes business losses, business interruption or loss of information. ISA does not guarantee the content, timeliness or accuracy of the information in its materials and services. You agree to defend, indemnify and hold harmless ISA from any claims and expenses, including legal fees, related to any breach of this agreement by you or any breach of this agreement by your use of ISA materials or services.</p>
        </div>
       </div>
       <div className='Legal__footer'>
        <div className='Legal__footer-touch'>Get It Touch</div>
        <p className='first__p'><img src={logofooter} alt="logofooter" /> International State Analitic</p>
        <p className='second__p'>ISA (International Strategic Analysis) is one of the world’s leading providers of international market analysis, economic forecasting and country intelligence for many of the world's leading companies, organizations and governments, with clients in more than 115 countries.</p>
        <NavLink to='/about'>VIEW MORE ...</NavLink>       
       </div>
      </div>
    </div>
  )
}
