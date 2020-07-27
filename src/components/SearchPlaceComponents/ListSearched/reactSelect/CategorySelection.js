import React, { Component } from 'react';
import { connect } from 'react-redux';
// import callApi from '../../config/utils/apiCaller';
import Select, { components } from "react-select";
import PropTypes from "prop-types";
import './cat.css'

const Option = props => (
    <div>
      <components.Option {...props}>
        <label class="container1">
        <input type="checkbox" checked={props.isSelected} onChange={() => null} />{" "}
        <label>{props.label}</label>
        </label>
      </components.Option>
    </div>
  );
  
  const MultiValue = props => (
    <components.MultiValue {...props}>
      <span>{props.data.label}</span>
    </components.MultiValue>
  );
class CategorySelection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: PropTypes.arrayOf(
                PropTypes.shape({
                  value: PropTypes.node,
                  label: PropTypes.node
                })
              ).isRequired,
              onChangeCallback: PropTypes.func.isRequired
        }
    }
    static defaultProps = {
        options: []
      };

      render() {
        const { options, onChangeCallback, ...otherProps } = this.props;

        return (
            <Select
        closeMenuOnSelect={false}
        isMulti
        components={{ Option, MultiValue }}
        options={options}
        hideSelectedOptions={false}
        backspaceRemovesValue={false}
        onChange={e => onChangeCallback(e)}
        {...otherProps}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
          ...theme.colors,
            text: 'orangered',
            primary25: 'hotpink',
            primary: 'black',
          },
        })}
      />
      
        );
    }

}


const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default connect(null, mapDispatchToProps)(CategorySelection);
