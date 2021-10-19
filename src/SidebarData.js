import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';
import * as GiIcons from 'react-icons/gi';
import * as BiIcons from 'react-icons/bi';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
    {
        title: 'File',
        path: '/file',
        icon: <AiIcons.AiFillFile/>,
        cName: 'nav-text'
    }, 
    {
        title: 'Exams',
        path: '/exams',
        icon: <GiIcons.GiOpenBook/>,
        cName: 'nav-text'
    },
    {
        title: 'Records',
        path: '/records',
        icon: <FiIcons.FiPaperclip/>,
        cName: 'nav-text'
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <MdIcons.MdReport/>,
        cName: 'nav-text'
    },
    {
        title: 'Utilities',
        path: '/utilities',
        icon: <AiIcons.AiFillTool/>,
        cName: 'nav-text'
    },
    {
        title: 'Help',
        path: '/help',
        icon: <BiIcons.BiHelpCircle/>,
        cName: 'nav-text'
    },
];