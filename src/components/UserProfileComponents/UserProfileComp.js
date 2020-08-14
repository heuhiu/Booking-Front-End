import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserProfile.css';
import Menu from '../Menu/Menu';
import Footer2 from '../Footer/Footer2/Footer2';
import testImg from '../../img/Detailpic.png';
import callApi from '../../config/utils/apiCaller'
import { showLoader, hideLoader } from '../../actions/index';


function FormError(props) {
    if (props.isHidden) { return null; }
    return (
        <div style={{ color: "red", position: 'absolute' }} className="form-warning">
            {props.errorMessage}
        </div>
    )
}
class UserProfileComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
        }
    }

    render() {   
        return (
          <div>IDK WHY THIS EXIST, BUT IF NOT IT WOULD'T WORKS</div>
      );
    }

}

// export default UserProfileComp;
const mapStateToProps = state => {
    return {
        loggedUser: state.User
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        showLoader: () => {
            dispatch(showLoader())
          },
          hideLoader: () => {
            dispatch(hideLoader())
          }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileComp);