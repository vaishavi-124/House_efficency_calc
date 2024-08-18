// import React from 'react'
// import './Navbar.css'
// import logo from '../../assets/logo2.png';              
// const Navbar = () => {
//   return (
//     <nav className='container dark-nav'>
//       <img src={logo} alt="Logo" className='logo' />
//       <ul>
//         <li>Home</li>
//         <li>Program</li>
//         <li>About Us</li>
//         <li>Calculator</li>
//         <li>Contact Us</li>
//       </ul>
     
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo2.png';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    if (activeSection) {
      const section = document.getElementById(activeSection);
      if (section) {
        const navbarHeight = document.querySelector('.dark-nav').offsetHeight; // Get height of navbar
        const sectionTop = section.offsetTop - navbarHeight; // Adjusted scroll position
        window.scrollTo({ top: sectionTop, behavior: 'smooth' });
      }
    }
  }, [activeSection]);
  

  const handleItemClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <nav className='container dark-nav'>
      <img src={logo} alt="Logo" className='logo' />
      <ul>
        <li onClick={() => handleItemClick('home')}>Home</li>
        
        <li onClick={() => handleItemClick('About_s')}>About Us</li>
        <li onClick={() => handleItemClick('calc_s')}>Calculator</li>
        <li onClick={() => handleItemClick('review_s')}>Reviews</li>
        <li onClick={() => handleItemClick('contact_s')}>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
