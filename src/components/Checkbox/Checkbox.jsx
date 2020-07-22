import React from 'react'

import PropTypes from 'prop-types'

import { FormGroup, Input, Label } from 'reactstrap'

// Add your info to the docs if you edit this!

/**
 * ### Baseline checkbox!
 * 
 * @version 0.0.1
 * @author Noah Templet ([w3aseL](https://github.com/w3aseL))
 */
class Checkbox extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    /**
     * The label text.
     */
    label: PropTypes.string,
    /**
     * Function to handle change.
     */
    onChange: PropTypes.func,
    /**
     * Sets whether the checkbox is enabled or disabled.
     */
    disabled: PropTypes.bool,
    /**
     * Sets whether the checkbox is inline or not.
     */
    inline: PropTypes.bool
  }

  static defaultProps = {
    label: "Default text!"
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

export { Checkbox }

export default Checkbox