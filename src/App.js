import React, { Component } from 'react'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
// import Content from './Content'
import ListStudent from './components/students/ListStudent'
import CreateStudent from './components/students/CreateStudent'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Menu/>
        {/* <Content/> */}
        {/* <ListStudent/> */}
        <CreateStudent/>
        <Footer/>
      </div>
    )
  }
}
