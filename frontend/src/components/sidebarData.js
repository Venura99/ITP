import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as ImIcons from 'react-icons/im';


export const SidebarData = [
    {
        title: 'Home',
        path: '/covidManage',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Patients',
        path: '/',
        icon: <ImIcons.ImManWoman />,
        cName: 'nav-text'
    },
    {
        title: 'Chanelling',
        path: '/',
        icon: <FaIcons.FaCalendarPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Staff',
        path: '/',
        icon: <ImIcons.ImUsers />,
        cName: 'nav-text'
    },
    {
        title: 'Laboratory',
        path: '/',
        icon: <ImIcons.ImLab />,
        cName: 'nav-text'
    },
    {
        title: 'Radiology and Imaging',
        path: '/',
        icon: <FaIcons.FaXRay />,
        cName: 'nav-text'
    },
    {
        title: 'Pharmacy',
        path: '/',
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
    }
];