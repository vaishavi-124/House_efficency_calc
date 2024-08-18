import React from 'react'
import './About.css'
import about_img from '../../assets/about_img.jpg'

const About = () => {
  return (
    <div>
      <div id="About_s" className="about">
        <div className="about-left">
            <img src={about_img} alt="" />

        </div>
        <div className="about-right">
            <h3>ABOUT ECALC</h3>
            <h2>Make your home more energy efficient</h2>
            <p>"Embracing energy efficiency within our homes is a pivotal step towards a brighter, more sustainable future. It's a journey that starts right at our doorsteps, where every improvement, from sealing drafts to upgrading appliances, contributes to a more efficient use of energy. Beyond the financial savings, which are significant, energy-efficient homes exemplify our commitment to environmental stewardship. They represent a conscious choice to reduce our carbon footprint, alleviate strain on natural resources, and mitigate the impacts of climate change. In this pursuit, we not only transform our living spaces into comfortable and eco-friendly havens but also inspire others to join us on this path towards a greener, more resilient world."</p>
            
        </div>
      </div>
    </div>
  )
}

export default About
