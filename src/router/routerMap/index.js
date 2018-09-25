import asyncComponent from '../asyncComponent';
const _import_views = file => asyncComponent(() => import(`../../pages/${file}`));

// 包含layout视图

export const layoutRouteMap = [
  {
    path: '/',
    name: 'home',
    exact: true,
    component: _import_views('home/index')
  },
  {
    path: '/shopmell',
    name: 'home',
    exact: true,
    component: _import_views('shopmell/index')
  },
  {
    path: '/usercenter',
    name: 'home',
    exact: true,
    component: _import_views('usercenter/index')
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
    component: _import_views('noMatch/index')
  },
]