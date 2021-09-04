import React from 'react'
import './home.css';
import { NavLink } from 'react-router-dom';
import homeImage from '../../images/hospitalBg2.PNG'
import Icon1 from '../../images/homeChannelDoctor.jpg';
import Icon2 from '../../images/homeLaboratory.jpg';
import Icon3 from '../../images/homeRadiology.jpg';
import { QuickLinksContainer, QuickLinksWrapper, QuickLinksCard, QuickLinksH2 } from './homeQLinksElements'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2 } from './homeServicesElements'

function Home() {
    return (
        <div className='home'>
            <h1>WELCOME TO MEDTOR</h1>
            <img class='homeImage' src={homeImage} alt="home image" />
            <div className='homeContent'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
                <div className='quickLinks'>
                    <QuickLinksContainer id='quicklinks'>
                        <QuickLinksWrapper>
                            <QuickLinksCard>
                                <QuickLinksH2>Emergency?</QuickLinksH2>
                                <button className='homeBtn1'>CALL AN AMBULANCE</button>
                            </QuickLinksCard>

                            <QuickLinksCard>
                                <QuickLinksH2>Protect yourself against covid-19</QuickLinksH2>
                                <button className='homeBtn1'>REGISTER FOR COVID-19 VACCINE</button>
                            </QuickLinksCard>
                        </QuickLinksWrapper>
                    </QuickLinksContainer>
                </div>
                <div className='homeServices'>
                    <ServicesContainer id='services'>
                        <ServicesH1>OUR SERVICES</ServicesH1>
                        <ServicesWrapper>
                            <ServicesCard>
                                <ServicesH2>Channel a Doctor</ServicesH2>
                                <ServicesIcon src={Icon1} />
                                <h4><NavLink to='#'>View</NavLink></h4>
                            </ServicesCard>

                            <ServicesCard>
                                <ServicesH2>Laboratory Services</ServicesH2>
                                <ServicesIcon src={Icon2} />
                                <h4><NavLink to='/'>View</NavLink></h4>
                            </ServicesCard>

                            <ServicesCard>
                                <ServicesH2>Radiology and Imaging Services</ServicesH2>
                                <ServicesIcon src={Icon3} />
                                <h4><NavLink to='/'>View</NavLink></h4>
                            </ServicesCard>
                        </ServicesWrapper>
                    </ServicesContainer>
                </div>
            </div>
        </div >
    );
}

export default Home;
