/*!

=========================================================
* BLK Design System PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react'
import PropTypes from 'prop-types'

import ReactSelect from 'react-select'

// Add your info to the docs if you edit this!

/**
 * ### Baseline customizable select!
 * 
 * @version 1.0.0
 * @author Noah Templet ([w3aseL](https://github.com/w3aseL))
 */
class Select extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: null,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  static propTypes = {
    /**
     * The placeholder for the select dropdown.
     */
    placeholder: PropTypes.string,
    /**
     * The color of the select dropdown.
     */
    color: PropTypes.string,
    /**
     * Sets if it multiple options are selectable
     */
    isMulti: PropTypes.bool,
    /**
     * Options to choose from for the select.
     */
    options: PropTypes.array.isRequired,
    /**
     * The function that processes changes to the selector.
     */
    onChange: function(props, propName, componentName) {
      var fn = props[propName];
      if(!fn.prototype ||
         (typeof fn.prototype.constructor !== 'function' &&
          fn.prototype.constructor.length !== 1)) {
          return new Error(propName + 'must be a function with an argument!');
      }
    }
  }

  static defaultProps = {
    placeholder: "Pick an Option!",
    color: "primary",
    options: [ "Option A", "Option B" ]
  }

  componentWillMount() {
    const { options } = this.props

    this.optionList = []

    options.map((label, i) => this.optionList.push({ value: i, label: label }))
  }

  handleChange(value) {
    const { onChange } = this.props

    this.setState({ selected: value })
    
    if(onChange) onChange(value)
  }

  render() {
    const { placeholder, color, isMulti } = this.props

    return (
      <ReactSelect
        className={`react-select react-select-${color}`}
        classNamePrefix="react-select"
        placeholder={placeholder}
        value={this.state.selected}
        isMulti={isMulti}
        onChange={this.handleChange}
        options={this.optionList}
      />
    )
  }
}

export { Select }

export default Select