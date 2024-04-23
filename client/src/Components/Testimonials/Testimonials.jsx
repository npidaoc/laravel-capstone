import React, {useRef} from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}


  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className="users-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Anna Marie</h3>
                                <span>Baguio City</span>
                            </div>
                        </div>
                        <p>This advertising solution transformed my small business. With targeted ads and expert guidance, I saw a significant increase in website traffic and sales. Their personalized approach and attention to detail set them apart. Highly recommend for businesses seeking to boost their online presence.</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="users-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Theodore</h3>
                                <span>Frostfall Ridge</span>
                            </div>
                        </div>
                        <p>This advertising solution exceeded my expectations. Its comprehensive tools and analytics helped us optimize ad spend and refine targeting strategies. Invaluable insights led to efficient marketing goals achievement. Impressed and looking forward to continued success. </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="users-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Isabella 3</h3>
                                <span> Rosewood Manor</span>
                            </div>
                        </div>
                        <p>After struggling with other platforms, this advertising solution proved a game-changer. User-friendly interface, advanced targeting, and expert support led to a significant increase in conversions and revenue. Extremely satisfied with the results!</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="users-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3> Finn 4</h3>
                                <span>Evergreen Valley</span>
                            </div>
                        </div>
                        <p>Finding an affordable yet effective advertising solution was crucial. Thankfully, this platform offered flexible pricing and an intuitive dashboard. With their assistance, I've grown my business without breaking the bank. Highly recommend to fellow entrepreneurs.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials