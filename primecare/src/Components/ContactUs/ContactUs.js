import React from 'react'
import './ContactUs.css'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import m1 from './../../assets/m1.png'
import m2 from './../../assets/m2.png'
import m3 from './../../assets/m3.png'
import freebird from './../../assets/bird.png'

const ContactUs = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "20be7354-30cc-4211-b361-47c6e8ded2f6");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Ravens flew");
        event.target.reset();
      } else {
        console.log("Ravens are killed", data);
        setResult(data.message);
      }
    };
  
  return (
    <div className='contact' id='contactus'>
        <div className="contact-col">
            <h3>Summon a Dragon<div className='setalign'><WhatshotIcon/></div></h3>
            <p>the act of calling a dragon, often referred to as `summoning` or `bonding with` a dragon, is a unique ability primarily associated with House Targaryen.</p>
            <ul>
                <li><img src={m1} alt="" />trageryenTheGreatest@westerose.ws</li>
                <li><img src={m3} alt="" />3eyedRaven.bran</li>
                <li><img src={m2} alt="" />Dragonstone</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter your name' required/>
            
                <label>Email</label>
                <input type='text' name='email' placeholder='Email' required/>

                <label>Write your Message</label>
                <textarea name="message" rows="6" placeholder='Any thoughts about the king' required></textarea>

                <button type='submit' className='btn dark-btn'>Send The Ravens <img src={freebird} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default ContactUs
