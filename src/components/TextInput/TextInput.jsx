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

import { InputGroup, Input as ReactstrapInput, InputGroupAddon, InputGroupText, FormGroup, Label } from 'reactstrap'

// Add your info to the docs if you edit this!

/**
 * ### Baseline text input field.
 * 
 * @version 1.0.0
 * @author Noah Templet ([w3aseL](https://github.com/w3aseL))
 */
class TextInput extends React.Component {
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
    onChange: PropTypes.func,
    /**
     * The label to be used above the form input.
     */
    formLabel: PropTypes.string,
    /**
     * Whether to use a form or regular input. Will override: size, append, and prepend.
     */
    form: PropTypes.bool,
    /**
     * Sets the classes used for the form group. Useful for applying if a field is good (has-success) or bad (has-danger).
     */
    formClassName: PropTypes.string
  }

  static defaultProps = {
    formClassName: ""
  }

  render() {
    const { onChange, placeholder, prepend, append, size, form, formLabel, formClassName } = this.props

    return (
      <>
        {!form ? 
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
        :
          <FormGroup className={`${formLabel ? 'has-label' : ''} ${formClassName}`}>
            {formLabel && <Label>{formLabel}</Label>}
            <ReactstrapInput
              placeholder={placeholder}
              onChange={onChange}
            />
          </FormGroup>
        }
      </>
    )
  }
}

export { TextInput }

export default TextInput