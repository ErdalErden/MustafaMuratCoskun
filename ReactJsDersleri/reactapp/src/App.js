import React, { Component } from 'react'
import './App.css'
import Bar from './components/bar/Bar'
import User from './components/user/User'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Bar title='Kullanıcı uygulaması'/>
        <User name="Mustafa Coşkun" salary="5000" department="Software"/>  
        <User name="Ahmet Aksoy" salary="3500" department="Security"/>  
      </div>
    )
  }
}
export default App;