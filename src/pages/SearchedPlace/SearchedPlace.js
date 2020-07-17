import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Menu from '../../components/Menu/Menu';
import ListPlaceSearched from '../../components/SearchPlaceComponents/ListSearched/ListPlaceSearched'
class SearchedPlace extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Menu />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <ListPlaceSearched />
            </div>
        );
    }

}

export default SearchedPlace;
