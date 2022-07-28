import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'E-commerce',
        icon: 'shopping-cart-outline',
        link: '/pages/dashboard',
        home: true,
    },
    {
        title: 'IoT Dashboard',
        icon: 'home-outline',
        link: '/pages/iot-dashboard',
    },
    {
        title: 'Филиалы',
        icon: 'home-outline',
        link: '/pages/branches',
    },
    {
        title: 'Информация',
        icon: 'person-outline',
        link: '/pages/about',
    },
    {
        title: 'Отчеты',
        icon: 'file-text-outline',
        link: '/pages/reports',
    },
    {
        title: 'Кошелек',
        icon: 'credit-card-outline',
        link: '/pages/wallet',
    },
];
