import React from 'react';
import { Trans } from 'react-i18next';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';



export const SidebarData = [
    {
        title: <Trans i18nKey="menus.home"></Trans>,
        path:  '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'side-text'
    },
    {
        title: <Trans i18nKey="menus.news"></Trans>,
        path:  '/News',
        icon: <IoIcons.IoIosPaper />,
        cName: 'side-text'
    },
    {
        title: <Trans i18nKey="menus.products"></Trans>,
        path:  '/Products',
        icon: <FaIcons.FaCartPlus />,
        cName: 'side-text'
    },
    {
        title: <Trans i18nKey="menus.about"></Trans>,
        path:  '/About',
        icon: <IoIcons.IoMdPeople />,
        cName: 'side-text'
    },
    {
        title: <Trans i18nKey="menus.contact"></Trans>,
        path:  '/Contact',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'side-text'
    },
]