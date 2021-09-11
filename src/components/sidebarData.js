import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as ImIcons from 'react-icons/im';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Patients',
        path: '/managePatient',
        icon: <ImIcons.ImManWoman />,
        cName: 'nav-text'
    },
    {
        title: 'Chanelling',
        path: '/manageChannel',
        icon: <FaIcons.FaCalendarPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Staff',
        path: '/manageStaff',
        icon: <ImIcons.ImUsers />,
        cName: 'nav-text'
    },
    {
        title: 'Laboratory',
        path: '/manageLab',
        icon: <ImIcons.ImLab />,
        cName: 'nav-text'
    },
    {
        title: 'Radiology and Imaging',
        path: '/manageLab',
        icon: <FaIcons.FaXRay />,
        cName: 'nav-text'
    },
    {
        title: 'Covid-19 Vaccinations',
        path: '/CovidManage',
        icon: <GiIcons.GiLoveInjection />,
        cName: 'nav-text'
    },
    {
        title: 'Pharmacy',
        path: '/managePharmacy',
        icon: <AiIcons.AiFillMedicineBox />,
        cName: 'nav-text'
    },
    {
        title: 'Transport',
        path: '/',
        icon: <FaIcons.FaAmbulance />,
        cName: 'nav-text'
    },
    {
        title: 'Finances',
        path: '/',
        icon: <AiIcons.AiOutlineDollarCircle />,
        cName: 'nav-text'
    },
];