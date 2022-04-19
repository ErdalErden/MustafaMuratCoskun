import React, { Component } from 'react'
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'


class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header/>
        <Navbar/>
      </div>
    )
  }
}
export default App;