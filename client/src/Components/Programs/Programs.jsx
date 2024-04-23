import React, { useState } from 'react';
import './Programs.css';
import program_1 from '../../assets/target_4-8820062.webp';
import program_2 from '../../assets/achievement-8820199.webp';
import program_3 from '../../assets/teamwork_2-8820597.webp';

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedProgramTitle, setSelectedProgramTitle] = useState('');

  // Function to open the modal with the provided description and title
  const openModal = (description, title) => {
    setSelectedProgram(description); // Set the selected program description
    setSelectedProgramTitle(title); // Set the selected program title
    document.body.classList.add('modal-open'); // Add class to disable scrolling
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProgram(null);
    setSelectedProgramTitle('');
    document.body.classList.remove('modal-open'); // Remove class to enable scrolling
  };

  return (
    <div className='programs'>
      <div className='program' onClick={() => openModal("The Essentials Training Program is a comprehensive and immersive learning experience designed to equip participants with the essential skills and knowledge necessary to excel in today's rapidly evolving professional landscape. This program covers a wide range of topics, including communication strategies, effective teamwork, problem-solving techniques, time management principles, and much more. Through a combination of interactive workshops, practical exercises, and real-world case studies, participants will gain valuable insights and hands-on experience that can be immediately applied in their professional and personal lives. Whether you're a recent graduate looking to jumpstart your career or a seasoned professional seeking to enhance your skill set, this program offers a dynamic and engaging learning environment that fosters growth, development, and success.", "Complete Digital Marketing Setup Program")}>
        <img src={program_1} alt="" />
        <div className="caption">
          <p>Complete Digital Marketing Setup Program</p>
        </div>
      </div>

      <div className='program' onClick={() => openModal("The Essentials Training Program offers a comprehensive introduction to fundamental concepts and skills essential for success in various fields. Covering topics ranging from communication and teamwork to problem-solving and time management, this program equips participants with the core competencies needed to thrive in today's dynamic professional landscape. Whether you're a recent graduate entering the workforce or a seasoned professional looking to enhance your skill set, this program provides invaluable training to help you excel in your career.", "Essentials Training Program")}>
        <img src={program_2} alt="" />
        <div className="caption">
          <p>Essentials Training Program</p>
        </div>
      </div>
      
      <div className='program' onClick={() => openModal("The Advanced Digital Marketing Strategy Consultation is designed for businesses seeking to elevate their online presence and maximize their digital marketing efforts. Tailored to meet the specific needs and goals of each client, this consultation provides expert guidance on developing and implementing advanced strategies to enhance brand visibility, drive targeted traffic, and increase conversion rates. From optimizing SEO techniques and leveraging data analytics to crafting compelling content and deploying sophisticated advertising campaigns, this consultation equips businesses with the tools and insights needed to achieve measurable results and stay ahead of the competition in today's competitive digital landscape.", "Advanced Digital Marketing Strategy Consultation")}>
        <img src={program_3} alt="" />
        <div className="caption">
          <p>Advanced Digital Marketing Strategy Consultation</p>
        </div>
      </div>

      <div className="modal" style={{ display: selectedProgram ? 'block' : 'none' }}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <div className="modal-header">
            <h2>{selectedProgramTitle}</h2>
          </div>
          <div className="modal-body">
            <p>{selectedProgram}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;




