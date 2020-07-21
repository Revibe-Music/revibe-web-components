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
    label: PropTypes.string
  }

  static defaultProps = {
    label: "Default text!"
  }

  render() {
    const { label } = this.props

    return (
      <FormGroup check className="text-left">
        <Label check>
          <Input 
            type="checkbox"
          />
          <span className="form-check-sign" />
          {label}
        </Label>
      </FormGroup>
    )
  }
}

export { Checkbox }

export default Checkbox