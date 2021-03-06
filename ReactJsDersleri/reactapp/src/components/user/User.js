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
  // constructor(props){
  //   super(props);
  //   this.onClickEvent = this.onClickEvent.bind(this);
  // }


  onClickEvent = (e) => {
    this.setState({
      isVisible : !this.state.isVisible
    })

  }
  onDeleteUser = (e) => {
    const {id} = this.props;
    // Consumer
  }
  render() {
    //Destructing
    const {name,department,salary } = this.props;
    const {isVisible} = this.state;
    return (
      <div className='col-md-8 mb-4'>
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="d-inline userListTitle" onClick={this.onClickEvent}>
              {name}
            </h4>
            <i onClick={this.onDeleteUser} className="far fa-trash-alt"></i>
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
  salary : PropTypes.string.isRequired,
}

User.defaultProps = {
  name : "İsim bilgisi yok",
  department : "Departman bilgisi yok",
  salary : "Ücret bilgisi yok",
}

export default User;
