import React from 'react'
import PropTypes from 'prop-types'

import ReactSelect from 'react-select'

// Add your info to the docs if you edit this!

/**
 * ### Baseline customizable select!
 * 
 * @version 0.0.1
 * @author Noah Templet ([w3aseL](https://github.com/w3aseL))
 */
class Select extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    /**
     * The placeholder for the select dropdown.
     */
    placeholder: PropTypes.string,
    /**
     * The color of the select dropdown.
     */
    color: PropTypes.string
  }

  static defaultProps = {
    placeholder: "Pick an Option!",
    color: "primary"
  }

  render() {
    const { placeholder, color } = this.props

    return (
      <ReactSelect
        className={`react-select react-select-${color}`}
        classNamePrefix="react-select"
        placeholder={placeholder}
      />
    )
  }
}

export { Select }

export default Select