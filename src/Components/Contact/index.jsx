import "./Contact.css"
import Pyramid from "../../ui/Pyramid"
import {contactInfo} from "../../data"
import SocialHandles from '../../ui/SocialHandles'
import {BsFillSendFill} from "react-icons/bs" 
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setStatus('');
  };

  const handleSubmit = () => {
  const { name, email, message } = formData;

  if (!name.trim() || !email.trim() || !message.trim()) {
    setStatus('❌ Please fill in all fields!');
    return;
  }

  setStatus('✅ Message sent successfully!');
  setFormData({ name: '', email: '', message: '' });
  setTimeout(() => {
    setStatus('');
  }, 2000);
};

  return (
    <section id='contact'>
      <div className="section__wrapper">
        <div className="pyramid__container">
          <Pyramid />
        </div>
        <div className="contact__group">
          <div>
            <h3 className="title">
              Let's talk on your <span className='shine'>
                great project</span>{" "}together
            </h3>
            <div className="flex contact__options">
              {contactInfo.map((contact,index) => (
                <article className='flex option' key={index} >
                  <div className="contact__icon">
                    <img src={contact.icon} alt="" />
                  </div>
                  <div className="flex contact__content">
                    <div>
                    <h3 className="name">{contact.name}</h3>
                    <p className="text__muted line__clamp__1 value">
                      {contact.value}
                    </p>
                    </div>
                    <a href={contact.link} target='_blank' className='flex__center btn'>
                      <span className='btn__shine text'>Message</span>
                      <div className="flex__center icon" style={{background: contact.color}}>{contact.btnIcon}</div>
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <SocialHandles />
          </div>
          <form>
  <input
    type='text'
    placeholder='Your full Name'
    name='name'
    value={formData.name}
    onChange={handleChange}
  />
  <input
    type='email'
    placeholder='Your email'
    name='email'
    value={formData.email}
    onChange={handleChange}
  />
  <textarea
    name='message'
    rows={7}
    placeholder='Your Message'
    value={formData.message}
    onChange={handleChange}
  ></textarea>
  <button
    type='button'
    className='btn flex__center submit__btn'
    onClick={handleSubmit}
  >
    <div className="icon"><BsFillSendFill /></div>
    <span>Send Now</span>
  </button>

  {status && <p className="status-message">{status}</p>}
</form>
        </div>
      </div>
    </section>
  )
}

export default Contact