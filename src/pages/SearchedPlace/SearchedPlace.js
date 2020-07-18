import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Menu from '../../components/Menu/Menu';
import ListPlaceSearched from '../../components/SearchPlaceComponents/ListSearched/ListPlaceSearched'
class SearchedPlace extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchedName: null,
            listCtiId: [],
            listCatId: []
        }
    }

    componentWillMount = () => {
        var { location } = this.props;
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

        if (location) {
            this.setState({
                searchedName: name.replace(/%20/g, ' '),
                listCtiId: listCtiIdNumber,
                listCatId: listCatIdNumber
            })
        }
    }
    render() {
        const { searchedName, listCtiId, listCatId } = this.state;
        return (
            <div>
                <Menu />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <ListPlaceSearched searchName={searchedName} listCtiId={listCtiId} listCatId={listCatId} />
            </div>
        );
    }

}

export default SearchedPlace;
