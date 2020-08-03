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

// Add your info to the docs if you edit this!

/**
 * ### Baseline text component!
 * 
 * @version 1.0.0
 * @author Noah Templet ([w3aseL](https://github.com/w3aseL))
 */
class Text extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    /**
     * The children. Likely text or links or other stuff.
     */
    children: PropTypes.node.isRequired,
    /**
     * The header class to use. [h1, h2, h3, h4, h5, h6]
     */
    header: PropTypes.string,
    /**
     * The display header to use. [1-4]
     */
    display: PropTypes.number,
    /**
     * Mutes the text.
     */
    muted: PropTypes.bool,
    /**
     * Adds lead styling to the text.
     */
    lead: PropTypes.bool,
    /**
     * Adds color to the text.
     */
    color: PropTypes.color,
    /**
     * Keeps the text from expanding the width of the line.
     */
    inline: PropTypes.bool
  }

  static defaultProps = {
    children: "Bruh where the text at."
  }

  render() {
    const { children, header, display, muted, lead, color, inline } = this.props

    return (
      <p
        className={`${header ? `${header} ` : ""}${display ? `display-${display} ` : ""}${muted ? "text-muted " : ""}${lead ? "lead " : ""}${color ? `text-${color} ` : ""}${inline ? "w-auto d-inline-block " : ""}`}
      >
        {children}
      </p>
    )
  }
}

export { Text }

export default Text