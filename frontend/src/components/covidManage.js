import React from 'react';
import { NavLink } from 'react-router-dom';
import './covidManage.css';
import RegVac from '../images/RegVac.png';
import PatientList from '../images/PatientList.png';
import CalculateFee from '../images/CalculateFee.png';
import Generate from '../images/Generate.png';
import { CovidManageContainer, CovidManageH1, CovidManageWrapper, CovidManageCard, CovidManageIcon, CovidManageH2 } from './covidManageElements'


function CovidManage() {
    return (
        <div className="covidManage">
            <h3>COVID VACCINE MANAGEMENT</h3>

            <CovidManageContainer id='covidManage'>
            
                <CovidManageH1><h4>Select task to continue</h4></CovidManageH1>
                <CovidManageWrapper>
                    <CovidManageCard>
                    <div className="covidManage1">
                        <CovidManageH2>REGISTER FOR VACCINATION</CovidManageH2>
                        <CovidManageIcon src={RegVac} />
                        <h4><NavLink to='/register'>Continue</NavLink></h4></div>

                    </CovidManageCard>
                    <CovidManageCard>
                    <div className="covidManage2">
                        <CovidManageH2>VACCINATED PATIENTS'LIST</CovidManageH2>
                        <CovidManageIcon src={PatientList} />
                        <h4><NavLink to='/viewp'>Continue</NavLink></h4></div>

                    </CovidManageCard>
                    <CovidManageCard>
                    <div className="covidManage3">
                        <CovidManageH2>CALULATE VACCINE FEE</CovidManageH2>
                        <CovidManageIcon src={CalculateFee} />
                        <h4><NavLink to='/tfee'>Continue</NavLink></h4></div>

                    </CovidManageCard>
                    <CovidManageCard>
                    <div className="covidManage4">
                        <CovidManageH2>GENERATE PATIENTS' REPORT</CovidManageH2>
                        <CovidManageIcon src={Generate} />
                        <h4><NavLink to='/viewp'>Continue</NavLink></h4></div>

                    </CovidManageCard>
                   
                </CovidManageWrapper>
            </CovidManageContainer>


        </div>
    );
}

export default CovidManage;