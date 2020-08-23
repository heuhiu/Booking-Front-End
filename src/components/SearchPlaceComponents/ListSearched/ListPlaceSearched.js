import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import Pagination from "react-js-pagination";
import './ListPlaceSearched.css';
import failToSearchPic from '../../../img/Annotation 2020-08-23 162910.png';
import callApi from '../../../config/utils/apiCaller';
// import MyMul from '../../HomepageComponents/Search/MyMul';
// import CategorySelection from './reactSelect/CategorySelection';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { showLoader, hideLoader } from '../../../actions';
import CurrencyInput from 'react-currency-input';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListFilter from '../ListFilter/ListFilter';
// import API_URL from '../../../constants/ConfigAPI';
import * as Config from '../../../constants/ConfigAPI';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


class ListPlaceSearched extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,      //Current page number
            totalPage: 1,       //Total page paging
            totalItems: 0,      //Total item searched
            limit: 5,          //Number of items appear
            searchList: [],     //ListSeached temporary
            searchName: "",
            listCtiId: [],
            listCatId: [],
            listCatName: [],
            listId: [],
            listCat: [],
            listCategoryId: [],
            value: { min: 0, max: 1000000 },
            // value: { min: 99999999, max: 99999999 },
            minValueForSlider: 0,//different usage
            maxValueForSlider: 1000000,
            catName: [],
            toggleDropdown: false,
            amount: "0.00",
            checkApiListSearched: false,
            checkApiCat: false,
            cityMul: [],
            catMul: [],
            listCity: [],
            listCategory: [],
            notFoundPage: false,
            checkSearch: false,
        }
    }

    convertCurrecyToVnd = (currency) => {
        return currency.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
    }

    convertIdToName = (id) => {
        const { listCat } = this.state;
        var options = []
        if (listCat.length > 0) {
            for (let i = 0; i < listCat.length; i++) {
                var option = { value: listCat[i].id, label: listCat[i].categoryName }
                options.push(option);
            }
        }
        // console.log(options);
        for (let index = 0; index < options.length; index++) {
            var element = options[index].value;
            var convertedName = options[index].label;
            if (id === element) {
                return convertedName;
            }
        }
    }


    getListCategories = (list) => {
        var result = null;
        // console.log(list);
        if (list.length > 0) {
            result = list.map((data, index) => {
                // console.log(data);
                return (
                    <div key={index} className="col-4">
                        <button className="overflowCate" key={index} style={{ margin: "5px 5px 0px 0px" }}>{this.convertIdToName(data)}</button>
                    </div>
                )
            });
            return result;
        }


        // else if (list.length === 0 && this.props.loader.loading === false) {
        //     return (
        //         <div>not found</div>
        //     );
        // }

        return result;
    }

    getCategoriesnCity = async () => {
        const { showLoader, hideLoader } = this.props;
        showLoader();
        Promise.all([
            await callApi('city', 'GET', null)
                .then(res => {
                    this.setState({
                        listCity: res.data
                    })
                }).catch(function (error) {
                    if (error.response) {
                        // console.log(error.response.data);
                    }
                }),
            //get Categories list
            await callApi('categories', 'GET', null)
                .then(res => {
                    this.setState({
                        listCat: res.data,
                        checkApiCat: true
                    })
                }).catch(function (error) {
                    if (error.response) {
                        // console.log(error.response.data);
                    }
                }),
        ]).then(
            hideLoader()
        );
    }


    //Show items searched
    showSearchList = (searchList) => {
        var result = null;
        if (searchList.length > 0) {
            result = searchList.map((data, index) => {
                // console.log(data);
                return (
                    // <Slide key={index} left delay={index * 50} >
                    <Link
                        style={{ textDecoration: "none" }}

                        to={{
                            pathname: `/placeDetail/${data.id}`
                        }}>
                        <div key={data.index} className="col-lg-12 col-md-12">
                            <div className="single_place">
                                <div className="row">
                                    <div
                                        className="col">
                                        <div className="thumb">
                                            <img src={data.placeImageLink[0]}
                                                width="416px"
                                                height="250px"
                                                alt="FAIL TO LOAD" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="place_info">
                                            <div className="row no-gutters">
                                                {this.getListCategories(data.categoryId)}
                                            </div>
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
                    // </Slide>
                );
            });
        }
        else if (searchList.length === 0 && this.props.loader.loading === false) {
            return (
                <div className="col-lg-12 col-md-12">
                    {/* <div className="single_place"> */}
                    <div className="row">
                        <div className="col-12">
                            {/* <h1>Không tìm thấy địa điểm phù hợp</h1> */}
                            <img src={failToSearchPic} width="100%" height="auto" alt="FALT TO LOAD"/>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            );
        }
        return result;
    }
    //Handle changing when user click in button paging "1 2 3 4 ..."
    handlePageChange = async (pageNumber) => {
        const { searchName, listCtiId, listCatId } = this.state;
        if (pageNumber !== this.state.activePage) {
            this.setState({
                activePage: pageNumber
            }
                , () => {
                    this.receivedData(searchName, listCtiId, listCatId);
                }
            )
        }
        // this.forceUpdate();
    }

    onTogglePriceRange = () => {
        this.setState({
            toggleDropdown: !this.state.toggleDropdown
        })
    }

    handleChange = (e, maskedvalue, floatvalue) => {
        this.setState({
            value: {
                min: maskedvalue,
                max: this.state.value.max
            }
        });
    }

    handleChange2 = (e, maskedvalue, floatvalue) => {
        this.setState({
            value: {
                max: maskedvalue,
                min: this.state.value.min
            }
        });
    }

    onChangePriceMax = (e) => {
        var target = e.target;
        var name = target.name;
        var myValue = target.value;
        // if (value !== "") {
        this.setState({
            value: {
                [name]: myValue === "" ? 1 : myValue,
                min: this.state.value.min
            }
        })
        this.forceUpdate();
        // }
    }

    onChangePriceMin = (e) => {
        var target = e.target;
        var name = target.name;
        var myValue = target.value;
        // if (value !== "") {
        this.setState({
            value: {
                [name]: myValue === "" ? 0 : myValue,
                max: this.state.value.max
            }
        })
        // }
    }

    //Received data from API
    receivedData = async (searchName, IDCityFilter, IDCategoryFilter,) => {
        const { activePage, value } = this.state;
        const { showLoader, hideLoader } = this.props;
        // console.log(searchName);
        // console.log(isNaN(IDCityFilter[0]));
        // console.log(isNaN(IDCategoryFilter[0]));
        // console.log(value.min);
        // console.log(String(value.min));
        // if(searchName === "!"){
        //     this.setState({
        //         searchList: [],
        //         checkSearch: false
        //     }, () => {
        //         toast.error('URL không hợp lệ!', {
        //             position: "bottom-right",
        //             autoClose: 5000,
        //             hideProgressBar: true,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined,
        //         });
        //     })
        // }
        if (searchName === "" && isNaN(IDCityFilter[0]) === true && isNaN(IDCategoryFilter[0]) === true) {
            // if (false) {
            this.setState({
                searchList: [],
                checkSearch: false
            }, () => {
                toast.error('Cần chọn ít nhất 1 Thành phố hoặc Danh mục !', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })

        }
        else {
            var min = Number(String(value.min).replace(/\./g, ""));
            var max = Number(String(value.max).replace(/\./g, ""));
            showLoader();
            await axios.get(`${Config.API_URL}/place/searchClient`, {
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
                    minValue: min,
                    maxValue: max
                }
            }).then(res => {
                //set state
                // console.log(res);
                this.setState({
                    totalPage: res.data.totalPage,
                    searchList: res.data.listResult,
                    totalItems: res.data.totalItems,
                    checkApiListSearched: true,
                    checkSearch: true
                }, () => {
                    if (this.state.checkApiCat === true && this.state.checkApiListSearched === true)
                        hideLoader();
                })

            }).catch(function (error) {
                // console.log(error.response);
            });
        }
    }

    getAllCategories = async () => {
        //get City list
        const { showLoader, hideLoader } = this.props;
        showLoader();
        await callApi('categories', 'GET', null)
            .then(res => {
                // debugger
                this.setState({
                    listCat: res.data,
                    checkApiCat: true
                }, () => {
                    if (this.state.checkApiCat === true && this.state.checkApiListSearched === true)
                        hideLoader();
                })
            }).catch(function (error) {
                if (error.response) {
                    hideLoader();
                    // console.log(error.response.data);
                }
            });
        //get City list
    }

    setmMul = (cityMul, catMul) => {
        this.setState({
            cityMul,
            catMul
        });
    }

    removeCityID = (id) => {
        const { listCtiId } = this.state;
        // console.log(listCtiId);
        const index = listCtiId.indexOf(id);
        if (index > -1) {
            listCtiId.splice(index, 1);
        }
        // array = [2, 9]
        // console.log(listCtiId);

        this.setState({
            listCtiId: listCtiId,
        });
    }
    removeAllfilter = () => {
        // const {  listCtiId, listCatId,listCity,listCat } = this.state;
        this.setState({
            listCatId: [],
            listCtiId: []
        }, () => {
            // alert(this.state.listCtiId)
            // alert(this.state.listCatId)
            // console.log("")
            // this.forceUpdate()
            this.receivedData(this.state.searchName, this.state.listCtiId, this.state.listCatId);
        });
    }
    removeCategoryID = (id) => {
        const { listCatId } = this.state;
        // console.log(listCatId);
        const index = listCatId.indexOf(id);
        if (index > -1) {
            listCatId.splice(index, 1);
        }
        // array = [2, 9]
        // console.log(listCatId);

        this.setState({
            listCatId: listCatId,
        });
    }

    removeNaN = (oldArray) => {
        return oldArray.filter(value => !Number.isNaN(value));
    }

    isValid = (str) => {
        return /^[a-zA-Z0-9]{0,225}$/g.test(str);
        // ~!@#$%^&*()-_=+[]\{}|;':",./<>?
    }

    componentDidMount = () => {
        window.scrollTo(0, 0)
        // debugger
        var { location } = this.props;
        // console.log(location);
        // if (location !== undefined) {
        // console.log(location.search);

        if (location.search !== "") {
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
            var newDecode = decodeURIComponent(name);
            this.setState({
                searchName: newDecode,
                listCtiId: listCtiIdNumber,
                listCatId: listCatIdNumber
            }, () => {
                this.getCategoriesnCity();
                this.receivedData(newDecode, listCtiIdNumber, listCatIdNumber);
            })
        } else {
            this.setState({
                searchList: [],
                checkSearch: false
            }, () => {
                this.getCategoriesnCity();
                toast.error('Cần chọn ít nhất 1 Thành phố hoặc Danh mục !', {
                    position: "bottom-right",
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
        }
    }

    onChangeSlider = (value) => {

        this.setState({
            value
        })

    }

    onChangeSliderSet = () => {
        if (this.state.value.min >= this.state.value.max) {
            toast.error('Giá nhỏ nhất phải nhỏ hơn giá lớn nhất, vui lòng nhập lại!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            this.receivedData(this.state.searchName, this.state.listCtiId, this.state.listCatId);
            this.onTogglePriceRange();
        }
    }

    removeDublicate = (list) => {
        return [...new Set(list)];
        // console.log(unique)
        // return unique
    }
    // onSelectCat=()=>{
    //     this.props.history.replace("/searchedPlace?name=Vin3")
    //     window.history.pushState("/searchedPlace?name=Ba na");
    //     this.props.history.replace('/searchedPlace?name=bana')
    //     window.location.href = window.location.href + '/searchedPlace?name=bana';

    // }
    onSelectCat = () => {
        const { catMul, cityMul, listCtiId, listCatId, searchName } = this.state
        var jointCityID = cityMul.concat(listCtiId)
        var jointCategoryID = catMul.concat(listCatId)
        const cityRemoveNaN = this.removeNaN(jointCityID)
        const cateRemoveNaN = this.removeNaN(jointCategoryID)
        const cityRemoveDub = this.removeDublicate(cityRemoveNaN);
        const cateRemoveDub = this.removeDublicate(cateRemoveNaN);
        var pathLink = `/searchedPlace${searchName ? `?name=${searchName}` : ""}`;
        const pathListCity = `?listCityID=${cityRemoveDub}`
        const pathListCat = `?listCatID=${cateRemoveDub}`
        this.setState({
            listCtiId: cityRemoveDub,
            listCatId: cateRemoveDub
        })
        if (cityRemoveDub.length > 0) {
            pathLink += pathListCity;
        }
        if (cateRemoveDub.length > 0) {
            pathLink += pathListCat;
        }
        if (pathLink !== "") {
            this.props.history.push(pathLink);
        }
        this.setState({
            activePage: 1
        })
        this.receivedData(this.state.searchName, cityRemoveDub, cateRemoveDub);
    }

    onResetSliderSet = () => {
        this.setState({
            value: {
                min: this.state.minValueForSlider,
                max: this.state.maxValueForSlider
            }
        });
    }

    onChangeCate = (res) => {
        let unique = [...new Set()];
        if (res !== null) {
            for (let index = 0; index < res.length; index++) {
                const element = res[index].value;
                // console.log(element);
                unique.push(element);
            }
            // console.log(unique.join());
            // console.log(unique);
            this.setState({
                listCatId: unique
            }, () => {

                // this.props.history.push(`${this.searchPathLink()}`);
                // this.receivedData(this.state.searchName, this.state.listCtiId, this.state.listCatId);
            })
        }
    }

    render() {
        // debugger
        const { activePage, totalItems, searchList,
            searchName, listCat, listCity, listCtiId, listCatId } = this.state;
        // console.log(cityMul);
        // console.log(catMul);
        var nameCondition = searchName ? searchName : "mọi địa điểm"
        // const listCtiSEND = listCtiId;
        // const listCateSEND = listCatId;
        var options = [];
        if (listCat.length > 0) {
            for (let i = 0; i < listCat.length; i++) {
                var option = { value: listCat[i].id, label: listCat[i].categoryName }
                options.push(option);
            }
        }
        const { loader } = this.props;
        // if (loader.loading === true) {
        if (this.state.notFoundPage === true) {
            return (
                <div>
                    <Container style={{ fontFamily: 'Inter' }} >
                        {/* <p>Search Name: {searchName} </p> */}
                        <div className="popular_places_area">
                            <div className="container">

                                <div style={{
                                    width: "auto", height: "500px"
                                }}>
                                    WRONG URL
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
                        <div className="popular_places_area">
                            <div className="container">
                                {/* <div className="row">
                                    <div className="col-6">
                                        <Zoom top cascade>
                                            {animateSearchName}
                                        </Zoom>
                                    </div>
                                </div> */}
                                <Zoom duration={300} right cascade >
                                    <div className="b">Tất cả kết quả với: &quot;{nameCondition}&quot;</div>
                                </Zoom>
                                <div
                                    style={{ marginTop: "26px" }}
                                    className="row">
                                    <div className="col-lg-4">
                                        <div className="filter_result_wrap">
                                            {/* <CategorySelection
                                                options={options}
                                                catSelect={listCatId}
                                                onChangeCallback={response => this.onChangeCate(response)} /> */}
                                            {/* <ListFilter 
                                            listCategory={listCat} 
                                            listCity={listCity} 
                                            setmMul={this.setmMul}/> 
                                            */}
                                            <ListFilter
                                                listCategory={listCat}
                                                listCity={listCity}
                                                listCitySelected={listCtiId}
                                                listCategorySelected={listCatId}
                                                setmMul={this.setmMul}
                                                removeCityID={this.removeCityID}
                                                removeCategoryID={this.removeCategoryID}
                                            // removeAll={this.removeAllfilter}
                                            />
                                            <br></br>
                                            <div className="row">
                                                <div className="col-4">

                                                </div>
                                                <div className="col-3">
                                                    {/* <button
                                                    style={{ paddingRight: "0px"}}
                                                        onClick={this.removeAllfilter}
                                                        type="button"
                                                        className="resetFilterBtn">
                                                        Đặt lại
                                                    </button> */}
                                                </div>
                                                <div className="col-5">
                                                    <button
                                                        onClick={this.onSelectCat}
                                                        type="button"
                                                        className="filterBtn">
                                                        Lọc kết quả
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="row no-gutters">
                                            {/* <Slide left delay={300} > */}
                                            {/* <div  className="priceFilter row"> */}
                                            <div onClick={this.onTogglePriceRange} className="col-6">
                                                <div className="priceFilter row no-gutters">
                                                    <div style={{ boder: "1px solid green" }} className="col">
                                                        <p>
                                                            <div className="row">
                                                                <div className="col">
                                                                    {this.convertCurrecyToVnd(this.state.value.min)}
                                                                </div>
                                                                <div className="col-1">
                                                                    -
                                                                </div>
                                                                <div className="col">
                                                                    {this.convertCurrecyToVnd(this.state.value.max)}
                                                                </div>
                                                            </div>
                                                        </p>
                                                    </div>
                                                    <div className="col-2">
                                                        <p>
                                                            <svg className="svgLOGO" style={{ marginLeft: "0px" }} width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 0.999999L11 12L21 1" stroke="#FF7062" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* </div> */}
                                            {/* </Slide> */}
                                        </div>
                                        <div
                                            style={{ visibility: this.state.toggleDropdown === false ? "hidden" : "visible" }}
                                            className="row no-gutters">
                                            <div style={{ padding: "20px" }} className="dropBoxPriceRange col-6">
                                                <label className="priceRangeLabel">Khoảng giá</label>

                                                <div className="row no-gutters">
                                                    <div className="col-5">
                                                        <CurrencyInput
                                                            className="maxminBtn"
                                                            // style={{ border: "5px solid green" }}
                                                            suffix=" đ"
                                                            precision="0"
                                                            maxlength="12"
                                                            maxValueForSlider="50"
                                                            decimalSeparator=","
                                                            thousandSeparator="."
                                                            value={this.state.value.min}
                                                            onChange={this.handleChange} />
                                                    </div>
                                                    <div className="col-2">
                                                        <hr style={{ border: "1.5px solid #E3E3E3", borderRadius: "2px" }} />
                                                    </div>
                                                    <div className="col-5">
                                                        <CurrencyInput
                                                            suffix=" đ"
                                                            className="maxminBtn"
                                                            precision="0"
                                                            maxlength="12"
                                                            decimalSeparator=","
                                                            thousandSeparator="."
                                                            value={this.state.value.max}
                                                            onChange={this.handleChange2} />
                                                    </div>
                                                </div>

                                                <div className="mrtb-30">
                                                    <InputRange
                                                        maxValue={this.state.maxValueForSlider}
                                                        minValue={this.state.minValueForSlider}
                                                        step={10000}
                                                        value={this.state.value}
                                                        onChange={value => this.onChangeSlider(value)}
                                                    // onChangeComplete={value => this.onChangeSliderSet()}
                                                    />
                                                </div>
                                                <div className="row no-gutters">
                                                    <div className="col">
                                                    </div>
                                                    <div className="col-5">
                                                        <button className="resetFilterPricebtn" onClick={this.onResetSliderSet}>Đặt lại</button>
                                                    </div>
                                                    <div className="col-6">
                                                        <button className="filterPricebtn" onClick={this.onChangeSliderSet}>Xếp giá</button>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                        {/* <Slide left cascade> */}

                                        <Fade cascade>
                                            <div className="row">
                                                {!this.props.loader.loading === true ? this.showSearchList(searchList) : ""}
                                            </div>
                                        </Fade>
                                        {/* </Slide> */}
                                        <div style={{ visibility: loader.loading === false && this.state.checkSearch === true ? "visible" : "hidden" }}>
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
                        </div>
                        <ToastContainer />
                    </Container>

                </div>

            );
    }

}

// export default withRouter(ListPlaceSearched);
const mapStateToProps = state => {
    return {
        loader: state.Loader,
        listCategory: state.Categories,
        listCity: state.City
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