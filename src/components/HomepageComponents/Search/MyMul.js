import React, { Component } from 'react';
import { connect } from 'react-redux';
import callApi from '../../../config/utils/apiCaller';

class Checkbox extends React.Component {
    static defaultProps = {
        checked: false
    }
    render() {
        return (
            <input
                type={this.props.type}
                name={this.props.name}
                checked={this.props.checked}
                onChange={this.props.onChange}
            />
        );
    }
}

class MyMul extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listCity: [],
            checkedItems: new Map(),
            listForSend: []
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

    clearAllCheckboxes = () => {
        const clearCheckedItems = new Map();
        this.setState({
            checkedItems: clearCheckedItems,
            listForSend: []
        });
    };

    render() {
        console.log(this.state.checkedItems);
        console.log(this.state.listForSend);
        const checkboxesToRender = this.state.listCity.map(item => {
            return (
                // <label key={item.id}>
                //     {item.name}
                //     <Checkbox
                //         name={item.name}
                //         checked={this.state.checkedItems.get(item.name) || false}
                //         onChange={this.handleChange(item.id)}
                //         type="checkbox"
                //     />
                // </label>
                <div
                    style={{ textAlign: "left", border: "1px solid red" }}
                    key={item.id} className="col-md-3 col-sm-3">
                    <label key={item.id}>
                        {item.name}
                        <Checkbox
                            name={item.name}
                            checked={this.state.checkedItems.get(item.name) || false}
                            onChange={this.handleChange(item.id)}
                            type="checkbox"
                        />
                    </label>
                </div>

            );
        });


        return (
            <div className="row no-gutters">
                {checkboxesToRender}
                {/* <p onClick={this.clearAllCheckboxes}>clear all</p> */}
            </div>
        );
    }

}

export default MyMul;
