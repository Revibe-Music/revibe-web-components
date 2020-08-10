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

import { UncontrolledTooltip } from 'reactstrap'

// Add your info to the docs if you edit this!

/**
 * ### Baseline tool tip component.
 * 
 * @version 1.0.0
 * @author Noah Templet ([w3aseL](https://github.com/w3aseL))
 */
class ToolTip extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    /**
     * The placement of the tooltip. [top, bottom, left, right]
     */
    placement: PropTypes.string.isRequired,
    /**
     * The target identifier of the element the tooltip should pop up at.
     */
    target: PropTypes.string.isRequired,
    /**
     * The delay of the tooltip.
     */
    delay: PropTypes.number,
    /**
     * The label to appear on the tooltip.
     */
    label: PropTypes.string.isRequired
  }

  static defaultProps = {
    placement: "top",
    delay: 0
  }

  render() {
    const { placement, target, delay, label } = this.props

    return (
      <UncontrolledTooltip placement={placement} target={target} delay={delay} >
        {label}
      </UncontrolledTooltip>
    )
  }
}

export { ToolTip }

export default ToolTip