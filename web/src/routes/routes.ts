import IRoute from 'interfaces/route';

import HomePage from 'pages/Home';
import LoginPage from 'pages/Login';
import FormPostPage from 'pages/FormPost';
import ShowPostPage from 'pages/ShowPost';
import Page404 from 'pages/Page404';

const routes: IRoute[] = [
  {
    icon: null,
    path: '/',
    name: 'home',
    component: HomePage,
    isPrivate: false,
    exact: true,
  },
  {
    icon: null,
    path: '/login',
    name: 'login',
    component: LoginPage,
    isPrivate: false,
    exact: true,
  },
  {
    icon: null,
    path: '/form-post',
    name: 'form post',
    component: FormPostPage,
    isPrivate: true,
    exact: false,
  },
  {
    icon: null,
    path: '/post/:postid',
    name: 'show post',
    component: ShowPostPage,
    isPrivate: true,
    exact: false,
  },
  {
    icon: null,
    path: '*',
    name: 'page404',
    component: Page404,
    isPrivate: false,
    exact: false,
  },
];

export default routes;
