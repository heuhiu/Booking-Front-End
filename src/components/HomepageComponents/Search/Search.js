import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import LogoSearch from '../../../img/LogoSearch.png';
import search from '../../../img/search.png';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <form action="" method="post" className="d-block d-flex">
                <div className="fields d-block d-flex">
                    <div className="textfield-search two-third">
                        <img src={LogoSearch} alt="?" width="54.467" height="43.84" />
                    </div>
                    <div className="textfield-search one-third">
                        <input type="text" className="form-control" 
                        placeholder="Ex: food, service, hotel" />
                    </div>
                    <div className="select-wrap one-third">
                        <div className="icon">
                            <span className="fas fa-arrow-down"></span>
                        </div>
                        <select name="" id="" className="form-control"
                            placeholder="Keyword search">
                            <option value="">Bộ Lọc</option>
                            <option value="">San Francisco USA</option>
                            <option value="">Berlin Germany</option>
                            <option value="">Lodon United Kingdom</option>
                            <option value="">Paris Italy</option>
                        </select>
                    </div>
                </div>
                <button type="submit"
                    className="search-submit btn btn-primary ">
                    {/* <i class="fas fa-search"></i>&nbsp;Search */}
                    <img src={search} 
                    alt ="Fail !" 
                    width="17.76" 
                    height="17.76"
                    /> &nbsp; Tìm Kiếm
                </button>
            </form>
        );
    }

}

export default Search;
