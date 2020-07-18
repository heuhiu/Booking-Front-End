import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ReTicketType.css';
import axios from 'axios';
import VisitorList from '../AddSub/VisitorTypeList';
import { removeVisitorType } from '../../../actions/index';
class ReTicketType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ticketTypeState: [],
            typeChoosing: 1,
            orderDetail: [],
            total: 0,
        }
    }
    componentWillMount = () => {
        var { ticketType } = this.props;
        this.setState({
            ticketTypeState: ticketType
        })
        this.props.removeVisitorType();
        // , () => {
        //     this.setState({
        //         visitorTypeState: this.getTicketType().visitorTypes
        //     })
        // }
        //     )
        // }).catch(function (error) {
        //     console.log(error.response);
        // });
    }

    resetOrder = () => {
        this.props.removeVisitorType()
        this.setState({
            total: 0
        })
    }

    showTicketTypeName = (ticketTypes) => {
        var result = null;
        if (ticketTypes.length > 0) {
            result = ticketTypes.map((ticketType, index) => {
                if (index == 0) {
                    return (
                        <li className="nav-item " >
                            <a className="nav-link active" href={`#${ticketType.id}`} role="tab" data-toggle="tab">
                                {ticketType.typeName}
                            </a>
                        </li>
                    );
                } else {
                    return (
                        <li className="nav-item" onClick={this.resetOrder}>
                            <a className="nav-link" href={`#${ticketType.id}`} role="tab" data-toggle="tab" >
                                {ticketType.typeName}
                            </a>
                        </li>
                    );
                }
            });
        }
        return result;
    }

    showTicketTypeContent = (ticketTypes) => {
        var result = null;
        if (ticketTypes.length > 0) {
            result = ticketTypes.map((ticketType, index) => {
                if (index == 0) {
                    return (
                        <div className="tab-pane active" id={`${ticketType.id}`}>
                            <VisitorList item={ticketType.visitorTypes} />
                        </div>
                    );
                } else {
                    return (
                        <div className="tab-pane" id={`${ticketType.id}`}>
                            <VisitorList item={ticketType.visitorTypes} />
                        </div>
                    );
                }
            });
        }
        return result;
    }

    getTotalMoney = () => {
        var result = 0;
        var { ticket } = this.props
        for (var i = 0; i < ticket.length; i++) {
            result = result + ticket[i].myPrice*ticket[i].quantity
        }
        return result;
    }

    render() {
        // console.log(this.state.ticketTypeState);
        const { ticketTypeState } = this.state
        const { ticket } = this.props
        var total = this.getTotalMoney()
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 col-md-8">
                        <ul className="nav nav-pills" role="tablist">
                            {this.showTicketTypeName(ticketTypeState)}
                        </ul>
                        <div className="tab-content tab-space">
                            {this.showTicketTypeContent(ticketTypeState)}

                        </div>
                    </div>
                </div>
                {total}

            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        ticket: state.Ticket
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        removeVisitorType: () => {
            dispatch(removeVisitorType())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReTicketType);

// export default TicketType;
