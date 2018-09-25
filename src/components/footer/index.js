import React from 'react';
import { withRouter } from 'react-router-dom';
import './index.styl';

@withRouter
export default class Footer extends React.Component {
  state = {
    currentPathname: '/'
  }
  handelChange = (pathname) => {
    this.setState({
      currentPathname: pathname
    })
    this.props.history.push({
      pathname: pathname
    })
  }

  componentWillReceiveProps (nextProps) {
    // 处理路由切换上底部tab状态不同步的问题
    // console.log(nextProps.location.pathname, '*****')
    this.setState({
      currentPathname: nextProps.location.pathname
    })
  }
  render () {
    const navBar = [
      {
        name: '首页',
        pathname: '/'
      }, {
        name: '商城',
        pathname: '/shopmell'
      }, {
        name: '个人中心',
        pathname: '/usercenter'
      }
    ]
    return (
      <div className="footer">
        <ul>
          {
            navBar.map((v, index)=> {
              return (
                <li 
                  key={index} 
                  className={`${v.pathname===this.state.currentPathname?'active':''}`}
                  onClick={() => {
                    this.handelChange(v.pathname)
                  }}
                >{v.name}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}