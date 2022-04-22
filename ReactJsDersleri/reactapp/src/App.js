import React, { Component } from 'react'
import './App.css'
import Bar from './components/bar/Bar'
import Users from './components/users/Users'

class App extends Component {
  state = {
    users : [
      {
        id : 1,
        name : "Mustafa Coşkun",
        salary : "5000",
        department : "Bilişim"
      },
      {
        id : 2,
        name : "Gamze Özçelik",
        salary : "4000",
        department : "Manager"
      },
      {
        id : 3,
        name : "Hüseyin Aksoy",
        salary : "2500",
        department : "Güvenlik"
      }
    ]
  }
  render() {
    return (
      <div className='container'>
        <Bar title="User App"/>
        <hr />
        <Users users={this.state.users}/>

      </div>
    )
  }
}
export default App;