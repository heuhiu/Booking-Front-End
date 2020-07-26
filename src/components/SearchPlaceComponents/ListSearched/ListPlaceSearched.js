import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import Pagination from "react-js-pagination";
import './ListPlaceSearched.css';
import searchPic from '../../../img/searchPic.png';
import callApi from '../../../config/utils/apiCaller';

class ListPlaceSearched extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,      //Current page number
            totalPage: 1,       //Total page paging
            totalItems: 0,      //Total item searched
            limit: 2,          //Number of items appear
            searchList: [],     //ListSeached temporary
            searchName: "",
            listCtiId: "",
            listCatId: "",
            listCatName: []
        }
    }

    convertCurrecyToVnd = (currency) => {
        return currency.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
    }

    getUsers = async (catId) => {
        const { listCatName } = this.state;
        let res = axios.get(`http://localhost:8090/category/${catId}`);
        // this.setState({
        //     listCatName: res.data
        // })
        listCatName.push(res.data)
        // return res.data;
    };

    showPlaceCategory =  (categoryList) => {
        var result = null;
        // var listCatName = [];
        const { listCatName } = this.state;
        if (categoryList.length > 0) {
            result = categoryList.map((data, index) => {
                // const hi = this.getUsers(data);
                // console.log(hi);
                // console.log(res.data);
                // callApi('city', 'GET', null)
                // .then(res => {
                //     return (
                //         <p style={{ color: "red" }}>{data}</p>
                //     )
                // }).catch(function (error) {
                //     if (error.response) {
                //         console.log(error.response.data);
                //     }
                // });
                let res = axios.get(`http://localhost:8090/category/${data}`);
                return (
                    <p style={{ color: "red" }}>a{res.data}</p>
                )
            });
        }
        return result;
    }


    //Show items searched
    showSearchList = (searchList) => {
        var result = null;
        if (searchList.length > 0) {
            result = searchList.map((data, index) => {
                // console.log(data.categoryId);
                return (
                    <Link
                        style={{ textDecoration: "none" }}
                        key={index}
                        to={{
                            pathname: `/placeDetail/${data.id}`
                        }}>
                        <div key={data.index} className="col-lg-12 col-md-12">
                            <div className="single_place">
                                <div className="row">
                                    <div
                                        // style={{backgroundImage: `url(${searchPic})`}} 
                                        className="backgroupPresent col">
                                        <div className="thumb">
                                            <img src={data.placeImageLink[0]} alt="FAIL TO LOAD" />

                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="place_info">
                                            <p>
                                                <button>Điểm tham quan</button>
                                            </p>
                                            {this.showPlaceCategory(data.categoryId)}
                                            {/* <p>id: {data.id}</p> */}
                                            <h5
                                                style={{ marginBottom: "-10px" }}
                                            >{data.name}</h5>
                                            <p className="destination">
                                                <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14 7.5C14 12.5556 7.5 16.8889 7.5 16.8889C7.5 16.8889 1 12.5556 1 7.5C1 5.77609 1.68482 4.12279 2.90381 2.90381C4.12279 1.68482 5.77609 1 7.5 1C9.22391 1 10.8772 1.68482 12.0962 2.90381C13.3152 4.12279 14 5.77609 14 7.5Z" stroke="#A5A5A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M7.50016 9.66683C8.69678 9.66683 9.66683 8.69678 9.66683 7.50016C9.66683 6.30355 8.69678 5.3335 7.50016 5.3335C6.30355 5.3335 5.3335 6.30355 5.3335 7.50016C5.3335 8.69678 6.30355 9.66683 7.50016 9.66683Z" stroke="#A5A5A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg> &nbsp;
                                                {data.address}</p>
                                            {/* <p
                                        style={{color: "#FF7062"}}
                                        className="destination">{data.detailDescription}</p> */}
                                            {/* <p className="oldPrice">{this.convertCurrecyToVnd(data.basicPrice)}</p> */}
                                            <p className="newPrice">{this.convertCurrecyToVnd(data.basicPrice)}</p>
                                            {/* <p className="available">Có thể đặt ngay hôm nay</p> */}
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
        const { searchName, listCtiId, listCatId } = this.state;
        // const { searchName, listCtiId, listCatId } = this.props;
        // console.log(searchName);
        // console.log(listCtiId);
        // console.log(listCatId);;
        this.setState({
            activePage: pageNumber
        }
            , () => {
                this.receivedData(searchName, listCtiId, listCatId);
            }
        )
        // this.forceUpdate();
    }

    //Received data from API
    receivedData(searchName, IDCityFilter, IDCategoryFilter) {
        const { activePage } = this.state;
        axios.get('http://localhost:8090/place/searchClient', {
            params: {
                //park name
                name: searchName ? searchName : "",
                //city list ID
                cityId: isNaN(parseFloat(IDCityFilter)) === false ? IDCityFilter + '' : null,
                //category List ID
                categoryId: isNaN(parseFloat(IDCategoryFilter)) === false ? IDCategoryFilter + '' : null,
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
                totalItems: res.data.totalItems,
            })
        }).catch(function (error) {
            console.log(error.response);
        });
    }

    componentDidMount = () => {
        var { location } = this.props;
        console.log(location.search);
        const answer_array = location.search.split('?');
        var name = '';
        var listCtiId = '';
        var listCatId = '';
        for (let index = 0; index < answer_array.length; index++) {
            const element = answer_array[index];
            if (element.split("=")[0] === "name") {
                name = element.split("=")[1]
            }
            if (element.split("=")[0] === "listCityID") {
                listCtiId = element.split("=")[1]
            }
            if (element.split("=")[0] === "listCatID") {
                listCatId = element.split("=")[1]
            }
        }
        var listCtiIdNumber = listCtiId.split(',').map(function (item) {
            return parseInt(item, 10);
        });
        var listCatIdNumber = listCatId.split(',').map(function (item) {
            return parseInt(item, 10);
        });
        // console.log(name.replace(/%20/g, ' '));
        var newDecode = decodeURIComponent(name);
        var oldDecode = name.replace(/%20/g, ' ');
        console.log(oldDecode + " vs " + newDecode);

        this.setState({
            // searchedName: name.replace(/%20/g, ' '),
            searchName: newDecode,
            listCtiId: listCtiIdNumber,
            listCatId: listCatIdNumber
        }, () => {
            this.receivedData(newDecode, listCtiIdNumber, listCatIdNumber);
        })
    }

    render() {
        // debugger
        const { activePage, totalItems, searchList, listCatName, searchName } = this.state;
        const { listCtiId, listCatId } = this.props;
        console.log(listCatName);
        return (
            <Container style={{ fontFamily: 'Inter' }} >
                {/* <p>Search Name: {searchName} </p> */}
                <div className="popular_places_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="filter_result_wrap">
                                    <h3 style={{ visibility: searchName ? "visible" : "hidden" }}>Tất cả kết quả với Da Nang: {searchName}</h3>
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
