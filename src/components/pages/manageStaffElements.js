import styled from 'styled-components';

export const ManageStaffContainer = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    background: url("https://www.teahub.io/photos/full/164-1643331_purple-background-free-download.jpg") no-repeat center center fixed;
	background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 400px){
        height: 1300px;
    }
`
export const ManageStaffWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ManageStaffCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-width: 300px;
    max-height: 370px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0,2);
    transition: all 0.2s ease-in-out;

    &:hover{ 
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ManageStaffIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const ManageStaffH1 = styled.h1`
    font-size: 2.5rem;
    color: black;
    margin-bottom: 32px;

    @media screen and (max-width: 400px) {
        font-size: 2rem;
    }
`

export const ManageStaffH2 = styled.h2`
    font-weight:bold,
    font-size: 1rem;
    margin-bottom: 10px;
`