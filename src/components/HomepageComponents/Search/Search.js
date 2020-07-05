import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';
import LogoSearch from '../../../img/LogoSearch.png';
import search from '../../../img/search.png';
import { Form } from 'react-bootstrap';
import callApi from '../../../config/utils/apiCaller';
import MyMul from './MyMul';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggleFilter: true,
            isGoing: true,
            txtParkName: '',
            txtCityID: '',
            listCity: [],
            listCategories: []
        }
    }

    toggleFilter = () => {
        this.setState({
            toggleFilter: !this.state.toggleFilter
        })
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        // var value = target.name === 'isGoing' ? target.checked : target.value;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }

    handleInputChange = (event) => {
        const { listCity } = this.state;
        const target = event.target;
        const value = target.name === 'isGoing' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    onSubmitSearch = (e) => {
        // e.preventDefault();
        localStorage.setItem('searchKeyword', JSON.stringify(this.state.txtParkName));
    }

    getCitysAndCategories = () => {
        //get City list
        callApi('city', 'GET', null)
            .then(res => {
                console.log(res.data);
                this.setState({
                    listCity: res.data
                })
            }).catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                }
            });
        //get Categories list
        callApi('categories', 'GET', null)
            .then(res => {
                console.log(res.data);
            }).catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                }
            });
    }

    componentWillMount = () => {
        this.getCitysAndCategories();
    }

    showList = (list, type) => {
        var result = null;
        if (list.length > 0) {
            result = list.map((data, index) => {
                if (type === "city") {
                    return (
                        //specifire key for each data
                        <div
                            style={{ textAlign: "left", border: "1px solid red" }}
                            key={data.id} className="col-md-3 col-sm-3">
                            <label
                            >
                                <input
                                    name={data.name + data.id}
                                    type="checkbox"
                                    checked={this.state.isGoing}
                                    onChange={this.onChange}
                                />
                                         &nbsp;
                                         {data.name}
                                {/* {data.id} */}
                            </label>
                        </div>
                    );
                }
                else {

                }
            });
        }
        else if (list.length === 0) {
            return (
                <p>Not Found</p>
            );
        }
        return result;
    }

    render() {
        const { toggleFilter, isGoing, txtParkName } = this.state;
        // console.log(txtParkName);
        return (
            <div>
                <form
                    className="d-block d-flex">
                    <div className="fields d-block d-flex">
                        <div className="textfield-search two-third">
                            <img src={LogoSearch} alt="?" width="54.467" height="43.84" />
                        </div>
                        <div className="textfield-search one-third">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ex: food, service, hotel"
                                name="txtParkName"
                                value={txtParkName}
                                onChange={this.onChange}
                            />
                        </div>
                        <div
                            className="select-wrap one-third">
                            <div
                                onClick={this.toggleFilter}
                                style={{ paddingLeft: "0px" }}
                                className="form-control">
                                <div className="filterPanel">
                                    Bộ lọc
                                </div>
                            </div>
                            <div
                                style={{ visibility: toggleFilter ? "hidden" : "visible" }}
                                className="filterBox">
                                <div className="row">
                                    <div className="col-12">
                                        <h6>Thành Phố</h6>
                                        {/* <div className="row"> */}
                                            <MyMul />
                                            {/* {this.showList(this.state.listCity, "city")} */}
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <Link
                        onClick={this.onSubmitSearch}
                        className="search-submit"
                        to="/SearchedPlace">
                        <button

                            className="searchbtn"
                        >
                            <img src={search}
                                alt="Fail !"
                                width="17.76"
                                height="17.76"
                            /> &nbsp; Tìm Kiếm
                        </button>
                    </Link>
                </form>

            </div >
        );
    }

}

export default Search;
