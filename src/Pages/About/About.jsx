import React from 'react'
import author from '/Image/author.jpg'
import './About.scss'

export default function About() {
  return (
   <div className="About">
     <div className='conteiner'>
      <div className='About__section'>
         <div className="About__section-header">
          <div className='About__section-header-title'>
            <h2>Top <span>Lifetime ISAs</span> (LISAs)</h2>
            <h4>How they work, who they’re for and which provider pays the most</h4>
          </div>
         </div>
         <div className="About__section-author">
            <div className="About__section-author-edit">
              <img src={author} alt="author" />
              <div  className='About__section-author-edit-dsc'>
                <p><span>Benjamin Taylor</span> | Edited by <span>Hayk Voskanyan</span></p>
                <p>Updated 9 April 2024</p>
              </div>
              {/* <div className="About__section-author-edit-link">
                <i class="bi bi-facebook"></i>
                <i class="bi bi-twitter-x"></i>
                <i class="bi bi-envelope-fill"></i>
              </div> */}
            </div>
            <div className="About__section-author-story">
              <h2>What is a Lifetime ISA?</h2>
              <p>A Lifetime ISA (LISA) lets you save up to £4,000 every tax year towards a first home or your retirement, with the state adding a 25% bonus on top of what you save. That means you could get a chunky £1,000 of free cash annually. Plus you earn interest on whatever you save, and as it's an ISA, that interest is tax-free.</p>
              <span>- Who can open one? Those aged 18-39 – see full info below.</span>
              <p>- When can I use my cash and the bonus? Either when you buy your first home to use towards a deposit (see the LISA for first-time buyers). Or after you hit 60 (see the LISA for retirement). If you decide to use the LISA to help buy your first home, you can retain the account and keep saving in it for your retirement.</p>
              <p>You need to have had a LISA open for a year to be able to use it (and the government bonus) towards your first home.</p>
          </div>
          <div className="About__section-author-story">
              <h2>How a Lifetime ISA works</h2>
              <p>Here we've general need-to-knows about how Lifetime ISAs work. As well as reading these, it's also worth reading the need-to-knows about using the LISA as a first-time buyer, or using the LISA for retirement, depending on how you plan to use it.</p>
              <h3>You get a 25% bonus each tax year on up to £4,000</h3>
              <p>You get a 25% bonus each tax year on up to £4,000 You can save up to £4,000 a year in a LISA as a lump sum or by putting in cash when you can. The state will then add a 25% bonus on top. So if you save £1,000, you'll have £1,250 and if you save the full £4,000, you'll have £5,000. And that's before interest or growth.</p>
              <p>The bonus is paid every year you save something in to your LISA, until you hit age 50. The bonus is paid monthly (if you've contributed that month) and takes between four and nine weeks to arrive. You only get the bonus on contributions, not cash interest or investment growth. Once in your account the bonus is counted just like the rest of your savings, so you'll get interest on it too (or investment growth/loss). The maximum bonus is £33,000 if you open it at 18, and max it out until you hit 50 (unless you're born on 6 April, when the max is £32,000).</p>
          </div>
          </div>
      </div>
     
     </div>
   </div>
  )
}

