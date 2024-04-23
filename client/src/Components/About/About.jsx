import React from 'react';
import './About.css';
import about_img from '../../assets/home-advertising.png';
import play_icon from '../../assets/play-icon.png';

const About = ({ setPlayState }) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={() => setPlayState(true)} />
      </div>
      <div className="about-right">
        <h3>About AD Solution</h3>
        
<h2> Elevating Brands, Engaging Audiences, and Driving Results!</h2>
<p>Welcome to AD Solution, where we specialize in crafting dynamic advertising solutions to help businesses thrive in the digital landscape. Our mission is simple: to elevate your brand, engage your audience, and drive measurable results through strategic marketing campaigns.</p>
      </div>
    </div>
  );
};

export default About;
