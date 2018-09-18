import React from 'react'
import Footer from '../components/footer/index'
import Header from '../components/header/index'
// import './index.styl'
export default class App extends React.Component {
  render () {
    return (
      <div>
        <Header/>
        <main>
            {this.props.children}
        </main>
        <Footer/>
      </div>
    )
  }
}
