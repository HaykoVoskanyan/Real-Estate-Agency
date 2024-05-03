import React from 'react'
import './MainFooter.scss'
import hi from '/Icons/hi.svg'

export default function MainFooter() {
  return (
    <div className='MainFooter'>
      <div className="MainFooter__dsc">
        <h4>Hey, here are some important things you should know  <img src={hi} alt="Hi" /></h4>
        <span>Our investing products (e.g. Nude Stocks & Shares LISA and ISA)</span>
        <p>
          If you open a Nude Stocks & Shares Lifetime ISA, it’s important that you know the value of your investment 
          could go up as well as down. You could get back less than you put in, which means it would take you longer to buy your 
          first home. Past performance is not necessarily a guide to the future and investing is not intended to be a short-term option. We can’t and don’t provide financial advice so please be sure that investment risk is right for you.
        </p>
        <span>Our LISA and ISA </span>
        <p>The 25% bonus and tax-free benefits of these accounts depend on government policy and tax rules, which can change at any time.</p>
        <span>Market-leading interest rate </span>
        <p>The term market-leading interest rate is based on our research as at 03/11/2022.</p>
      </div>
      <div className="MainFooter__finish">
        <span>Copyright © Nude Finance Limited - 2022. All rights reserved.</span>
        <p>Nude is a trading name of Nude Finance Limited, which is authorised and regulated by the Financial Conduct Authority (FRN: 928010) and registered as an account information services provider (FRN: 913654). We are a private limited company registered at c/o CMS Cameron Mckenna, Cannon Place, 78 Cannon Street, London EC4N 6AF, with registration number 12008146. Nude is a registered trade mark of Nude Finance Limited (12008146) (TM Reg No UK00003263387).
            We use cookies on this site — some are for statistics and others are set up by third-party services. You can read all about them in ourcookie policy
            If you accept or dismiss this banner, click on a link or button, or just keep browsing 
            as normal, you automatically accept the cookie policy. If you’d rather not, hit decline or close this tab.
        </p>
      </div>
    </div>
  )
}
