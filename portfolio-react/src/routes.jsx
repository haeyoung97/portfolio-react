// Pages
import RootView from './component/Root.jsx';

export const routes = [
    {
        path: '/',
        exact: true,
        strict: false,
        component: RootView,
        title: '메인',
        single_yn: 'N'
    },
    {
        path: '/module',
        exact: true,
        strict: false,
        component: RootView,
        title: '로그인',
        single_yn: 'N'
    },
];

export default routes;
