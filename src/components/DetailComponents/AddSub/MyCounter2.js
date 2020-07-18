import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVisitor2 } from '../../../actions/index';
import './AddSub.css';
import axios from 'axios';
// const radioToolbar = "radio-toolbar";
class MyCounter2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visitorTypeDetail: [],
        }
    }

    showTicketTypes = (arr) => {
        var result = [];
        if (arr.length > 0) {
            result = arr.map((item, index) => {
                return (
                    // <div key={index}>
                    //     <p>basicType: {item.basicType}</p>
                    //     <p>id: {item.id}</p>
                    //     <p>price: {item.price}</p>
                    //     <p>remaining: {item.remaining}</p>
                    //     <p>ticketTypeId: {item.ticketTypeId}</p>
                    //     <p>typeKey: {item.typeKey}</p>
                    //     <p>typeName: {item.typeName}</p>
                    // </div>
                    <div
                    key={index}
                    style={{ paddingTop: "40px" }}
                    className="row no-gutters">
                    <div className="col-12">
                        <div
                            className="row no-gutters"
                            style={{
                                marginBottom: "10px",
                                background: "#FFFFFF",
                                border: "2px solid #E3E3E3",
                                boxSizing: 'border-box',
                                borderRadius: '10px',
                            }}
                        >
                            <div className="col-5"
                                style={{ display: "table" }}
                            >
                                <p className="myTitleType">
                                    {item.typeName}
                                </p>
                            </div>

                            <div
                                className="col"
                                style={{ display: "table" }}
                            >
                                <p className="myTitlePrice">đ {item.price}</p>
                            </div>
                            {/* <div>còn lại: {item.remaining}</div> */}
                            <div className="col-4">
                                {/* AddSub comp */}
                                <div className="quantityBox">
                                    {/* <MyCounter
                                        item={item}
                                    /> */}
                                </div >
                                {/* End AddSub comp */}
                            </div>
                        </div>
                    </div>
                </div>
                );
            });
        }
        else if (arr.length === 0) {
            return (
                <p>Not Found</p>
            );
        }


        return result;
    }

    componentWillMount = () => {
        const { item } = this.props;
        console.log(item);
        console.log(item.id);
        axios.get('http://localhost:8090/visitorType', {
            params: {
                //place ID
                ticketTypeId: item.id,
            }
        }).then(res => {
            console.log(res.data);
            this.setState({
                visitorTypeDetail: res.data
            })
        }).catch(function (error) {
            console.log(error.response);
        });
    }

    render() {
        //visitorType API
        // basicType: false
        // id: 6
        // price: 100000
        // remaining: 0
        // ticketTypeId: 3
        // typeKey: "Kid"
        // typeName: "Trẻ em"
        const { visitorTypeDetail } = this.state;
        const { item } = this.props;
        return (
            <div>
                {this.showTicketTypes(visitorTypeDetail)}
            </div>
        );
    }


    onUpdateQuantity = (item, quantity) => {
        const { fetchVisitor2 } = this.props;
        if (quantity >= 0) {

            // var { onUpdateProductInCart, onChangeMessage } = this.props;
            this.setState({
                quantity: quantity,
                myId: item.id,
                price: item.price
            }
                , () => {
                    fetchVisitor2(this.state.myId, this.state.quantity, this.state.price);
                }
            );

        }


    }

}
const mapStateToProps = state => {
    return {
        visitorType: state.Ticket
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchVisitor2: (id, qty, price) => {
            dispatch(fetchVisitor2(id, qty, price))
        }
    }
}

// export default MyCounter;
export default connect(mapStateToProps, mapDispatchToProps)(MyCounter2);
