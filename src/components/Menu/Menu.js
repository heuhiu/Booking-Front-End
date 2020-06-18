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
                    <button className="loginbtn" onClick={this.logOut}>Logout</button>
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
                    {/* <div class="nav-link">
                        <div class="dropdown">
                            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <h1 className="userName">Hello ! {this.props.UserDetail.firstName}</h1>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <p onClick={this.logOut}>Logout</p>
                                <p>Hồ sơ của tôi</p>
                            </div>
                        </div>
                    </div>
                    <img
                        style={{ borderRadius: "50%" }}
                        src={myPro}
                        alt="Fail Loading"
                        width="46"
                        height="46"
                    /> */}

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
