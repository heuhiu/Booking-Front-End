import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './style.css';
import logo from '../../img/Logo.png';

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
        name: 'Giỏ Hàng',
        to: '/Login',
        exact: false,
        style: 'none'
    },
    {
        name: 'Đăng nhập',
        to: '/Login',
        exact: false,
        style: 'loginbtn'
    },
    {
        name: 'Đăng kí',
        to: '/Login',
        exact: false,
        style: 'registerbtn'
    }
];


const classes = "myStyle";

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
                              <button className={style}>{label}</button>  
                            </Link>
                        </li>
                    );
                } 
                if(style === 'none') {
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
    render() {
        return (
            <div>
                {/* <div className="navbar navbar-default">
                    <a className="navbar-brand" href="/#">Call API</a>
                    <ul className="nav navbar-nav">
                        {this.showMenus(menus)}
                    </ul>
                </div> */}

                <nav className="navbar 
                navbar-expand-lg 
                navbar-light 
                bg-white 
                fixed-top">
                    <div className="container">
                        {/* <a className="navbar-brand" href="/#">Goboki</a> */}
                        <Link className="navbar-brand" to='/'>
                            <img src={logo} alt="??" /></Link>
                        {/* <i className="fas fa-user"></i> */}
                        <button className="navbar-toggler"
                            type="button" data-toggle="collapse"
                            data-target="#navbarResponsive"
                            aria-controls="navbarResponsive"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                {this.showMenus(menus)}

                            </ul>
                        </div>
                    </div>
                </nav>

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
                        style={menu.style}
                    />
                );
            });
        }
        return result;
    }
}

export default Menu;
