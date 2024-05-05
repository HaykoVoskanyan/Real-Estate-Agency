import React from 'react'
import dropSvg from '/Image/dropsImg.jpg'
import foundimg from '/Image/Found.png';
import joinimg from '/Image/Join.png';
import './Drops.scss'

export default function Drops() {
  return (
    <div className='Drops'>
      <div className="conteiner">
        <div className="Drops_title">
          <div className="Drops_title-dsc">
          <h2>Invest in your future with our Stocks and Shares ISA</h2>
          <p>It is quick and easy to open an account online.</p>
          </div>
        </div>
        <div className="Drops__section">
          <div className="Drops__section-dsc">
           <div className="Drops__section-dsc-left">
              <h3>Start saving into a Stocks and Shares ISA today</h3>
              <p className='Drops__first-p'>You can start with just £20 a month, or a £100 lump sum.</p>
              <p><i class="bi bi-check-circle-fill"></i>Two investment options designed to suit your needs</p>
              <p><i class="bi bi-check-circle-fill"></i>A team of experts actively managing award winning funds</p>
              <p><i class="bi bi-check-circle-fill"></i>Our online ISA account helps you to save, tax efficiently</p>
           </div>
           <img src={dropSvg} alt="Logo" />
          </div>
        </div>
        <div className="Drops__section-two">
          <h2>You have two ways to invest your ISA</h2>
          <p>If you're not sure about your options, we recommend you speak to a financial adviser. You can find one in your local area at Unbiased.</p>
          <div className="Drops__controll">
            <div className="Drops__section-two-dsc">
              <img src={foundimg} alt="found" />
              <h4>Simple Fund Choice</h4>
              <p>Based on your risk appetite, choose from five diversified funds and we'll do the rest.</p>
            </div>
            <div className="Drops__section-two-dsc2">
              <img src={joinimg} alt="join" />
              <h4>Self-Select Funds</h4>
              <p>Select one fund from our extended fund range. These may carry higher investment risks due to less diversification than the Simple Fund Choice option.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
