import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./user.css"


class User extends Component {
  state = {
    isVisible : false
  }
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     isVisible: false
  //   }
  // }
  render() {
    //Destructing
    const {name,department,salary } = this.props;
    const {isVisible} = this.state;
    return (
      <div className='col-md-8 mb-4'>
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="d-inline">
              {name}
            </h4>
            <i className="far fa-trash-alt" style={{cursor:"pointer"}}></i>
          </div>
          {
            isVisible ?
          <div className="card-body">
            <p className="card-text">Maaş:{salary}</p>
            <p className="card-text">Departman:{department}</p>
          <p>{this.state.test}</p>
          </div>
          : null
          }
        </div>
      </div>
    )
  }
}

User.propTypes = {
  name : PropTypes.string.isRequired,
  department : PropTypes.string.isRequired,
  salary : PropTypes.string.isRequired
}

User.defaultProps = {
  name : "İsim bilgisi yok",
  department : "Departman bilgisi yok",
  salary : "Ücret bilgisi yok",
}

export default User;
