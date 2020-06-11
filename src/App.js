import React, { Component } from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Rectangle from './img/Rectangle 17.png';
import routers from './config/routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Menu/Menu';


// const settings = {
//     // dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />
// };


// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "black" }}
//             onClick={onClick}
//         />
//     );
// }

// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "black" }}
//             onClick={onClick}
//         />
//     );
// }


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Router>


                <div className="container-fluid">
                    <div className="row no-gutters"> 
                        <div className="col-12">
                            <Menu />
                        </div>
                    </div>
                    <div className="row no-gutters"> 
                        <div className="col-12">
                            {this.showContentMenus(routers)}
                        </div>
                    </div>
                </div >



                {/* <div className="app"> */}
                {/* <Menu />  */}
                {/* <header className="masthead">
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 text-center">
                  <h1 className="font-weight-light">Vertically Centered Masthead Content</h1>
                  <p className="lead">A great starter layout for a landing page</p>
                  <div className="block-17 my-4">
                    <form action="" method="post" className="d-block d-flex">
                      <div className="fields d-block d-flex">
                        <div className="textfield-search one-third">
                          <input type="text" className="form-control" placeholder="Ex: food, service, hotel" />
                        </div>
                        <div className="select-wrap one-third">
                          <div className="icon"><span className="fas fa-arrow-down"></span></div>
                          <select name="" id="" className="form-control" placeholder="Keyword search">
                            <option value="">Where</option>
                            <option value="">San Francisco USA</option>
                            <option value="">Berlin Germany</option>
                            <option value="">Lodon United Kingdom</option>
                            <option value="">Paris Italy</option>
                          </select>
                        </div>
                      </div>
                      <input type="submit" className="search-submit btn btn-primary" value="Search" />
                    </form>
                  </div>

                </div>
              </div>
            </div>
          </header> */}

                {/* <section className="py-5">
            <div className="container">
              <h2 className="font-weight-light">Page Content</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ab nulla dolorum autem nisi officiis blanditiis voluptatem hic, assumenda aspernatur facere ipsam nemo ratione cumque magnam enim fugiat reprehenderit expedita.</p>
            </div>
          </section> */}

                {/* <section className="py-5">
            <div className="container">
              <h2>Custom Arrows</h2>
              <Slider {...settings}>
                <div>
                  <h3>
                    <img src={Rectangle} alt="" />
                lmao 1
              </h3>
                </div>
                <div>
                  <h3>
                    <img src={Rectangle} alt="" />
                lmao 2
              </h3>
                </div><div>
                  <h3>
                    <img src={Rectangle} alt="" />
                lmao 3
              </h3>
                </div><div>
                  <h3>
                    <img src={Rectangle} alt="" />
                lmao 4
              </h3>
                </div><div>
                  <h3>
                    <img src={Rectangle} alt="" />
                lmao 5
              </h3>
                </div><div>
                  <h3>
                    <img src={Rectangle} alt="" />
                lmao 6
              </h3>
                </div>
              </Slider>
            </div>
          </section> */}
                {/* </div> */}

            </Router >
        );
    }

    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (<Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
                );
            });
        }
        return <Switch>{result}</Switch>
    }

}

export default App;
