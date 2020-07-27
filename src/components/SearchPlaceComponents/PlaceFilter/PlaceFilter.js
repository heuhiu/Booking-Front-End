import React, { Component } from 'react';
import  './PlaceFilter.css';




class PlaceFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: {
                start: -50,
                end: 50,
            },
        }
    }

    onChange = (value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;
        return (
          <div>a</div>
      );
    }

}

export default PlaceFilter;
