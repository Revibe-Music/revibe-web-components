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

  render() {
    const { children, display, muted, lead, color, inline, tag: Tag, className, style, font, size, weight, ...props } = this.props

    return (
      <Tag
        className={`${display ? `display-${display} ` : ""}${muted ? "text-muted " : ""}${lead ? "lead " : ""}${color ? `text-${color} ` : ""}${inline ? "w-auto d-inline-block " : ""}${className}`}
        style={{ fontFamily: font, fontSize: size, fontWeight: weight, ...style }}
        {...props}
      >
        {children}
      </Tag>
    )
  }
}

Text.propTypes = {
  /** The children. Likely text or links or other stuff. */
  children: PropTypes.node.isRequired,
  /** The tag to use for the element to be. */
  tag: PropTypes.string,
  /** The display header to use. [1-4] */
  display: PropTypes.number,
  /** Mutes the text. */
  muted: PropTypes.bool,
  /** Adds lead styling to the text. */
  lead: PropTypes.bool,
  /** Adds color to the text. */
  color: PropTypes.color,
  /** Keeps the text from expanding the width of the line. */
  inline: PropTypes.bool,
  /** The additional classes to add. */
  className: PropTypes.string,
  /** The styles to use. */
  style: PropTypes.object,
  /** The font to use. */
  font: PropTypes.object,
  /** The size of the font. */
  size: PropTypes.string,
  /** The weight of the font. */
  weight: PropTypes.string
}

Text.defaultProps = {
  children: "Bruh where the text at.",
  tag: "p",
  className: ""
}

export { Text }

export default Text