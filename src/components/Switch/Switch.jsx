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
 * @version 0.0.1
 * @author Noah Templet ([w3aseL](https://github.com/w3aseL))
 */
class Switch extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    /**
     * The color when the switch is on.
     */
    onColor: PropTypes.string,
    /**
     * The color when the switch is off.
     */
    offColor: PropTypes.string,
    /**
     * The default value of the switch
     */
    defaultValue: PropTypes.bool,
    /**
     * The text when the switch is on.
     */
    onText: PropTypes.node,
    /**
     * The text when the switch is off.
     */
    offText: PropTypes.node
  }

  static defaultProps = {
    onColor: "default",
    offColor: "default",
    defaultValue: false,
    onText: "",
    offText: ""
  }

  render() {
    const { onColor, offColor, defaultValue, onText, offText } = this.props

    return (
      <ToggleSwitch
        defaultValue={defaultValue}
        onColor={onColor}
        offColor={offColor}
        onText={onText}
        offText={offText}
      />
    )
  }
}

export { Switch }

export default Switch