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
        const target = event.target;
        const value = target.name === 'isGoing' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    onSubmitSearch = (e) => {
        // e.preventDefault();
        if (this.state.txtParkName === null) {
            localStorage.setItem('searchKeyword', JSON.stringify(""));

        } else if (this.state.txtParkName === '') {
            localStorage.setItem('searchKeyword', JSON.stringify(""));
        } else {
            localStorage.setItem('searchKeyword', JSON.stringify(this.state.txtParkName));

        }
    }

    render() {
        const { toggleFilter, txtParkName } = this.state;
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
                                    Bộ lọc  <i className="fas fa-chevron-down"></i>
                                </div>

                            </div>
                            <div
                                style={{ visibility: toggleFilter ? "hidden" : "visible" }}
                                className="filterBox">
                                <div className="row">
                                    <div className="col-12">
                                        <MyMul />
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
