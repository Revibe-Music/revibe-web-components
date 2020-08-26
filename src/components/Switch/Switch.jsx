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

import ToggleSwitch from 'react-bootstrap-switch'

// Add your info to the docs if you edit this!

/**
 * ### Baseline switch!
 * 
 * @version 1.0.0
 * @author Noah Templet ([w3aseL](https://github.com/w3aseL))
 */
class Switch extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(elem, state) {
    const { onChange } = this.props

    if(onChange) onChange(state)
  }

  render() {
    const { onColor, offColor, defaultValue, onText, offText, ...props } = this.props

    return (
      <ToggleSwitch
        defaultValue={defaultValue}
        onColor={onColor}
        offColor={offColor}
        onText={onText}
        offText={offText}
        onChange={this.handleChange}
        {...props}
      />
    )
  }
}

Switch.propTypes = {
  /** The color when the switch is on. */
  onColor: PropTypes.string,
  /** The color when the switch is off. */
  offColor: PropTypes.string,
  /** The default value of the switch */
  defaultValue: PropTypes.bool,
  /** The text when the switch is on. */
  onText: PropTypes.node,
  /** The text when the switch is off. */
  offText: PropTypes.node,
  /** Handles when the state of the switch changes. */
  onChange: function(props, propName, componentName) {
    var fn = props[propName];
    if(!fn.prototype ||
       (typeof fn.prototype.constructor !== 'function' &&
        fn.prototype.constructor.length !== 1)) {
        return new Error(propName + 'must be a function with an argument!');
    }
  }
}

Switch.defaultProps = {
  onColor: "default",
  offColor: "default",
  defaultValue: false,
  onText: "",
  offText: ""
}

export { Switch }

export default Switch