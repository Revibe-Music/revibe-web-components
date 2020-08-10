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

import { Progress as ProgressBar } from 'reactstrap'

// Add your info to the docs if you edit this!

/**
 * ### Baseline progress bar!
 * 
 * @version 1.0.0
 * @author Noah Templet ([w3aseL](https://github.com/w3aseL))
 */
class Progress extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    /**
     * The value of the progress bar.
     */
    value: PropTypes.number,
    /**
     * The maximum value of the progress bar.
     */
    max: PropTypes.number,
    /**
     * The label for the progress bar. No label for the multi-progress bar.
     */
    label: PropTypes.string,
    /**
     * The color of the progress bar.
     */
    color: PropTypes.string,
    /**
     * Has multiple bars.
     */
    multi: PropTypes.bool,
    /**
     * The list of values for a multi-progress bar.
     */
    values: PropTypes.array,
    /**
     * Sets a progress bar as striped.
     */
    striped: PropTypes.bool
  }

  static defaultProps = {
    max: 100,
    label: "Default"
  }

  render() {
    const { value, max, label, color, multi, values, striped } = this.props

    console.log(values)

    return (
      <>
      {!multi ?
        <div className={`progress-container ${color ? `progress-${color}` : ""}`}>
          <span className="progress-badge">{label}</span>
          <ProgressBar max={max} value={value} striped={striped}>
            <span className="progress-value">{((value / max) * 100).toFixed(0)}%</span>
          </ProgressBar>
        </div>
        :
        <ProgressBar multi={multi}>
          {values.map((obj, index) => (
            <ProgressBar bar value={`${obj.value}`} color={obj.color ? obj.color : "secondary"} striped={striped} max={max} />
          ))}
        </ProgressBar>
      }
      </>
    )
  }
}

export { Progress }

export default Progress