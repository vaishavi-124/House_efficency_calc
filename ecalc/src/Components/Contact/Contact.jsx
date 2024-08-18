import React from 'react';
import './Contact.css';
import email_icon from '../../assets/email_icon.png'
import loc_icon from '../../assets/loc_icon.png'
import phone_icon from '../../assets/phone_icon.png'

function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "efad6f89-e07d-4961-8791-6d80687755cd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  return (
    <div>
      <div id='contact_s' className="contact">
        <div className="contact-col">
          <h3>Send us a message</h3>
          <p>Feel free to reach out to us using the form below or visit our office during business hours.</p>
          <p>Our website provides offline services to check the house efficiency. If you are interested in scheduling a consultation or have any questions, please fill out the form below. We'll get back to you as soon as possible.</p>
          <ul>
              <li><img src={email_icon} alt="" />Contact@ECalc</li>
              <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
              <li><img src={loc_icon} alt="" />89 Colaba , Mumbai <br />India</li>
          </ul>
        </div>
        <div className="contact-col">
          {/* <h1>Contact Us</h1> */}
          <form onSubmit={onSubmit} >
            <label>Your Name</label>
            <input type="text" name="name" required placeholder="Enter Your Name" />
            <label>Email</label>
            <input type="email" name="email" required placeholder="Enter your Email" />
            <label>Phone Number</label>
            <input type="text" name="subject" required placeholder="Enter Your Phone no" />
            <label>Your Addrerss</label>
            <input type="text" name="address" required placeholder="Enter Your Address" />
            <label>Write the Requirements </label>
            <textarea name="msg" rows="6" placeholder=" Message" required></textarea>
          
            {/* <input type="hidden" name="_cc" value="another@email.com,yetanother@email.com" /> */}
            <button type="submit" className='btn dark-btn'>Submit</button>
          </form>
          <span>{result}</span>
        </div>
      </div>
      <footer className="footer">
        <p>© 2024 ECalculator. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Contact;
