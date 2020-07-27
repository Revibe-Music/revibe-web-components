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

import TagsInput from 'react-tagsinput'

// Add your info to the docs if you edit this!

/**
 * ### Baseline tag list!
 * 
 * @version 0.0.1
 * @author Noah Templet ([w3aseL](https://github.com/w3aseL))
 */
class Tags extends React.Component {
  constructor(props) {
    super(props)

    const { tags } = props

    this.state = {
      tags: tags
    }

    this.handleTags = this.handleTags.bind(this)
  }

  static propTypes = {
    /**
     * The default list of tags to show.
     */
    tags: PropTypes.array,
    /**
     * The color of the tags.
     */
    color: PropTypes.string,
    /**
     * The function that processes changes to tags.
     */
    onChange: function(props, propName, componentName) {
      var fn = props[propName];
      if(!fn.prototype ||
         (typeof fn.prototype.constructor !== 'function' &&
          fn.prototype.constructor.length !== 1)) {
          return new Error(propName + 'must be a function with an argument!');
      }
  }
  }
  
  static defaultProps = {
    tags: [],
    color: "info"
  }

  handleTags(tags) {
    const { onChange } = this.props

    this.setState({ tags })

    if(onChange) onChange(tags)
  }

  render() {
    const { color } = this.props

    return (
      <TagsInput
        value={this.state.tags}
        onChange={this.handleTags}
        tagProps={{ className: `react-tagsinput-tag ${color}` }}
      />
    )
  }
}

export { Tags }

export default Tags