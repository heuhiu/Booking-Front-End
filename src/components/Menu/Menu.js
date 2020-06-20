import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './style.css';
import logo from '../../img/Logo.png';
import Search from '../HomepageComponents/Search/Search';
import { connect } from 'react-redux';
import myPro from '../../img/myPro.jpg';

const menus = [
    // {
    //     name: 'Trang chu',
    //     to: '/',
    //     exact: true
    // },
    {
        name: 'Đặt chỗ của tôi',
        to: '/product-list',
        exact: false,
        style: 'none1'
    },
    {
        name: 'Đăng nhập',
        to: '/Login',
        exact: false,
        style: 'loginbtn'
    },
    {
        name: 'Đăng kí',
        to: '/Register',
        exact: false,
        style: 'registerbtn'
    }
];

const MenuLink = ({ label, to, activeOnlyWhenExact, style }) => {
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
        localStorage.removeItem('tokenLogin');
        localStorage.removeItem('USER');
        localStorage.removeItem('CART');
        window.location.reload();
        // this.props.history.push("/");
    }

    render() {
        return (
            <nav
                className="navbar navbar-light bg-light bg-white fixed-top">
                <Link className="navbar-brand" to='/'>
                    <img className="navLogo"
                        src={logo}
                        alt="Fail Loading"
                        width="125.608"
                        height="38.704"
                    />
                </Link>

                <ul className="nav navbar-expand-lg">
                    {/* {this.showMenus(menus)} */}
                    <Link to="/Register">
                        <p className="none1 nav-link">
                            <i className="far fa-file-alt"></i>{' '}Đặt chỗ của tôi
                    </p>
                    </Link>
                    <Link to="/login">
                        <button className="loginbtn">Đăng Nhập
                    </button>
                    </Link>
                    <Link to="/Register">
                        <button className="registerbtn">
                            Đăng kí
                    </button>
                    </Link>
                    {/* <button className="loginbtn" onClick={this.logOut}>Logout</button> */}
                    {/* <div className="nav-link">
                        <h1 className="userName">Hello ! {this.props.UserDetail.firstName}</h1>
                        <button onClick={this.logOut}>Logout</button>
                        <p>Hồ sơ của tôi</p>
                        <img
                            style={{ borderRadius: "50%" }}
                            src={myPro}
                            alt="Fail Loading"
                            width="46"
                            height="46"
                        />
                    </div> */}
                    {/* <div className="nav-link">
                        <div className="dropdown">
                            <p className="userNamebefore">Hello !</p>
                            <button className="" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <h1 className="userName"> {this.props.UserDetail.firstName}</h1>
                                </button>
                            
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                                <p onClick={this.logOut}>Logout</p>
                                <p>Hồ sơ của tôi</p>
                            </div>
                        </div>
                    </div> */}
                    <div className="nav-link pdR-0">
                        <p className="userNamebefore">Hello !</p>
                    </div>
                    <div className="nav-link">
                        <div className="dropdown">
                            <button className="userName" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {this.props.UserDetail.firstName} {this.props.UserDetail.lastName}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <button className="dropdown-item uper">
                                    <svg width="14.4" height="16" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 21V18.7778C19 17.599 18.5259 16.4686 17.682 15.6351C16.8381 14.8016 15.6935 14.3333 14.5 14.3333H5.5C4.30653 14.3333 3.16193 14.8016 2.31802 15.6351C1.47411 16.4686 1 17.599 1 18.7778V21" stroke="#FF7062" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10 9.88889C12.4853 9.88889 14.5 7.89904 14.5 5.44444C14.5 2.98985 12.4853 1 10 1C7.51472 1 5.5 2.98985 5.5 5.44444C5.5 7.89904 7.51472 9.88889 10 9.88889Z" stroke="#FF7062" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg> &nbsp;
                                    Hồ sơ của tôi
                                    </button>
                                <button className="dropdown-item lower" onClick={this.logOut}>
                                    <svg width="14.4" height="16" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.365 5.64001C17.6234 6.8988 18.4803 8.50246 18.8273 10.2482C19.1743 11.994 18.9959 13.8034 18.3146 15.4478C17.6334 17.0921 16.4798 18.4976 14.9998 19.4864C13.5199 20.4752 11.7799 21.0029 10 21.0029C8.2201 21.0029 6.48016 20.4752 5.00018 19.4864C3.5202 18.4976 2.36664 17.0921 1.68537 15.4478C1.00409 13.8034 0.825693 11.994 1.17272 10.2482C1.51975 8.50246 2.37663 6.8988 3.635 5.64001" stroke="#FF7062" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10.005 1V11" stroke="#FF7062" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg> &nbsp;
                                    Đăng xuất
                                </button>

                            </div>
                        </div>
                    </div>
                    <img
                        style={{ borderRadius: "50%", marginRight: "43.2px" }}
                        src={myPro}
                        alt="Fail Loading"
                        width="36.8"
                        height="36.8"
                    />
                </ul>

            </nav>


        );
    }
    //  <Link to="/login">
    //     <button className="loginbtn" 
    //     // onClick={this.onShow}
    //     >Đăng Nhập
    //     </button>
    // </Link> 
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

// export default Menu;
export default connect(mapStateToProps, null)(Menu);
