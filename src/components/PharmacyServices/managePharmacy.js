import React from 'react';
import { NavLink } from 'react-router-dom';
import './managePharmacy.css';
import addPharm from '../../images/addPharm.png';
import viewPharm from '../../images/viewPharm.jpg';
import generateEmp from '../../images/generateEmp.jpg';
import calcEmp from '../../images/calcEmp.png';
import { ManagePharmacyContainer, ManagePharmacyH1, ManagePharmacyWrapper, ManagePharmacyCard, ManagePharmacyIcon, ManagePharmacyH2 } from './managePharmacyElements'


function ManagePharmacy() {
    return (
        <div className="managePharmacy">
            <h3>HOSPITAL PHARMACY MANAGEMENT</h3>

            <ManagePharmacyContainer id='managePharmacy'>
                <ManagePharmacyH1>Select task to continue</ManagePharmacyH1>
                <ManagePharmacyWrapper>
                    <ManagePharmacyCard>
                        <ManagePharmacyH2>ADD NEW MADICINE</ManagePharmacyH2>
                        <ManagePharmacyIcon src={addPharm} />
                        <h4><NavLink to='/create'>Continue</NavLink></h4>

                    </ManagePharmacyCard>
                    <ManagePharmacyCard>
                        <ManagePharmacyH2>VIEW MADICINES</ManagePharmacyH2>
                        <ManagePharmacyIcon src={viewPharm} />
                        <h4><NavLink to='/madicines-list'>Continue</NavLink></h4>

                    </ManagePharmacyCard>
                    <ManagePharmacyCard>
                        <ManagePharmacyH2>ADD NEW PATIENT</ManagePharmacyH2>
                        <ManagePharmacyIcon src={calcEmp} />
                        <h4><NavLink to='/create-patient'>Continue</NavLink></h4>

                    </ManagePharmacyCard>
                    <ManagePharmacyCard>
                        <ManagePharmacyH2>GENERATE EMPLOYEE REPORT</ManagePharmacyH2>
                        <ManagePharmacyIcon src={generateEmp} />
                        <h4><NavLink to='/madicines-list'>Continue</NavLink></h4>

                    </ManagePharmacyCard>
                </ManagePharmacyWrapper>
            </ManagePharmacyContainer>


        </div>
    );
}

export default ManagePharmacy;