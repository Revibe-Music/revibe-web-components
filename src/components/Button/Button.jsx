import React from 'react'
import PropTypes from 'prop-types'

import { Button as ReactstrapButton } from 'reactstrap'

// Add your info to the docs if you edit this!

/**
 * ### Baseline button!
 * 
 * @version 1.0.0
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
     * Changes the button to a simple style.
     */
    simple: PropTypes.simple,
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
    target: PropTypes.string,
    /**
     * Sets the social media of choice for the button. Overrides color.
     * 
     * List: [ twitter, facebook, google, linkedin, pinterest, youtube, tumblr, github, behance, dribble, reddit ]
     */
    social: PropTypes.string
  }

  static defaultProps = {
    active: false,
    disabled: false
  }

  getIconClassBySocial = social => {
    switch(social) {
      case "twitter":
        return "fab fa-twitter";
      case "facebook":
        return "fab fa-facebook";
      case "google":
        return "fab fa-linkedin";
      case "linkedin":
        return "fab fa-linkedin";
      case "pinterest":
        return "fab fa-pinterest";
      case "youtube":
        return "fab fa-youtube";
      case "tumblr":
        return "fab fa-tumblr";
      case "github":
        return "fab fa-github";
      case "behance":
        return "fab fa-behance";
      case "dribble":
        return "fab fa-dribble";
      case "reddit":
        return "fab fa-reddit";
    }
  }

  render() {
    const { icon, simple, round, children, color, size, active, disabled, onClick, link, href, target, social } = this.props

    return (
      <ReactstrapButton
        color={social ? social : !color ? "primary" : color}
        size={size}
        active={active}
        disabled={disabled}
        onClick={onClick}
        className={`${link ? "btn-link" : ""} ${round ? "btn-round" : ""} ${simple ? "btn-simple" : ""} ${(icon || social) && !children ? "btn-icon" : ""}`}
        href={href}
        target={target}
        {...this.props}
      >
        {social && <i className={this.getIconClassBySocial(social)} />}{icon && !social && icon}{(icon || social) && children && " "}{icon && children}{!icon && !social && (children || (!children && "Default text!"))}
      </ReactstrapButton>
    )
  }
}

export { Button }

export default Button