import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import Pagination from "react-js-pagination";
import './ListPlaceSearched.css';
import searchPic from '../../../img/searchPic.png';

class ListPlaceSearched extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,      //Current page number
            totalPage: 1,       //Total page paging
            totalItems: 0,      //Total item searched
            limit: 5,          //Number of items appear
            searchList: [],     //ListSeached temporary
        }
    }

    //Show items searched
    showSearchList = (searchList) => {
        var result = null;
        if (searchList.length > 0) {
            result = searchList.map((data, index) => {
                return (
                    <Link
                    key={data.id}    
                    to={{
                        pathname: "/PlaceDetail",
                        data: data
                      }}>
                        <div  className="col-lg-12 col-md-12">
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
                                            <p href="destination_details.html">
                                                <button>Điểm tham quan</button>
                                            </p>
                                            <p>id: {data.id}</p>
                                            <h5
                                                style={{ marginBottom: "-10px" }}
                                            >{data.name}</h5>
                                            <p className="destination">{data.address}</p>
                                            {/* <p
                                        style={{color: "#FF7062"}}
                                        className="destination">{data.detailDescription}</p> */}
                                            <p className="oldPrice">đ 100.000</p>
                                            <p className="newPrice">{data.price}</p>
                                            <p className="available">Có thể đặt ngay hôm nay</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
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

    //Handle changing when user click in button paging "1 2 3 4 ..."
    handlePageChange = (pageNumber) => {
        var searchName = JSON.parse(localStorage.getItem('searchKeyword'));
        var filterCityIDChecked = JSON.parse(localStorage.getItem('filterCityIDChecked'));
        var filterCategoryIDChecked = JSON.parse(localStorage.getItem('filterCategoryIDChecked'));
        this.setState({
            activePage: pageNumber
        }, () => {
            this.receivedData(searchName, filterCityIDChecked, filterCategoryIDChecked);
        })
    }

    //Received data from API
    receivedData(searchName, IDCityFilter, IDCategoryFilter) {
        const { activePage } = this.state;
        axios.get('http://localhost:8090/place/searchClient', {
            params: {
                //park name
                name: searchName,
                //city list ID
                cityId: IDCityFilter + '',
                //category List ID
                categoryId: IDCategoryFilter + '',
                //page Number  
                page: activePage,
                //limit of page
                limit: this.state.limit,
            }
        }).then(res => {
            //set state
            // console.log(res);
            this.setState({
                totalPage: res.data.totalPage,
                searchList: res.data.listResult,
                totalItems: res.data.totalItems
            })
        }).catch(function (error) {
            console.log(error.response);
        });
    }

    //Get name, cityID. CategoryID from localStorage to filter & get List after filter
    componentWillMount = () => {
        var searchName = JSON.parse(localStorage.getItem('searchKeyword'));
        var filterCityIDChecked = JSON.parse(localStorage.getItem('filterCityIDChecked'));
        var filterCategoryIDChecked = JSON.parse(localStorage.getItem('filterCategoryIDChecked'));
        this.receivedData(searchName, filterCityIDChecked, filterCategoryIDChecked);
    }

    render() {
        const { activePage, totalItems, searchList } = this.state;
        //Get Name seached
        var searchName = JSON.parse(localStorage.getItem('searchKeyword'));
        
        return (
            <Container >
                <p>Search Name: {searchName} </p>
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
                                                            <input type="text" id="amount" readOnly
                                                                style={{ border: "0", color: "#7A838B", fontWeight: "400" }} />
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
                                <Pagination
                                    hideNavigation
                                    hideFirstLastPages
                                    //What number is selected
                                    activePage={activePage}
                                    //The number of items each page
                                    itemsCountPerPage={this.state.limit}
                                    //Total of items in list
                                    totalItemsCount={totalItems}
                                    //Set Css of boostrap 4
                                    itemClass="page-item"
                                    //Set Css of boostrap 4
                                    linkClass="page-link"
                                    //Trigger handle page change
                                    onChange={this.handlePageChange.bind(this)}
                                />
                                {/* show List item seached & filter */}
                                <div className="row">
                                    {this.showSearchList(searchList)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }

}

export default withRouter(ListPlaceSearched);
