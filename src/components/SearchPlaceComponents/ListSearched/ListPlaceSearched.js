import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import Pagination from "react-js-pagination";
import './ListPlaceSearched.css';
import searchPic from '../../../img/searchPic.png';
import callApi from '../../../config/utils/apiCaller';
import PlaceFilter from '../PlaceFilter/PlaceFilter';
import MyMul from '../../HomepageComponents/Search/MyMul';
import CategorySelection from './reactSelect/CategorySelection';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { showLoader, hideLoader } from '../../../actions';


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
            listCatName: [],
            listId: [],
            listCat: [],
            listCategoryId: [],
            value: { min: 0, max: 500000 },
        }
    }

    convertCurrecyToVnd = (currency) => {
        return currency.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
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
                                        className="col">
                                        <div className="thumb">
                                            <img src={data.placeImageLink[0]}
                                                width="416px"
                                                height="216px"
                                                alt="FAIL TO LOAD" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="place_info">
                                            <p>
                                                <button>Điểm tham quan</button>
                                            </p>
                                            {/* {this.showPlaceCategory(data.categoryId)} */}
                                            <h5>
                                                {data.name}
                                            </h5>
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
                <div className="col-lg-12 col-md-12">
                    <div className="single_place">
                        <div className="row">
                            <div className="col-12">
                                <h1>Không tìm thấy địa điểm phù hợp</h1>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return result;
    }



    //Handle changing when user click in button paging "1 2 3 4 ..."
    handlePageChange = (pageNumber) => {
        const { searchName, listCtiId, listCatId } = this.state;
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
    receivedData = async (searchName, IDCityFilter, IDCategoryFilter,) => {
        const { activePage, value } = this.state;
        const { showLoader, hideLoader } = this.props;
        console.log(searchName);
        console.log(IDCityFilter);
        console.log(IDCategoryFilter);
        console.log(value.max);
        showLoader();
        await axios.get('http://localhost:8090/place/searchClient', {
            params: {
                //park name
                name: searchName ? searchName : "",
                //limit of page
                limit: this.state.limit,
                //page Number  
                page: activePage,
                //city list ID
                cityId: isNaN(parseFloat(IDCityFilter)) === false ? IDCityFilter + '' : null,
                //category List ID
                categoryId: isNaN(parseFloat(IDCategoryFilter)) === false ? IDCategoryFilter + '' : null,
                minValue: value.min,
                maxValue: value.max
            }
        }).then(res => {
            //set state
            console.log(res);
            this.setState({
                totalPage: res.data.totalPage,
                searchList: res.data.listResult,
                totalItems: res.data.totalItems,
            })
            hideLoader();
        }).catch(function (error) {
            console.log(error.response);
        });

    }

    getAllCategories = async () => {
        //get City list
        showLoader();
        await callApi('categories', 'GET', null)
            .then(res => {
                this.setState({
                    listCat: res.data
                })
                hideLoader();
            }).catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                }
            });
    }

    componentDidMount = () => {
        var { location } = this.props;
        // console.log(location);
        // if (location !== undefined) {
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
        console.log(newDecode);
        this.setState({
            // searchedName: name.replace(/%20/g, ' '),
            searchName: newDecode,
            listCtiId: listCtiIdNumber,
            listCatId: listCatIdNumber
        }, () => {
            this.receivedData(newDecode, listCtiIdNumber, listCatIdNumber);
        })
        this.getAllCategories();
    }
    // }
    onChangeSlider = (value) => {
        this.setState({
            value
        }, () => {
            this.receivedData(this.state.searchName, this.state.listCtiId, this.state.listCatId);
        })
    }

    onChangeCate = (res) => {
        let unique = [...new Set()];
        if (res !== null) {
            for (let index = 0; index < res.length; index++) {
                const element = res[index].value;
                // console.log(element);
                unique.push(element);

            }
            // console.log(res);
            // let unique = [...new Set(this.state.listCategoryId)];
            // console.log(unique);
            // console.log(this.state.listCtiId);
            this.setState({
                listCatId: unique
            }, () => {
                this.receivedData(this.state.searchName, this.state.listCtiId, this.state.listCatId);
            })
        }
    }

    render() {
        // debugger
        const { activePage, totalItems, searchList, listCatName,
            searchName, listId, listCat, listCategoryId } = this.state;
        console.log(listCat)
        var options = []
        if (listCat.length > 0) {
            for (let i = 0; i < listCat.length; i++) {
                var option = { value: listCat[i].id, label: listCat[i].categoryName }
                options.push(option);
            }
        }
        // console.log(options);
        const { loader } = this.props;
        if (loader.loading === true) {
            return (
                <div>
                    <Container style={{ fontFamily: 'Inter' }} >
                        {/* <p>Search Name: {searchName} </p> */}
                        <div className="popular_places_area">
                            <div className="container">
                                <div style={{
                                    width: "auto", height: "500px"
                                }}>
                                </div>
                            </div>
                        </div>
                    </Container >
                </div >
          
            );
        } else
            return (
                <div>
                    <Container style={{ fontFamily: 'Inter' }} >
                        {/* <p>Search Name: {searchName} </p> */}
                        <div className="popular_places_area">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="filter_result_wrap">
                                            <h3>Tất cả kết quả với : {searchName ? searchName : "Mọi địa điểm"}</h3>
                                            <CategorySelection options={options}
                                                onChangeCallback={response => this.onChangeCate(response)} />
                                        </div>
                                    </div>

                                    <div className="col-lg-8">
                                        <h3 style={{ visibility: "hidden" }}>Tất cả kết quả với :</h3>
                                        <div className="row">
                                            <div style={{ marginBottom: "50px" }} className="col-4">
                                                <InputRange
                                                    maxValue={500000}
                                                    minValue={0}
                                                    value={this.state.value}
                                                    onChange={value => this.onChangeSlider(value)
                                                        // this.setState({ value })
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            {searchList !== [] ? this.showSearchList(searchList) : ""}
                                        </div>
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

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>

                </div>

            );
    }

}

// export default withRouter(ListPlaceSearched);
const mapStateToProps = state => {
    return {
        loader: state.Loader
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        showLoader: () => {
            dispatch(showLoader())
        },
        hideLoader: () => {
            dispatch(hideLoader())
        }
    }
}

// export default MyCounter;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListPlaceSearched));