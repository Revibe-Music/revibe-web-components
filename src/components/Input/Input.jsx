import React from 'react'
import PropTypes from 'prop-types'

import { InputGroup, Input as ReactstrapInput, InputGroupAddon, InputGroupText } from 'reactstrap'

// Add your info to the docs if you edit this!

/**
 * ### Baseline input field.
 * 
 * @version 0.0.1
 * @author Noah Templet ([w3aseL](https://github.com/w3aseL))
 */
class Input extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    /**
     * Text to place into input field as a placeholder.
     */
    placeholder: PropTypes.string,
    /**
     * Text to prepend to the beginning of the input.
     */
    prepend: PropTypes.node,
    /**
     * Text to append to the beginning of the input.
     */
    append: PropTypes.node,
    /**
     * Size of the input field. [sm, lg]
     */
    size: PropTypes.string,
    /**
     * A function to handle when text is changed.
     */
    onChange: PropTypes.func
  }

  static defaultProps = {

  }

  render() {
    const { onChange, placeholder, prepend, append, size } = this.props

    return (
      <InputGroup size={size}>
        {prepend && 
          <InputGroupAddon addonType="prepend">
            {prepend && (!prepend.type || prepend.type === "i") ?
              <InputGroupText>{prepend}</InputGroupText>
              :
              prepend
            }
          </InputGroupAddon>
        }
        <ReactstrapInput 
          placeholder={placeholder}
          onChange={onChange}
          {...this.props}
        />
        {append &&
          <InputGroupAddon addonType="append">
            {append && (!append.type || append.type === "i") ?
              <InputGroupText>{append}</InputGroupText>
              :
              append
            }
          </InputGroupAddon>
        }
      </InputGroup>
    )
  }
}

export { Input }

export default Input