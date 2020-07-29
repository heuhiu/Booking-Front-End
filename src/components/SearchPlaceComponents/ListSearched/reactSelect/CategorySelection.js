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
const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "#FFFFFF",
    // match with the menu
    borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
    // Overwrittes the different states of border
    borderColor: state.isFocused ? "black" : "none",
    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "red" : "blue"
    }
  }),
  menu: base => ({
    ...base,
    // override border radius to match the box
    borderRadius: 10,
    // kill the gap
    marginTop: 0
  }),
  menuList: base => ({
    ...base,
    // kill the white space on first and last option
    padding: 0
  })
};
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
        hideSelectedOptions={true}
        backspaceRemovesValue={false}
        onChange={e => onChangeCallback(e)}
        styles={customStyles}
        closeMenuOnSelect={true}
      {...otherProps}
      theme={(theme) => ({
        ...theme,
        borderRadius: "10px",
        colors: {
        ...theme.colors,
          text: 'orangered',
          primary25: '#FF7062',
          primary: '#FF7062',
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
