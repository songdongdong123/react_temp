import asyncComponent from '../asyncComponent';
import NotFound from '../404';
const _import_views = file => asyncComponent(() => import(`../../pages/${file}`));

// 包含layout视图

export const layoutRouteMap = [
  {
    path: '/',
    name: 'home',
    exact: true,
    component: _import_views('home/index')
  }
]

// 不包含layout视图

export const noLayoutRouteMap = [
  {
    path: '/page2',
    name: 'home',
    component: _import_views('page2/index')
  },
  {
    path: '/page1',
    name: 'page1',
    component: _import_views('page1/index')
  },
  {
    path: '/404',
    name: '404',
    component: NotFound
  },
]