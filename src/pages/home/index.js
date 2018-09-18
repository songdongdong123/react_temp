import React from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom'
// import './index.styl'
@connect(
  state=>state.test
)
export default class Home extends React.Component {
  componentDidMount () {
    console.log(this.props)
  }
  render () {
    return (
      <div>
        <span className="icon-wenhao"></span>
        <p className="test">P{this.props.a}</p>
        <b>dddddd</b>
      </div>
    )
  }
}