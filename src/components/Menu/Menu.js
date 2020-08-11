import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './style.css';
import logo from '../../img/Logo.png';
import { connect } from 'react-redux';
import myPro from '../../img/Ellipse 1.png';
import { Dropdown } from 'react-bootstrap';
import callApi from '../../config/utils/apiCaller';
import { withRouter } from 'react-router-dom';
import { showLoader, hideLoader, getUserLogin } from '../../actions/index';
import Search from '../HomepageComponents/Search/Search';
import NavBarSearch from './NavBarSearch/NavBarSearch';

const menus = [
    // {
    //     name: 'Trang chu',
    //     to: '/',
    //     exact: true
    // },
    {
        name: 'Đặt chỗ của tôi',
        to: '/userProfile',
        exact: false,
        style: 'none1'
    },
    {
        name: 'Đăng nhập',
        to: '/login',
        exact: false,
        style: 'loginbtn'
    },
    {
        name: 'Đăng kí',
        to: '/register',
        exact: false,
        style: 'registerbtn'
    }
];

const MenuLink = ({ label, to, activeOnlyWhenExact, style }) => {
    const { hideLoader } = this.props;
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'active' : '';
                if (style !== 'none' && style !== 'none1') {
                    return (
                        <li className={active}>
                            <Link to={to}>

                                <button className={style}>
                                    {label}
                                </button>
                            </Link>
                        </li>
                    );
                }
                if (style === 'none') {
                    return (
                        <li className={active}>
                            <Link className={style + " nav-link"} to={to}>
                                <i className="fas fa-shopping-cart"></i> {label}
                            </Link>
                        </li>
                    );
                } else {
                    return (
                        <li className={active}>
                            <Link className={style + " nav-link"} to={to}>
                                <i className="far fa-file-alt"></i> {label}
                            </Link>
                        </li>
                    );
                }
            }}
        />
    )
}


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    logOut = () => {
        // this.props.history.push("/");
        callApi("login/logout", 'POST', null)
            .then(res => {
                console.log(res);
                localStorage.removeItem('tokenLogin');
                localStorage.removeItem('USER');
                // window.location.reload();
                this.props.history.push("/login");
            }).catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                }
            });
    }

    render() {
        var tokenLogin = JSON.parse(localStorage.getItem('tokenLogin'));
        return (
            <nav
                style={{ paddingTop: "0px", paddingBottom: "0px" }}
                className="navbar navbar-light bg-light bg-white fixed-top">
                <Link className="navbar-brand" to='/'>
                    <img className="navLogo"
                        src={logo}
                        alt="Fail Loading"
                        width="125.608"
                        height="38.704"
                    />
                </Link>
                {/* <NavBarSearch /> */}
                <ul className="nav navbar-expand-lg">
                    {/* {this.showMenus(menus)} */}
                    <Link
                        style={{ textDecoration: "none" }} to="/">
                        <button style={{ display: tokenLogin ? "" : "none" }} className="none1 nav-link">
                            {/* <svg style={{marginBottom: "8px"}}width="18.2" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 10.625L12.625 1.58337L24.25 10.625V24.8334C24.25 25.5185 23.9778 26.1756 23.4934 26.6601C23.0089 27.1445 22.3518 27.4167 21.6667 27.4167H3.58333C2.89819 27.4167 2.24111 27.1445 1.75664 26.6601C1.27217 26.1756 1 25.5185 1 24.8334V10.625Z" stroke="#5B5B5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8.75 27.4167V14.5H16.5V27.4167" stroke="#5B5B5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg> */}
                            {' '}Trang chủ
                        </button>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to="/userProfile/myOrders">
                        <button style={{ display: tokenLogin ? "" : "none" }} className="none1 nav-link">
                            <i className="far fa-file-alt"></i>{' '}Đặt chỗ của tôi
                        </button>
                    </Link>
                    <Link to="/login">
                        <button style={{ display: tokenLogin ? "none" : "" }} className="loginbtn">Đăng Nhập
                    </button>
                    </Link>
                    <Link to="/register">
                        <button style={{ display: tokenLogin ? "none" : "" }} className="registerbtn">
                            Đăng kí
                    </button>
                    </Link>
                    <div
                        style={{ paddingRight: "0px" }}
                        className="nav-link">
                        <button
                            style={{ display: tokenLogin ? "" : "none" }} className="userNamebefore">
                            Hello!
                        </button>
                    </div>
                    &nbsp;
                    <div
                        style={{ paddingLeft: "0px", paddingRight: "0px" }}
                        className="nav-link">
                        <Dropdown style={{ display: tokenLogin ? "" : "none" }}>
                            <Dropdown.Toggle id="userName">
                                {this.props.UserDetail.firstName} {this.props.UserDetail.lastName}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {/* <Dropdown.Item href="/userProfile/myProfile" id="dropdown-item"> */}
                                <Link className="itemDrop" to="/userProfile/myProfile">
                                    <svg width="14.4" height="16" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 21V18.7778C19 17.599 18.5259 16.4686 17.682 15.6351C16.8381 14.8016 15.6935 14.3333 14.5 14.3333H5.5C4.30653 14.3333 3.16193 14.8016 2.31802 15.6351C1.47411 16.4686 1 17.599 1 18.7778V21" stroke="#FF7062" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 9.88889C12.4853 9.88889 14.5 7.89904 14.5 5.44444C14.5 2.98985 12.4853 1 10 1C7.51472 1 5.5 2.98985 5.5 5.44444C5.5 7.89904 7.51472 9.88889 10 9.88889Z" stroke="#FF7062" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg> &nbsp;
                                    Hồ sơ của tôi
                                    </Link>
                                {/* </Dropdown.Item> */}

                                {/* <Dropdown.Item
                                    onClick={this.logOut}
                                > */}
                                <button className="itemDrop" onClick={this.logOut}>
                                    <svg width="14.4" height="16" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.365 5.64001C17.6234 6.8988 18.4803 8.50246 18.8273 10.2482C19.1743 11.994 18.9959 13.8034 18.3146 15.4478C17.6334 17.0921 16.4798 18.4976 14.9998 19.4864C13.5199 20.4752 11.7799 21.0029 10 21.0029C8.2201 21.0029 6.48016 20.4752 5.00018 19.4864C3.5202 18.4976 2.36664 17.0921 1.68537 15.4478C1.00409 13.8034 0.825693 11.994 1.17272 10.2482C1.51975 8.50246 2.37663 6.8988 3.635 5.64001" stroke="#FF7062" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10.005 1V11" stroke="#FF7062" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg> &nbsp;
                                    Đăng xuất
                                    </button>
                                {/* </Dropdown.Item> */}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <img

                        style=
                        {{
                            borderRadius: "50%",
                            marginRight: "43.2px",
                            display: tokenLogin ? "" : "none",
                            visibility: this.props.UserDetail.avatarLink === null ? "hidden" : "visible"
                        }}
                        src={this.props.UserDetail.avatarLink}
                        width="36.8"
                        height="36.8"
                    />
                </ul>

            </nav>


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
                        style={menu.style}
                    />
                );
            });
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        UserDetail: state.User,
    }
};

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
// export default Menu;
// export default connect(mapStateToProps, null)(Menu);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu));
