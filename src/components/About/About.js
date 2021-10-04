import React from 'react';
import './About.css';

const About = () => {
    const aboutBanner = 'https://media.smallbiztrends.com/2019/04/About-Us.png';
    return (
        <div>
            <img src={aboutBanner} alt="" />
            <div className='about'>
                <h2>Our Mission</h2>
                <p>E-learning refers to a learning system that we can obtain through the internet using an electronic device. We also call it online learning or online education. The ‘E’ in E-learning stands for ‘Electronic.’ Hence, the original term ‘electronic learning.’

                    The word ‘online,’ in this context, means with an Internet connection or via the Internet.

                    The term may also refer to a network that can provide knowledge and skills to one or more individuals. These networks are created by eLearning website builders (who are in charge of helping create personal teaching platforms to people without tech knowledge), e.g. Uteach

                    The network can provide the knowledge or skills either to everyone simultaneously or individually.

                    ALLENCOMM says the following regarding the term:

                    “E-learning is training provided via a computer or other digital device, allowing technology to facilitate learning anytime, anywhere.”</p>

                <h2>Our Vision</h2>
                <p>People can do an online course via a wide variety of different platforms, such as:

                    MOOCs (Massive Online Open Courses), e.g. Coursera or Futurelearn.
                    Virtual learning environment (VLE), such as Learn or Blackboard.
                    Video streaming services, such as YouTube.
                    Virtual instructor-led training (VILT), e.g. WebEx or webinars.
                    Discussion boards.
                    Forums.
                    Podcasts.
                    MOOCs stands for Massive Online Open Courses. They are free online programs that several colleges offer. Even some of the world’s most famous and prestigious universities use them.

                    Some programs allow you to pay for the certification of the course. These courses can count as college credits, while others have value in the job market.</p>
            </div>
        </div>
    );
};

export default About;