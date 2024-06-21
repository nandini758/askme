import React, { useEffect } from 'react';
import Navbar from './Navbar';
import './Home.css';
import SimpleSlider from './SimpleSlider';
import SecondSlider from './SecondSlider';
import Student from './Student';
import Footer from './Footer';

function Home() {
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.container2, .container3');
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    element.classList.add('animate');
                } else {
                    element.classList.remove('animate');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        // Trigger the scroll event on load to ensure elements are visible if already in view
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='root'>
            <Navbar />
            <div className="container1">
                <div className="container2">
                    <div className='container2-1'>
                        <h1>Master and <span>Safeguard digital identity</span></h1>
                        <p>We have established ourselves as a distinguished and widely recognized leader in the realm of identity and access management (IAM) training and consulting services. Our extensive array of courses covers a wide range of topics, including Ping Identity Consultant, Okta Workflows: Zero to Hero, Okta Professionals Primer, and Okta Specials: Complete HR As A Source</p>
                    </div>
                    <div className="container2-2">
                        <img src="background_image1.png" alt="Digital identity" />
                    </div>
                </div>
                <div className="container2">
                    <div className="para1">
                        <p className='para2'>Services & Offering</p>
                        <h1>Redefining Modern Identity Solutions and IT Security</h1>
                        <p className='para3'>At the heart of our offerings are cutting-edge IDAM (Identity and Access Management) Solutions, the foundation for accelerating digital transformation while prioritizing user experience. Our Managed IT Solutions encompass Digital Workspace and Cloud Services, optimizing business operations.</p>
                        <img src="background_image3.png" alt="" />
                    </div>
                    <div className="container2_r1">
                        <div>
                            <img src="loc.gif" alt="" />
                            <h2>IDAM Solutions</h2>
                        </div>
                        <div>
                            <img src="loc2.gif" alt="" />
                            <h2>Managed IT Services</h2>
                        </div>
                        <div>
                            <img src="loc3.gif" alt="" />
                            <h2>Application Development</h2>
                        </div>
                        <div className='can1'>
                            <img src="loc4.gif" alt="" />
                            <h2>Staff Augmentation</h2>
                        </div>
                        <div className='can2'>
                            <img src="loc5.gif" alt="" />
                            <h2>Training</h2>
                        </div>
                    </div>
                </div>
                <div className="container3">
                    <div className="container3_1">
                        <img src="image.jpg" alt="" />
                        <h2 className='relate'>Our Official Tech Partners</h2>
                        <p className='relate1'>Empowering IAM with cutting-edge innovation,</p>
                        <p className='relate2'>Our official tech partners redefine authentication precision</p>
                        <div className='tech-logo'>
                            <img src="https://assets-global.website-files.com/62cd14d1378c5d4fb293537e/62f1f63221554670c4d12fde_Okta_Partners_Logos-p-500.webp" alt="" />
                            <img src="https://www.miniorange.com/images/footer/miniorange-white.webp" alt="" />
                            <img src="miracl-white.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="container4">
                <div className="container4_l">
                   <p className='p1'>About us</p>
                   <p className='p2'>Orchestrating IAM Excellence: Leading Providers of Identity and Access Management Solutions</p>
                   <p className='p3'>Askmeidentity is a leading provider of identity and access management (IAM) training and consulting services. We offer a wide range of courses, including Ping Identity Consultant, Okta Workflows: Zero to Hero, Okta Professionals Primer, and Okta Specials: Complete HR As A Source. Our courses are designed to help you learn the skills you need to become a certified IAM professional or to implement and manage IAM solutions in your organization. <br />
                    Our courses are taught by experienced IAM professionals who have a deep understanding of the latest IAM technologies and best practices. We also offer hands-on exercises and labs so that you can practice what you learn in our courses.</p>
                </div>
                <div className="container4_r">
                <img src="image.png" alt="About us image" />
                </div>
             </div>
            <SimpleSlider/>
            <SecondSlider/>
            <Student/>
            
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
