import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import testImg from '../../img/Detailpic.png'
import callApi from '../../config/utils/apiCaller';
import { showLoader, hideLoader, getUserLogin } from '../../actions/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const menus = [
    {
        name: 'Hồ sơ của tôi',
        to: '/userProfile/myProfile',
        exact: true,
        mark: 1
    },
    {
        name: 'Chỉnh sửa hồ sơ',
        to: '/userProfile/ediProfile',
        exact: true,
        mark: 2
    },
    {
        name: 'Đặt chỗ của tôi',
        to: '/userProfile/myOrders',
        exact: false,
        mark: 3
    },
    {
        name: 'Đổi mật khẩu',
        to: '/userProfile/changePassword',
        exact: false,
        mark: 4
    }
];

const logoChangeByMark = (mark, myActive) => {
    switch (mark) {
        case 1:
            return (
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 21.0002V18.7779C19 17.5992 18.5259 16.4687 17.682 15.6352C16.8381 14.8017 15.6935 14.3335 14.5 14.3335H5.5C4.30653 14.3335 3.16193 14.8017 2.31802 15.6352C1.47411 16.4687 1 17.5992 1 18.7779V21.0002"
                        stroke={myActive === "labelPointer" ? "#5B5B5B" : "#FF7062"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 9.88889C12.4853 9.88889 14.5 7.89904 14.5 5.44444C14.5 2.98985 12.4853 1 10 1C7.51472 1 5.5 2.98985 5.5 5.44444C5.5 7.89904 7.51472 9.88889 10 9.88889Z"
                        stroke={myActive === "labelPointer" ? "#5B5B5B" : "#FF7062"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case 2:
            return (
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 21.0002V18.7779C19 17.5992 18.5259 16.4687 17.682 15.6352C16.8381 14.8017 15.6935 14.3335 14.5 14.3335H5.5C4.30653 14.3335 3.16193 14.8017 2.31802 15.6352C1.47411 16.4687 1 17.5992 1 18.7779V21.0002"
                        stroke={myActive === "labelPointer" ? "#5B5B5B" : "#FF7062"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 9.88889C12.4853 9.88889 14.5 7.89904 14.5 5.44444C14.5 2.98985 12.4853 1 10 1C7.51472 1 5.5 2.98985 5.5 5.44444C5.5 7.89904 7.51472 9.88889 10 9.88889Z"
                        stroke={myActive === "labelPointer" ? "#5B5B5B" : "#FF7062"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case 3:
            return (
                <svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.875 1H3.375C2.74511 1 2.14102 1.25022 1.69562 1.69562C1.25022 2.14102 1 2.74511 1 3.375V22.375C1 23.0049 1.25022 23.609 1.69562 24.0544C2.14102 24.4998 2.74511 24.75 3.375 24.75H17.625C18.2549 24.75 18.859 24.4998 19.3044 24.0544C19.7498 23.609 20 23.0049 20 22.375V8.125L12.875 1Z" stroke={myActive === "labelPointer" ? "#5B5B5B" : "#FF7062"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.875 1V8.125H20" stroke={myActive === "labelPointer" ? "#5B5B5B" : "#FF7062"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.25 14.0625H5.75" stroke={myActive === "labelPointer" ? "#5B5B5B" : "#FF7062"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.25 18.8125H5.75" stroke={myActive === "labelPointer" ? "#5B5B5B" : "#FF7062"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.125 9.3125H6.9375H5.75"
                        stroke={myActive === "labelPointer" ? "#5B5B5B" : "#FF7062"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case 4:
            return (
                <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.2 11.7998H3.4C2.07452 11.7998 1 12.8743 1 14.1998V22.5998C1 23.9253 2.07452 24.9998 3.4 24.9998H20.2C21.5255 24.9998 22.6 23.9253 22.6 22.5998V14.1998C22.6 12.8743 21.5255 11.7998 20.2 11.7998Z"
                        stroke={myActive === "labelPointer" ? "#5B5B5B" : "#FF7062"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.80078 11.8V7C5.80078 5.4087 6.43292 3.88258 7.55814 2.75736C8.68336 1.63214 10.2095 1 11.8008 1C13.3921 1 14.9182 1.63214 16.0434 2.75736C17.1686 3.88258 17.8008 5.4087 17.8008 7V11.8"
                        stroke={myActive === "labelPointer" ? "#5B5B5B" : "#FF7062"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        default:
            return null;
    }
}

const MenuLink = ({ label, to, activeOnlyWhenExact, mark }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var myActive = match ? 'myActive' : 'labelPointer';
                return (
                    // <li className={active}>
                    //     <Link to={to}>
                    //         {label}
                    //     </Link>
                    // </li>
                    <Link className={`${myActive}`} to={to}>
                        <div className="mr-20 col-12">
                            <p >
                                {logoChangeByMark(mark, myActive)}
                                    &nbsp;  {label}
                                {/* Hồ sơ của tôi */}
                            </p>
                        </div>
                    </Link>
                );
            }}
        />
    )
}

class UserMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null
        }
    }

    // fetchUserDetailAgain = async () => {
    //     const {showLoader, hideLoader} = this.props;
    //     var jwtDecode = require('jwt-decode');
    //     var tokenLogin = JSON.parse(localStorage.getItem('tokenLogin'));
    //     showLoader();
    //     if (tokenLogin) {
    //         var decoded = jwtDecode(tokenLogin);
    //         // console.log(decoded);
    //         const id = decoded.user.userId;
    //         // this.props.fetchUserDetail(decoded.user);
    //         await callApi("login/checkToken", 'POST', null)
    //             .then(res => {
    //                 // console.log(res);
    //                 callApi(`userClient/${id}`, 'GET', null)
    //                     .then(res => {
    //                         console.log(res.data);
    //                         this.props.fetchUserDetail(res.data);
    //                         hideLoader();
    //                     }).catch(function (error) {
    //                         if (error.response) {
    //                             console.log(error.response.data);
    //                         }
    //                     });
    //             }).catch(function (error) {
    //                 if (error.response) {
    //                     localStorage.removeItem('tokenLogin');
    //                     window.location.reload();
    //                 }
    //             });
    //     }
    // }

    changeAvarHandle = (event) => {
        // console.log("yes")
        const { loggedUser } = this.props;
        // console.log(loggedUser.avatarLink);
        this.setState({
            file: event.target.files[0]
        }, () => {
            const { loggedUser } = this.props;
            const { file } = this.state;
            console.log(file)
            console.log(file.size)
            // console.log(file)
            const id = loggedUser.id;

            let data = new FormData();
            data.append('file', file);
            // console.log(file);
            if(file.size<400000) {
            this.callApiChangeAvar(id, data);
            } else {
                toast.error('Dung lượng ảnh quá lớn!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        })


    }
    callApiChangeAvar = async (id, data) => {
        const { showLoader, hideLoader } = this.props;
        showLoader();
        await callApi(`user/avatar/${id}`, 'POST', data)
            .then(res => {
                // console.log(res.data);
                // window.location.reload();
                this.props.fetchUserDetail(res.data);
                hideLoader();
                toast.success('Cập nhật ảnh đại diện thành công!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                // this.fetchUserDetailAgain();
                // this.forceUpdate();
                // console.log("wtf");
                // hideLoader();
            }).catch(function (error) {
                if (error.response) {
                    console.log(error.response);
                    hideLoader();
                }
            });
    }


    render() {
        const { loggedUser } = this.props;
        // console.log(loggedUser.avatarLink);
        // console.log(this.state.file?this.state.file:"");
        // console.log(this.state.file);
        // console.log(file2);
        // console.log(file2 !== undefined);

        // if (file) {
        //     const myCut = file.split("b:");
        //     console.log(myCut[1]);
        // }
        return (
            <div className="leftPartUserDetail">
                <div className="outer row no-gutters">
                    <div className="inner circleCamera">
                    <ToastContainer />

                        {/* <div className="CameraLogo">
                            <svg width="62" height="53" viewBox="0 0 62 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M59.4173 44.875C59.4173 46.2674 58.873 47.6027 57.904 48.5873C56.9351 49.5719 55.6209 50.125 54.2506 50.125H7.75065C6.38037 50.125 5.0662 49.5719 4.09727 48.5873C3.12833 47.6027 2.58398 46.2674 2.58398 44.875V16C2.58398 14.6076 3.12833 13.2723 4.09727 12.2877C5.0662 11.3031 6.38037 10.75 7.75065 10.75H18.084L23.2507 2.875H38.7506L43.9173 10.75H54.2506C55.6209 10.75 56.9351 11.3031 57.904 12.2877C58.873 13.2723 59.4173 14.6076 59.4173 16V44.875Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M30.9993 39.625C36.7063 39.625 41.3327 34.924 41.3327 29.125C41.3327 23.326 36.7063 18.625 30.9993 18.625C25.2924 18.625 20.666 23.326 20.666 29.125C20.666 34.924 25.2924 39.625 30.9993 39.625Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div> */}
                        <div>
                            {/* <form enctype="multipart/form-data"> */}
                            <label
                                // style={{ backgroundImage: "url(" + checkUpdatAva ? file2 : loggedUser.avatarLink + ")" }}
                                style={{ backgroundImage: "url(" + loggedUser.avatarLink + ")" }}

                                className="logoAvar">
                                <svg style={{ visibility: loggedUser.avatarLink ? "hidden" : "visible" }}
                                    className="camreraLG" width="62" height="53" viewBox="0 0 62 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M59.4173 44.875C59.4173 46.2674 58.873 47.6027 57.904 48.5873C56.9351 49.5719 55.6209 50.125 54.2506 50.125H7.75065C6.38037 50.125 5.0662 49.5719 4.09727 48.5873C3.12833 47.6027 2.58398 46.2674 2.58398 44.875V16C2.58398 14.6076 3.12833 13.2723 4.09727 12.2877C5.0662 11.3031 6.38037 10.75 7.75065 10.75H18.084L23.2507 2.875H38.7506L43.9173 10.75H54.2506C55.6209 10.75 56.9351 11.3031 57.904 12.2877C58.873 13.2723 59.4173 14.6076 59.4173 16V44.875Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M30.9993 39.625C36.7063 39.625 41.3327 34.924 41.3327 29.125C41.3327 23.326 36.7063 18.625 30.9993 18.625C25.2924 18.625 20.666 23.326 20.666 29.125C20.666 34.924 25.2924 39.625 30.9993 39.625Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <input className="inputAvar" type="file" onChange={this.changeAvarHandle} />
                                {/* <img
                                    style={{
                                        visibility: this.state.file ? "visible" : "hidden",
                                        borderRadius: "50%",
                                    }}
                                    src={this.state.file}
                                    // src={loggedUser.avatarLink}
                                    width="130px"
                                    height="130px"
                                    alt="Fail to load" /> */}
                            </label>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
                <div style={{ paddingTop: "0px" }} className="outer row no-gutters">
                    <div className="inner circleCamera">
                        <span className="detail3">{loggedUser.firstName} {loggedUser.lastName}</span>
                    </div>
                </div>
                <hr style={{ border: "1.5px solid #E3E3E3", borderRadius: "2px" }} />
                <div className="row">
                    {this.showMenus(menus)}
                </div>
            </div>

        );
    }

    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                        mark={menu.mark}
                    />
                );
            });
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        loggedUser: state.User,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchUserDetail: (user) => {
            dispatch(getUserLogin(user))
        },
        showLoader: () => {
            dispatch(showLoader())
        },
        hideLoader: () => {
            dispatch(hideLoader())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
