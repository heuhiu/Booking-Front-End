import React, { Component } from 'react';
import { connect } from 'react-redux';
import callApi from '../../../config/utils/apiCaller';
import './MyMul.scss';

class Checkbox extends React.Component {
    static defaultProps = {
        checked: false
    }
    render() {
        return (
            <div
                style={{ paddingRight: "10px" }}
                className="box1">
                <input
                    // id="one"
                    type={this.props.type}
                    name={this.props.name}
                    checked={this.props.checked}
                    onChange={this.props.onChange}
                />
                <span className="check"></span>
            </div>
        );
    }
}

class MyMul extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listCity: [],
            listCategory: [],
            checkedItems: new Map(),
            checkedItems2: new Map(),
            listForSend: [],
            listForSendCat: [],
        };
    }


    getCitysAndCategories = () => {
        //get City list
        callApi('city', 'GET', null)
            .then(res => {
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
                this.setState({
                    listCategory: res.data
                })
            }).catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                }
            });
    }

    componentWillMount = () => {
        this.getCitysAndCategories();
    }

    handleChange = (id) => e => {
        const item = e.target.name;
        const isChecked = e.target.checked;
        if (e.target.checked === true) {
            this.setState({
                listForSend: [...this.state.listForSend, id]
            });
        } else {
            this.setState({
                listForSend: this.state.listForSend.filter(temp => temp !== id)
            })
        }
        this.setState({
            checkedItems: this.state.checkedItems.set(item, isChecked)
        });
    };

    handleChange2 = (id) => e => {
        const item = e.target.name;
        const isChecked = e.target.checked;
        if (e.target.checked === true) {
            this.setState({
                listForSendCat: [...this.state.listForSendCat, id]
            });
        } else {
            this.setState({
                listForSendCat: this.state.listForSendCat.filter(temp => temp !== id)
            })
        }
        this.setState({
            checkedItems2: this.state.checkedItems2.set(item, isChecked)
        });
    };

    clearAllCheckboxes = () => {
        const clearCheckedItems = new Map();
        this.setState({
            checkedItems: clearCheckedItems,
            listForSend: []
        });
    };

    render() {
        localStorage.setItem('filterCityIDChecked', JSON.stringify(this.state.listForSend));
        localStorage.setItem('filterCategoryIDChecked', JSON.stringify(this.state.listForSendCat));

        const checkboxesToRender = this.state.listCity.map(item => {
            return (
                <div
                    style={{
                        textAlign: "left",
                        // border: "1px solid red" 
                    }}
                    key={item.id} className="col-lg-4 col-md-6 col-sm-6 col-sx-12">
                    <label key={item.id}>
                        <div className="row no-gutters filterItem">
                            <div
                                style={{ marginLeft: "10px" }}
                                className="col">
                                <Checkbox
                                    name={item.name}
                                    checked={this.state.checkedItems.get(item.name) || false}
                                    onChange={this.handleChange(item.id)}
                                    type="checkbox"
                                />
                            </div>
                            <div className="itemName"  >
                                {item.name}
                            </div>
                        </div>
                    </label>
                </div>
            );
        });

        const checkboxesToRender2 = this.state.listCategory.map(item => {
            return (
                <div
                    style={{
                        textAlign: "left",
                        // border: "1px solid red" 
                    }}
                    key={item.id} className="col-lg-4 col-md-6 col-sm-6 col-sx-12">
                    <label key={item.id}>
                        <div className="row no-gutters filterItem">
                            <div
                                className="col"
                                style={{ marginLeft: "10px" }}
                            >
                                <Checkbox
                                    name={item.categoryName}
                                    checked={this.state.checkedItems2.get(item.categoryName) || false}
                                    onChange={this.handleChange2(item.id)}
                                    type="checkbox"
                                />
                   
                            </div>
                            <div className="itemName" 
                            >
                               {item.categoryName}
                            </div>
                        </div>
                    </label>
                </div>
            );
        });

        return (
            <div>
                <h6
                    className="typeFilter"
                >Thành phố</h6>
                <div className="row no-gutters">
                    {checkboxesToRender}
                    {/* <p onClick={this.clearAllCheckboxes}>clear all</p> */}
                </div>
                <h6
                    className="typeFilter"
                >Danh mục</h6>
                <div className="row no-gutters">
                    {checkboxesToRender2}
                    {/* <p onClick={this.clearAllCheckboxes}>clear all</p> */}
                </div>
            </div>
        );
    }

}

export default MyMul;
