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

import { FormGroup, Input, Label } from 'reactstrap'

// Add your info to the docs if you edit this!

/**
 * ### Baseline checkbox!
 * 
 * @version 1.0.0
 * @author Noah Templet ([w3aseL](https://github.com/w3aseL))
 */
class Checkbox extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { label, onChange, disabled, inline } = this.props

    return (
      <FormGroup check inline={inline} disabled={disabled}>
        <Label check>
          <Input 
            type="checkbox"
            onChange={onChange}
            disabled={disabled}
          />
          {' '}
          {label}
          <span className="form-check-sign">
            <span className="check"></span>
          </span>
        </Label>
      </FormGroup>
    )
  }
}

Checkbox.propTypes = {
  /** The label text. */
  label: PropTypes.string,
  /** Function to handle change. */
  onChange: PropTypes.func,
  /** Sets whether the checkbox is enabled or disabled. */
  disabled: PropTypes.bool,
  /** Sets whether the checkbox is inline or not. */
  inline: PropTypes.bool
}

Checkbox.defaultProps = {
  label: "Default text!"
}

export { Checkbox }

export default Checkbox