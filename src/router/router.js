import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { layoutRouteMap, noLayoutRouteMap } from './routerMap/index';
import Loyout from './app'

const renderRouteComponent = routes => routes.map((route, index) => {
  return <Route key={index} {...route} />
});

const setTitle = ({location, history}) => {
  // 设置title
  // const pathname = location.pathname
  // console.log(pathname)
}

const NotLoyoutRouter = renderRouteComponent(noLayoutRouteMap);
const LoyoutRouter = renderRouteComponent(layoutRouteMap);

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route render={({location, history}) => {
          return (
            <Switch onEnter={setTitle({ location, history })}>
              {NotLoyoutRouter}
              <Loyout>
                <Switch>
                  {LoyoutRouter}
                  <Redirect from="*" to="/404" />
                </Switch>
              </Loyout>
            </Switch>
          )
        } } />
      </BrowserRouter>
    )
  }
}
export default Router