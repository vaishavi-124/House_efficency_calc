// import React, { useRef }from 'react'
// import './Testimonials.css'


// import user2 from '../../components/assets/user2.jpeg'

// import user1 from '../../components/assets/user1.jpeg'

// import user3 from '../../components/assets/user3.jpeg'
// import user4 from '../../components/assets/user4.jpeg'
// import icon2 from '../../components/assets/icon2.png'
// import icon1 from '../../components/assets/icon1.png'


// const Testimonials = () => {

//   const slider=useRef(null);
//   let tx =0;

//   const slideForward=()=>{
//    if(tx>-50){
//     tx-=25;
//    }
//    console.log('slideForward',tx);
//    slider.current.style.transform ='translateX(${tx}%)';
//   };
//   const slideBackward=()=>{
//     if(tx<0){
//       tx+=25;
//      }
//      console.log('slideBackward',tx);
//      slider.current.style.transform ='translateX(${tx}%)';
//     };

//   return (
//     <div className='testimonials'>
//       <img src={icon1} alt=''className='next-btn' onClick={slideForward} />
//       <img src={icon2} alt='' className='back-btn' onClick= {slideBackward}/>
//       <div className='slider'>
//         <ul ref={slider}>
//           <li>
//             <div className='slide'>
//               <div className='user-info'>
//                 <img src={user1}
//                 alt='' />
//                 <div>
//                   <h3>william jackson</h3>
//                   <span>edusity,USA</span>
//                 </div>
//               </div>
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam culpa magni eaque, nesciunt labore explicabo aperiam provident, earum repellendus iste, deserunt at est molestiae ex nostrum impedit cum ullam perferendis.</p>
//             </div>
//           </li>

//           <li>
//             <div className='slide'>
//               <div className='user-info'>
//                 <img src={user2}
//                 alt='' />
//                 <div>
//                   <h3>william jackson</h3>
//                   <span>edusity,USA</span>
//                 </div>
//               </div>
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam culpa magni eaque, nesciunt labore explicabo aperiam provident, earum repellendus iste, deserunt at est molestiae ex nostrum impedit cum ullam perferendis.</p>
//             </div>
//           </li>


//           <li>
//             <div className="slide">
//               <div className="user-info">
//                 <img src={user3}
//                 alt="" />
//                 <div>
//                   <h3>william jackson</h3>
//                   <span>edusity,USA</span>
//                 </div>
//               </div>
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam culpa magni eaque, nesciunt labore explicabo aperiam provident, earum repellendus iste, deserunt at est molestiae ex nostrum impedit cum ullam perferendis.</p>
//             </div>
//           </li>


//           <li>
//             <div className="slide">
//               <div className="user-info">
//                 <img src={user4}
//                 alt="" />
//                 <div>
//                   <h3>william jackson</h3>
//                   <span>edusity,USA</span>
//                 </div>
//               </div>
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam culpa magni eaque, nesciunt labore explicabo aperiam provident, earum repellendus iste, deserunt at est molestiae ex nostrum impedit cum ullam perferendis.</p>
//             </div>
//           </li>


//         </ul>
//       </div>
//     </div>
//   )
// }

// export default Testimonials











// import React, { useRef, useState } from 'react';
// import './Testimonials.css';
// import user2 from '../../components/assets/user2.jpeg';
// import user1 from '../../components/assets/user1.jpeg';
// import user3 from '../../components/assets/user3.jpeg';
// import user4 from '../../components/assets/user4.jpeg';
// import icon2 from '../../components/assets/icon2.png';
// import icon1 from '../../components/assets/icon1.png';

// const Testimonials = () => {
//   const slider = useRef(null);
//   const [tx, setTx] = useState(0);

//   const slideForward = () => {
//     if (tx > -75) {
//       setTx(tx - 25);
//     }
//   };

//   const slideBackward = () => {
//     if (tx < 0) {
//       setTx(tx + 25);
//     }
//   };

//   return (
//     <div className='testimonials'>
//       <img src={icon1} alt='' className='next-btn' onClick={slideForward} />
//       <img src={icon2} alt='' className='back-btn' onClick={slideBackward} />
//       <div className='slider' style={{ transform: `translateX(${tx}%)` }} ref={slider}>
//         <ul>
//           <li>
//             <div className='slide'>
//               <div className='user-info'>
//                 <img src={user1} alt='' />
//                 <div>
//                   <h3>William Jackson</h3>
//                   <span>Edusity, USA</span>
//                 </div>
//               </div>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam culpa magni eaque, nesciunt labore
//                 explicabo aperiam provident, earum repellendus iste, deserunt at est molestiae ex nostrum impedit cum
//                 ullam perferendis.
//               </p>
//             </div>
//           </li>

//           <li>
//             <div className='slide'>
//               <div className='user-info'>
//                 <img src={user2} alt='' />
//                 <div>
//                   <h3>John Doe</h3>
//                   <span>Company, USA</span>
//                 </div>
//               </div>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam culpa magni eaque, nesciunt labore
//                 explicabo aperiam provident, earum repellendus iste, deserunt at est molestiae ex nostrum impedit cum
//                 ullam perferendis.
//               </p>
//             </div>
//           </li>

          

//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

















import React, { useState } from 'react';
import './Testimonials.css';
import user1 from '../../assets/user1.jpeg';
import user2 from '../../assets/user2.jpeg';
import user3 from '../../assets/user3.jpeg';
import user4 from '../../assets/user4.jpeg';

const Testimonials = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  const testimonials = [
    {
      name: 'William Jackson',
      role: 'Edusity, USA',
      image: user1,
      description:
        <p>"I've been looking for ways to make my home more energy-efficient, and stumbling upon this website was a game-changer. The energy efficiency calculator gave me a clear picture of where I'm currently at and what steps I can take to improve. It's straightforward and informative—a must-try for homeowners!"</p>
    },
    {
      name: 'John Doe',
      role: 'Company, USA',
      image: user2,
      description:
        <p>As someone who's passionate about sustainability, I found the home energy efficiency calculator provided on this website to be a valuable tool. It's user-friendly and provides detailed insights into energy consumption patterns, allowing me to make informed decisions about reducing my carbon footprint. Great initiative!</p>
    },
    {
      name: 'Jane Smith',
      role: 'Organization, Canada',
      image: user3,
      description:
        <p>"I recently used the home energy efficiency calculator on this website, and I must say it's incredibly useful! It helped me identify areas where I could improve energy efficiency in my home, ultimately saving me money on my utility bills. Highly recommend it!"</p>
    },
    {
      name: 'Alice Johnson',
      role: 'bussiness , from uk',
      image: user4,
      description:
        <p>"I'm always on the lookout for tools that can help me lower my energy bills, and this website's home energy efficiency calculator did not disappoint. It's comprehensive yet easy to use, providing actionable recommendations tailored to my specific needs. I've already started implementing some of the suggestions, and I can already see the difference in my utility bills. Thank you</p>
    },
  ];

  return (
    <div id='review_s' className='testimonials'>
      <h1 className='reviews-heading'>Reviews</h1>
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`testimonial ${selectedCard === index ? 'active' : ''}`}
          onClick={() => handleCardClick(index)}
        >
          <div className='testimonial-content'>
            <div className='front'>
              <img src={testimonial.image} alt={testimonial.name} className='user-img' />
              <div className='user-info'>
                <h3>{testimonial.name}</h3>
                <span>{testimonial.role}</span>
              </div>
            </div>
            <div className='back'>
              <p>{testimonial.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
