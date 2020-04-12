import {lazy} from 'react';
import {AndroidOutlined, AppleOutlined} from '@ant-design/icons';

export default [
    {
        index: true,
        path: '/',
        Component: lazy(() => import('./pages/Welcome')),
    },
    {
        title: '文章列表',
        path: '/article',
        IconComponent: AndroidOutlined,
        Component: lazy(() => import('./pages/Article')),
    },
    {
        title: '标签列表',
        path: '/label',
        IconComponent: AppleOutlined,
        Component: lazy(() => import('./pages/Label')),
    },
];
