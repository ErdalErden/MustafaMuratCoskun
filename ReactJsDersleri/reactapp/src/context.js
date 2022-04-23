import React, { Component } from 'react'

const UserContext = React.createContext();

export class UserProvider extends Component {
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
        <UserContext.Provider value={this.state}>
            {this.props.children}
        </UserContext.Provider>
    )
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;


// Provider, Consumer
