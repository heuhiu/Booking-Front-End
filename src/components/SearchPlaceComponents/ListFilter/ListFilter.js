import React, { Component } from 'react';
import { connect } from 'react-redux';
import callApi from '../../../config/utils/apiCaller';
import './ListFilter.scss';
import { showLoader, hideLoader } from '../../../actions';
import { Collapse } from 'react-bootstrap';

class Checkbox extends React.Component {
    static defaultProps = {
        checked: false //checked value of checkbox
    }
    render() {
        return (
            <div
                style={{ paddingRight: "00px" }}
                className="box2">
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

class ListFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listCity: [],               //List contain all City
            listCategory: [],           //List contain all Category
            checkedCity: new Map(),     //Create Map state item for City Group Checkbox
            checkedCate: new Map(),     //Create Map state item for Category Group Checkbox
            ListIDFoSend: [],           //List city ID for send to seached page
            ListIDFoSendCat: [],        //List Cat ID for send to seached page
            open: true,
            open2: true
        };
    }

    //Get all City and Category by API
    getCitysAndCategories = async () => {
        const { showLoader, hideLoader } = this.props;
        //get City list
        showLoader();
        await callApi('city', 'GET', null)
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
        await callApi('categories', 'GET', null)
            .then(res => {
                this.setState({
                    listCategory: res.data
                })
                // console.log(res);
                hideLoader();
            }).catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                }
            });
    }

    //Call
    componentDidMount = () => {
        // this.getCitysAndCategories();
    }

    //Handle set check/checked & add to list of City ID
    handleChange = (id) => e => {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.props.removeCityID(id);
        if (e.target.checked === true) {
            this.setState({
                ListIDFoSend: [...this.state.ListIDFoSend, id]
            }, () => {
                this.props.setmMul(this.state.ListIDFoSend, this.state.ListIDFoSendCat);

            });
        } else {
            this.setState({
                ListIDFoSend: this.state.ListIDFoSend.filter(temp => temp !== id)
            }, () => {
                this.props.setmMul(this.state.ListIDFoSend, this.state.ListIDFoSendCat);

            })
        }
        this.setState({
            checkedCity: this.state.checkedCity.set(item, isChecked)
        });
    };

    //Handle set check/checked & add to list of Cate ID
    handleChange2 = (id) => e => {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.props.removeCategoryID(id);

        if (e.target.checked === true) {
            this.setState({
                ListIDFoSendCat: [...this.state.ListIDFoSendCat, id]
            }, () => {
                this.props.setmMul(this.state.ListIDFoSend, this.state.ListIDFoSendCat);
            });

        } else {
            this.setState({
                ListIDFoSendCat: this.state.ListIDFoSendCat.filter(temp => temp !== id)
            }, () => {
                this.props.setmMul(this.state.ListIDFoSend, this.state.ListIDFoSendCat);
            })
        }
        this.setState({
            checkedCate: this.state.checkedCate.set(item, isChecked)
        });
    };

    //Set new map to clear al checkbox
    clearAllCheckboxes = () => {
        const clearCheckedItems = new Map();
        this.setState({
            checkedCity: clearCheckedItems,
            checkedCate: clearCheckedItems,
            ListIDFoSend: [],
            ListIDFoSendCat: []
        });
    };


    render() {
        const { listCategory, listCity, listCitySelected, listCategorySelected } = this.props;
        // console.log(listCitySelected);
        // const checkboxesToRender = this.state.listCity.map(item => {
        const checkboxesToRender = listCity.map(item => {
            const checkSelected = listCitySelected.some(temp => temp === item.id)
            return (
                <label
                    key={item.id}
                    style={{
                        textAlign: "left",
                        padding: "10px 10px 10px 0px"
                    }}
                    key={item.id} className="col-lg-12 col-md-12 col-sm-12 col-sx-12">

                    <div className="row no-gutters filterItem">
                        <div
                            className="col-2"
                        >
                            <Checkbox
                                name={item.name}
                                checked={this.state.checkedCity.get(item.name) || checkSelected || false}
                                onChange={this.handleChange(item.id)}
                                type="checkbox"
                            />
                        </div>
                        <div className="itemName col"  >
                            {item.name}
                        </div>
                    </div>
                </label>
            );
        });

        // const checkboxesToRender2 = this.state.listCategory.map(item => {
        const checkboxesToRender2 = listCategory.map(item => {
            const checkSelected2 = listCategorySelected.some(temp => temp === item.id)
            return (
                <label
                key={item.id}
                    style={{
                        textAlign: "left",
                        padding: "10px 10px 10px 0px"
                    }}
                    key={item.id} className="col-lg-12 col-md-12 col-sm-12 col-sx-12">
                        <div className="row no-gutters filterItem">
                            <div
                                className="col-2"
                            >
                                <Checkbox
                                    name={item.categoryName}
                                    checked={this.state.checkedCate.get(item.categoryName) || checkSelected2 || false}
                                    onChange={this.handleChange2(item.id)}
                                    type="checkbox"
                                />
                            </div>
                            <div className="itemName col"
                            >
                                {item.categoryName}
                            </div>
                        </div>
                </label>
            );
        });

        return (
            <div>
                <div 
                onClick={() => this.setState({ open: !this.state.open })}
                aria-controls="example-collapse-text"
                aria-expanded={this.state.open}
                className="filterByCityBox">
                    <h6 className="typeFilterCity">Thành phố</h6>
                    <hr style={{ border: "1.5px solid #E3E3E3", borderRadius: "2px" }} />
                    <Collapse in={this.state.open}>
                    <div  id="example-collapse-text" className="row no-gutters">
                        {checkboxesToRender}
                    </div>
                    </Collapse>
                </div>
                
                <br></br>
                <div 
                 onClick={() => this.setState({ open2: !this.state.open2 })}
                 aria-controls="example-collapse-text2"
                 aria-expanded={this.state.open2}
                className="filterByCityBox">
                <h6 className="typeFilterCity">Danh mục</h6>
                    <hr style={{ border: "1.5px solid #E3E3E3", borderRadius: "2px" }} />
                    <Collapse in={this.state.open2}>
                    <div  id="example-collapse-text2" className="row no-gutters">
                        {checkboxesToRender2}
                        {/* {this.showList(this.state.listCity)} */}
                    </div>
                    </Collapse>
                </div>

                {/* <span
                    style={{ color: "#FF7062", fontWeight: "600" }}
                    type="button"
                    onClick={this.clearAllCheckboxes}>Xóa bộ lọc
                    </span> */}
            </div>
        );
    }

}

// export default MyMul;
const mapStateToProps = state => {
    return {
        loader: state.Loader,
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
export default connect(mapStateToProps, mapDispatchToProps)(ListFilter);