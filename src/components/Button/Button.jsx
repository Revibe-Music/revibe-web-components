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
    children: PropTypes.node,
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
    onClick: PropTypes.func,
    /**
     * Changes the button to an outline style.
     */
    outline: PropTypes.bool,
    /**
     * Changes the button to a rounded style.
     */
    round: PropTypes.bool,
    /**
     * Makes the button into a link button.
     */
    link: PropTypes.bool,
    /**
     * Sets the target link for a button.
     */
    href: PropTypes.string,
    /**
     * Sets the icon of a button. Can be used in junction with children.
     */
    icon: PropTypes.node,
    /**
     * Sets the href target of a button.
     */
    target: PropTypes.string
  }

  static defaultProps = {
    children: "Default text!",
    color: "primary",
    active: false,
    disabled: false
  }

  render() {
    const { icon, outline, round, children, color, size, active, disabled, onClick, link, href, target } = this.props

    return (
      <ReactstrapButton
        color={link ? "link" : color}
        size={size}
        active={active}
        disabled={disabled}
        onClick={onClick}
        outline={outline}
        className={`${round && "btn-round"}`}
        link={link}
        href={href}
        target={target}
      >
        {icon && icon}{icon && children && " "}{(!icon || (icon && children != Button.defaultProps.children)) && children}
      </ReactstrapButton>
    )
  }
}

export { Button }

export default Button