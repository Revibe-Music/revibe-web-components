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

import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
 
// Add your info to the docs if you edit this!

/**
 * ### Baseline dropdown!
 * 
 * @version 1.0.0
 * @author Noah Templet ([w3aseL](https://github.com/w3aseL))
 */
class Dropdown extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { caret, label, options, color, inline, direction } = this.props

    return (
      <UncontrolledDropdown group={inline} direction={direction}>
        <DropdownToggle caret={caret} color={color} data-toggle="dropdown">{label}</DropdownToggle>
        <DropdownMenu>
          {options.map(({ label, header, disabled, divider, href, target, onClick }, index) => (
            <DropdownItem header={header} disabled={disabled} divider={divider} href={href && !onClick && href} target={target && href && !onClick && target} onClick={e => onClick ? onClick(e) : null}>
              {label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
}

Dropdown.propTypes = {
  /** Show a caret on the toggle. */
  caret: PropTypes.bool,
  /** Label for the dropdown button. */
  label: PropTypes.string.isRequired,
  /** The options for the dropdown. */
  options: PropTypes.array.isRequired,
  /** Sets the color of the dropdown. */
  color: PropTypes.string,
  /** Sets if the dropdowns can be inline. */
  inline: PropTypes.bool,
  /** Direction of the dropdown. */
  direction: PropTypes.string
}

Dropdown.defaultProps = {
  label: "Dropdown",
  options: [
    { label: "Default Item" }
  ]
}

export { Dropdown }

export default Dropdown