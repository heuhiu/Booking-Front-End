import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import Pagination from "react-js-pagination";
import './ListPlaceSearched.css';
import searchPic from '../../../img/searchPic.png';
// import '../../../scss/_popular_place.scss';

class ListPlaceSearched extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchList: [],
            activePage: 1,
            totalPage: 1,
            testList: [],
            totalItems: 0,
        }
    }

    showSearchList = (searchList) => {
        var result = null;
        if (searchList.length > 0) {
            result = searchList.map((data, index) => {
                return (
                    //specifire key for each data
                    // <div key={data.id}>
                    //     <Link to="/ParkDetail">
                    //         <div>
                    //             <ul>
                    //                 {/* <button onClick={() => this.onGetParkID(data.id)}>X</button> */}
                    //                 <li>
                    //                     <span >address: {data.address}</span>
                    //                     <br></br>
                    //                     <span >city ID: {data.cityId}</span>
                    //                     <br></br>
                    //                     <span >id: {data.id}</span>
                    //                     <br></br>
                    //                     <span >description: {data.description}</span>
                    //                     <br></br>
                    //                     <span >mail: {data.mail}</span>
                    //                     <br></br>
                    //                     <span >name: {data.name}</span>
                    //                     <br></br>
                    //                     <span >open_hours: {data.open_hours}</span>
                    //                     <br></br>
                    //                     <span>Closed<br></br>Tuesday: 11:00-21:00<br></br></span>
                    //                     <span >park_image: {data.park_image}</span>
                    //                     <br></br>
                    //                     <span >phoneNumber: {data.phoneNumber}</span>
                    //                     <br></br>
                    //                 </li>
                    //             </ul>
                    //         </div>
                    //     </Link>
                    // </div>

                    <div  key={data.id} className="col-lg-12 col-md-12">
                        <div className="single_place">
                            <div className="row">
                                <div className="col-5">
                                    <div className="thumb">
                                        <img src={searchPic} alt="" />
                                        {/* <a href="/#" className="prise">$500</a> */}
                                    </div>
                                </div>
                                <div>
                                    <div className="place_info">
                                        <a href="destination_details.html">
                                            <button>Điểm tham quan</button>
                                        </a>
                                        <h5
                                            style={{ marginBottom: "-10px" }}
                                        >{data.name}</h5>
                                        <p className="destination">{data.address}</p>
                                        <p className="oldPrice">đ 100.000</p>
                                        <p className="newPrice">{data.price}</p>
                                        <p className="available">Có thể đặt ngay hôm nay</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

              
              
              );
            });
        }
        else if (searchList.length === 0) {
            return (
                <p>Not Found</p>
            );
        }
        return result;
    }
    //handle changing when user click in "button change number"
    handlePageChange = (pageNumber) => {
        var searchName = JSON.parse(localStorage.getItem('searchKeyword'));
        this.setState({
            activePage: pageNumber
        }, () => {
            this.receivedData(searchName)
        })
    }
    //received data from API
    receivedData(searchName) {
        const { activePage } = this.state;
        axios.get('http://localhost:8090/place/searchMul', {
            params: {
                //name, address, cityId, categoryId, page, limit
                //park name
                name: searchName,
                // name: "Vinpearl Land",
                // address: "alololo",
                // cityId: 1,
                // categoryId: 1,
                //page Number  
                page: activePage,
                //limit of page
                limit: 2,
            }
        }).then(res => {
            console.log(res);
            //set state
            this.setState({
                totalPage: res.data.totalPage,
                searchList: res.data.listResult,
                totalItems: res.data.totalItems
            })
        }).catch(function (error) {
            console.log(error.response);
        });
    }

    componentWillMount = () => {
        var searchName = JSON.parse(localStorage.getItem('searchKeyword'));
        this.receivedData(searchName);
    }

    render() {
        const { activePage, totalItems, searchList } = this.state;
        // const { searchName } = this.props;
        var searchName = JSON.parse(localStorage.getItem('searchKeyword'));
        if (searchName === "") {
            return (
                <div>
                    <div className="popular_places_area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="filter_result_wrap">
                                        <h3>Filter Result</h3>
                                        <div className="filter_bordered">
                                            <div className="filter_inner">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="single_select">
                                                            <select>
                                                                <option data-display="Country">Country</option>
                                                                <option value="1">Africa</option>
                                                                <option value="2">canada</option>
                                                                <option value="4">USA</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="single_select">
                                                            <select>
                                                                <option data-display="Travel type">Travel type</option>
                                                                <option value="1">advance</option>
                                                                <option value="2">advance</option>
                                                                <option value="4">premium</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="range_slider_wrap">
                                                            <span className="range">Prise range</span>
                                                            <div id="slider-range"></div>
                                                            <p>
                                                                <input type="text" id="amount" readonly
                                                                    style={{ border: "0", color: "#7A838B;", fontWeight: "400;" }} />
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reset_btn">
                                                <button className="boxed-btn4" type="submit">Reset</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="single_place">
                                                <div className="row">
                                                    <div className="col-5">
                                                        <div className="thumb">
                                                            <img src={searchPic} alt="" />
                                                            {/* <a href="/#" className="prise">$500</a> */}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="place_info">
                                                            <a href="destination_details.html">
                                                                <button>Điểm tham quan</button>
                                                            </a>
                                                            <h5
                                                                style={{ marginBottom: "-10px" }}
                                                            >[SALE 60%] Vé 3D Art In Paradise Danang</h5>
                                                            <p className="destination">Son Tra District, Đà Nẵng</p>
                                                            <p className="oldPrice">đ 100.000</p>
                                                            <p className="newPrice">đ 55.500</p>
                                                            <p className="available">Có thể đặt ngay hôm nay</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="single_place">
                                                <div className="row">
                                                    <div className="col-5">
                                                        <div className="thumb">
                                                            <img src={searchPic} alt="" />
                                                            {/* <a href="/#" className="prise">$500</a> */}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="place_info">
                                                            <a href="destination_details.html">
                                                                <button>Điểm tham quan</button>
                                                            </a>
                                                            <h5
                                                                style={{ marginBottom: "-10px" }}
                                                            >[SALE 60%] Vé 3D Art In Paradise Danang</h5>
                                                            <p className="destination">Son Tra District, Đà Nẵng</p>
                                                            <p className="oldPrice">đ 100.000</p>
                                                            <p className="newPrice">đ 55.500</p>
                                                            <p className="available">Có thể đặt ngay hôm nay</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="single_place">
                                                <div className="row">
                                                    <div className="col-5">
                                                        <div className="thumb">
                                                            <img src={searchPic} alt="" />
                                                            {/* <a href="/#" className="prise">$500</a> */}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="place_info">
                                                            <a href="destination_details.html">
                                                                <button>Điểm tham quan</button>
                                                            </a>
                                                            <h5
                                                                style={{ marginBottom: "-10px" }}
                                                            >[SALE 60%] Vé 3D Art In Paradise Danang</h5>
                                                            <p className="destination">Son Tra District, Đà Nẵng</p>
                                                            <p className="oldPrice">đ 100.000</p>
                                                            <p className="newPrice">đ 55.500</p>
                                                            <p className="available">Có thể đặt ngay hôm nay</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
       
    } else
            return (

                <Container >
                    <p>Search Name: {searchName} </p>
                    <div>
                        <Pagination
                            //what number is selected
                            activePage={activePage}
                            //the number of items each page
                            itemsCountPerPage={2}
                            //total of items in list
                            totalItemsCount={totalItems}
                            //trigger handle page change
                            onChange={this.handlePageChange.bind(this)}
                        />
                         <div>
                    <div className="popular_places_area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="filter_result_wrap">
                                        <h3>Filter Result</h3>
                                        <div className="filter_bordered">
                                            <div className="filter_inner">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="single_select">
                                                            <select>
                                                                <option data-display="Country">Country</option>
                                                                <option value="1">Africa</option>
                                                                <option value="2">canada</option>
                                                                <option value="4">USA</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="single_select">
                                                            <select>
                                                                <option data-display="Travel type">Travel type</option>
                                                                <option value="1">advance</option>
                                                                <option value="2">advance</option>
                                                                <option value="4">premium</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="range_slider_wrap">
                                                            <span className="range">Prise range</span>
                                                            <div id="slider-range"></div>
                                                            <p>
                                                                <input type="text" id="amount" readonly
                                                                    style={{ border: "0", color: "#7A838B;", fontWeight: "400;" }} />
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reset_btn">
                                                <button className="boxed-btn4" type="submit">Reset</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="row">
                                        {this.showSearchList(searchList)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
       
                        
                    </div>
                </Container>
            );
    }

}

export default withRouter(ListPlaceSearched);
