import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {
    const [result, setResult] = useState("");
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/inquiries', formData);
            console.log("Response:", response.data);
            setResult("Form Submitted Successfully");
            
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            });
        } catch (error) {
            console.error("Error:", error);
            setResult("Error: Something went wrong. Please try again later.");
        }
    };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send Us a Message <img src={msg_icon} alt="" /></h3>
                <p>Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>

                <ul>
                    <li><img src={mail_icon} alt="" />Npidaoc@gmail.com</li>
                    <li><img src={phone_icon} alt="" />09663311609</li>
                    <li><img src={location_icon} alt="" />Baguio City</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>First Name</label>
                    <input type="text" name='firstName' placeholder='Enter your first name' value={formData.firstName} onChange={handleChange} required />

                    <label>Last Name</label>
                    <input type="text" name='lastName' placeholder='Enter your last name' value={formData.lastName} onChange={handleChange} required />

                    <label>Email</label>
                    <input type="email" name='email' placeholder='Enter your email' value={formData.email} onChange={handleChange} required />

                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your mobile number' value={formData.phone} onChange={handleChange} required />

                    <label>Write your message here</label>
                    <textarea name="message" rows="6" placeholder='Enter your message' value={formData.message} onChange={handleChange} required></textarea>

                    <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;
