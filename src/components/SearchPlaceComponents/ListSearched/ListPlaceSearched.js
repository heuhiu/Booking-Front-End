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
                    <div key={data.id}>
                        <Link to="/ParkDetail">
                            <div>
                                <ul>
                                    {/* <button onClick={() => this.onGetParkID(data.id)}>X</button> */}
                                    <li>
                                        <span >address: {data.address}</span>
                                        <br></br>
                                        <span >city ID: {data.cityId}</span>
                                        <br></br>
                                        <span >id: {data.id}</span>
                                        <br></br>
                                        <span >description: {data.description}</span>
                                        <br></br>
                                        <span >mail: {data.mail}</span>
                                        <br></br>
                                        <span >name: {data.name}</span>
                                        <br></br>
                                        <span >open_hours: {data.open_hours}</span>
                                        <br></br>
                                        <span>Closed<br></br>Tuesday: 11:00-21:00<br></br></span>
                                        <span >park_image: {data.park_image}</span>
                                        <br></br>
                                        <span >phoneNumber: {data.phoneNumber}</span>
                                        <br></br>
                                    </li>
                                </ul>
                            </div>
                        </Link>
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
                <div class="popular_places_area">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="filter_result_wrap">
                        <h3>Filter Result</h3>
                        <div class="filter_bordered">
                            <div class="filter_inner">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="single_select">
                                            <select>
                                                <option data-display="Country">Country</option>
                                                <option value="1">Africa</option>
                                                <option value="2">canada</option>
                                                <option value="4">USA</option>
                                              </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="single_select">
                                            <select>
                                                <option data-display="Travel type">Travel type</option>
                                                <option value="1">advance</option>
                                                <option value="2">advance</option>
                                                <option value="4">premium</option>
                                              </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="range_slider_wrap">
                                            <span class="range">Prise range</span>
                                            <div id="slider-range"></div>
                                            <p>
                                                <input type="text" id="amount" readonly 
                                                style={{border: "0", color: "#7A838B;", fontWeight: "400;"}}/>
                                            </p>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div class="reset_btn">
                                <button class="boxed-btn4" type="submit">Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="single_place">
                                <div class="thumb">
                                    <img src={searchPic} alt=""/>
                                    <a href="/#" class="prise">$500</a>
                                </div>
                                <div class="place_info">
                                    <a href="destination_details.html"><h3>California</h3></a>
                                    <p>United State of America</p>
                                    <div class="rating_days d-flex justify-content-between">
                                        <span class="d-flex justify-content-center align-items-center">
                                             <i class="fa fa-star"></i> 
                                             <i class="fa fa-star"></i> 
                                             <i class="fa fa-star"></i> 
                                             <i class="fa fa-star"></i> 
                                             <i class="fa fa-star"></i>
                                             <a href="/#">(20 Review)</a>
                                        </span>
                                        <div class="days">
                                            <i class="fa fa-clock-o"></i>
                                            <a href="/#">5 Days</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="single_place">
                                <div class="thumb">
                                    <img src={searchPic} alt=""/>
                                    <a href="/#" class="prise">$500</a>
                                </div>
                                <div class="place_info">
                                    <a href="destination_details.html"><h3>Korola Megna</h3></a>
                                    <p>United State of America</p>
                                    <div class="rating_days d-flex justify-content-between">
                                        <span class="d-flex justify-content-center align-items-center">
                                             <i class="fa fa-star"></i> 
                                             <i class="fa fa-star"></i> 
                                             <i class="fa fa-star"></i> 
                                             <i class="fa fa-star"></i> 
                                             <i class="fa fa-star"></i>
                                             <a href="/#">(20 Review)</a>
                                        </span>
                                        <div class="days">
                                            <i class="fa fa-clock-o"></i>
                                            <a href="/#">5 Days</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="single_place">
                                <div class="thumb">
                                    <img src={searchPic} alt=""/>
                                    <a href="/#" class="prise">$500</a>
                                </div>
                                <div class="place_info">
                                    <a href="destination_details.html"><h3>London</h3></a>
                                    <p>United State of America</p>
                                    <div class="rating_days d-flex justify-content-between">
                                        <span class="d-flex justify-content-center align-items-center">
                                             <i class="fa fa-star"></i> 
                                             <i class="fa fa-star"></i> 
                                             <i class="fa fa-star"></i> 
                                             <i class="fa fa-star"></i> 
                                             <i class="fa fa-star"></i>
                                             <a href="/#">(20 Review)</a>
                                        </span>
                                        <div class="days">
                                            <i class="fa fa-clock-o"></i>
                                            <a href="/#">5 Days</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="single_place">
                                <div class="thumb">
                                    <img src={searchPic} alt=""/>
                                    <a href="/#" class="prise">$500</a>
                                </div>
                                <div class="place_info">
                                    <a href="destination_details.html"><h3>Miami Beach</h3></a>
                                    <p>United State of America</p>
                                    <div class="rating_days d-flex justify-content-between">
                                        <span class="d-flex justify-content-center align-items-center">
                                             <i class="fa fa-star"></i> 
                                             <i class="fa fa-star"></i> 
                                             <i class="fa fa-star"></i> 
                                             <i class="fa fa-star"></i> 
                                             <i class="fa fa-star"></i>
                                             <a href="/#">(20 Review)</a>
                                        </span>
                                        <div class="days">
                                            <i class="fa fa-clock-o"></i>
                                            <a href="/#">5 Days</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="single_place">
                                <div class="thumb">
                                    <img src={searchPic} alt=""/>
                                    <a href="/#" class="prise">$500</a>
                                </div>
                                <div class="place_info">
                                    <a href="destination_details.html"><h3>California</h3></a>
                                    <p>United State of America</p>
                                    <div class="rating_days d-flex justify-content-between">
                                        <span class="d-flex justify-content-center align-items-center">
                                             <i class="fa fa-star"></i> 
                                             <i class="fa fa-star"></i> 
                                             <i class="fa fa-star"></i> 
                                             <i class="fa fa-star"></i> 
                                             <i class="fa fa-star"></i>
                                             <a href="/#">(20 Review)</a>
                                        </span>
                                        <div class="days">
                                            <i class="fa fa-clock-o"></i>
                                            <a href="/#">5 Days</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="single_place">
                                <div class="thumb">
                                    <img src={searchPic} alt=""/>
                                    <a href="/#" class="prise">$500</a>
                                </div>
                                <div class="place_info">
                                    <a href="destination_details.html"><h3>Saintmartine Iceland</h3></a>
                                    <p>United State of America</p>
                                    <div class="rating_days d-flex justify-content-between">
                                        <span class="d-flex justify-content-center align-items-center">
                                             <i class="fa fa-star"></i> 
                                             <i class="fa fa-star"></i> 
                                             <i class="fa fa-star"></i> 
                                             <i class="fa fa-star"></i> 
                                             <i class="fa fa-star"></i>
                                             <a href="/#">(20 Review)</a>
                                        </span>
                                        <div class="days">
                                            <i class="fa fa-clock-o"></i>
                                            <a href="/#">5 Days</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="more_place_btn text-center">
                                <a class="boxed-btn4" href="/#">More Places</a>
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
                        {this.showSearchList(searchList)}
                    </div>
                </Container>
            );
    }

}

export default withRouter(ListPlaceSearched);
