import React from 'react'
import PropTypes from 'prop-types'

import { Button as ReactstrapButton } from 'reactstrap'

// Add your info to the docs if you edit this!

/**
 * ### Baseline button!
 * 
 * @version 0.0.1
 * @author Noah Templet ([w3aseL](https://github.com/w3aseL))
 */
class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    /**
     * The button's children elements. Usually text!
     */
    children: PropTypes.node.isRequired,
    /**
     * Color of the button. [primary, secondary, info, success, danger, warning]
     */
    color: PropTypes.string.isRequired,
    /**
     * Size of the button. [sm, lg]
     */
    size: PropTypes.string,
    /**
     * Determines if the button is active.
     */
    active: PropTypes.bool.isRequired,
    /**
     * Determines if the button is disabled.
     */
    disabled: PropTypes.bool.isRequired,
    /**
     * The function to fire on button click.
     */
    onClick: PropTypes.func
  }

  static defaultProps = {
    children: "Default Text!",
    color: "primary",
    active: false,
    disabled: false
  }

  render() {
    const { children, color, size, active, disabled, onClick } = this.props

    return (
      <ReactstrapButton
        color={color}
        size={size}
        active={active}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </ReactstrapButton>
    )
  }
}

export { Button }

export default Button