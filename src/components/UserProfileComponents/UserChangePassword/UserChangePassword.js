import React, { Component } from 'react';
import { connect } from 'react-redux';
import testImg from '../../../img/Detailpic.png'

function FormError(props) {
    if (props.isHidden) { return null; }
    return (
        <div style={{ color: "red", position: 'absolute' }} className="form-warning">
            {props.errorMessage}
        </div>
    )
}

class UserChangePassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: {
                value: '',
                isInputValid: false,
                errorMessage: ''
            },
            lastName: {
                value: '',
                isInputValid: false,
                errorMessage: ''
            },
            phoneNumb: {
                value: '',
                isInputValid: false,
                errorMessage: ''
            },
            email: {
                value: '',
                isInputValid: false,
                errorMessage: ''
            }
        }
    }

    render() {
        const {loggedUser} = this.props;
        return (
            <div
                className="col">
                <div className="rightBoxUserDetail">
                    <div style={{ padding: "30px" }} >
                        <div className="row">
                            <div className="col-6">
                                <div id="inline">
                                    <div className="bulletListCustome"></div>
                                    <div className="content">Đổi mật khẩu</div>
                                </div>
                            </div>

                            <div className="col-6">
                                <div onClick={this.triggerUpdateUserPart} className="UpdateDetail1" >Chỉnh sửa</div>
                            </div>
                        </div>

                        <div className="mrt-30 col-12">
                                    <div className="row">
                                        {/* <div className="col">
                                                                <label>Họ</label>
                                                                <input type="text" disabled value={loggedUser.lastName} className="inputPayment form-control"
                                                                    placeholder="Họ" />

                                                            </div> */}
                                        <div className="col-6">
                                            <div className="wrap-input100">
                                                <input
                                                    className="input100"
                                                    // ref={(input) => { this.mailInput = input; }}
                                                    type="text"
                                                    name="lastName"
                                                    onChange={this.handleInput}
                                                    onBlur={this.handleInputValidation}
                                                    required

                                                />
                                                <span className="focus-input100"></span>
                                                <span className="label-input100">Mật khẩu cũ</span>
                                            </div>
                                            <FormError
                                                type="lastName"
                                                isHidden={this.state.lastName.isInputValid}
                                                errorMessage={this.state.lastName.errorMessage} />
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="mrt-30 col-12">
                                    <div className="row">
                                        {/* <div className="col">
                                                                <label>Số điện thoại</label>
                                                                <input type="number"
                                                                    disabled
                                                                    value={loggedUser.phoneNumber}
                                                                    className="inputPayment form-control" />
                                                            </div> */}
                                        <div className="col">
                                            <div className="wrap-input100">
                                                <input
                                                    className="input100"
                                                    ref={(input) => { this.mailInput = input; }}
                                                    type="text"
                                                    name="phoneNumb"
                                                    onChange={this.handleInput}
                                                    onBlur={this.handleInputValidation}
                                                    required

                                                />
                                                <span className="focus-input100"></span>
                                                <span className="label-input100">Mật khẩu mới</span>
                                            </div>
                                            <FormError
                                                type="phoneNumb"
                                                isHidden={this.state.phoneNumb.isInputValid}
                                                errorMessage={this.state.phoneNumb.errorMessage} />
                                        </div>
                                        {/* <div className="col">
                                                                <label>Địa chỉ Email</label>
                                                                <input type="text"
                                                                    disabled
                                                                    value={loggedUser.mail}
                                                                    className="inputPayment form-control" placeholder="Email" />
                                                            </div> */}
                                        <div className="col">
                                            <div className="wrap-input100">
                                                <input
                                                    className="input100"
                                                    ref={(input) => { this.mailInput = input; }}
                                                    type="text"
                                                    name="email"
                                                    onChange={this.handleInput}
                                                    onBlur={this.handleInputValidation}
                                                    required
                                                />
                                                <span className="focus-input100"></span>
                                                <span className="label-input100">Nhập lại mật khẩu mới</span>
                                            </div>
                                            <FormError
                                                type="email"
                                                isHidden={this.state.email.isInputValid}
                                                errorMessage={this.state.email.errorMessage} />
                                        </div>
                                    </div>
                                </div>

                                <div className="pdt-30 col-12">
                                    <div className="row">
                                        <div className="col">
                                        </div>
                                        <div className="col">
                                            <button onClick={this.updateUserDetail} className="proceedPaymentBtn">Lưu thông tin</button>
                                        </div>
                                    </div>
                                </div>
                           
                    </div>

                </div>
               
            </div>

        );
    }

}

// export default UserInformation;
const mapStateToProps = state => {
    return {
        loggedUser: state.User
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserChangePassword);