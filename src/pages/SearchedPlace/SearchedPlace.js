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
        var { match, location } = this.props;
        console.log(match);
        console.log(location.search);
        const answer_array = location.search.split('?');
        // const result = answer_array.filter(item => item === "name=s");
        // console.log(result);
        console.log(answer_array);
        var name = '';
        var listCtiId = '';
        var listCatId = '';
        for (let index = 0; index < answer_array.length; index++) {
            const element = answer_array[index];
            if (element.split("=")[0] === "name") {
                name = element.split("=")[1]
                console.log(name);
            }
            if (element.split("=")[0] === "listCityID") {
                listCtiId = element.split("=")[1]
                console.log(listCtiId);
            }
            if (element.split("=")[0] === "listCatID") {
                listCatId = element.split("=")[1]
                console.log(listCatId);
            }
        }
        console.log("name: " + name);
        // console.log(name.replace(/%20/g, ' '));
        // console.log(listCtiId.split(','));
        // var a = "1,2,3,4";

        var b = listCtiId.split(',').map(function (item) {
            return parseInt(item, 10);
        });
        var c = listCatId.split(',').map(function (item) {
            return parseInt(item, 10);
        });
        console.log(b);
        console.log(c);
        console.log(isNaN(parseFloat(c)));
        if (location) {
            this.setState({
                searchedName: name.replace(/%20/g, ' '),
                // listCtiId: listCtiId.split(','),
                // listCatId: listCatId.split(',')
                listCtiId:  b ,
                listCatId:  c 
            })
        }
    }
    render() {
        var { match, location } = this.props;
        console.log(location);
        const { searchedName, listCtiId, listCatId } = this.state;
        console.log(searchedName);
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
