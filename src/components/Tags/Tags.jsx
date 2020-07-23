import React from 'react'
import PropTypes from 'prop-types'

import TagsInput from 'react-tags-input'

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

    const { tags } = this.props

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
    color: PropTypes.string
  }
  
  static defaultProps = {
    tags: [],
    color: "info"
  }

  handleTags(regularTags) {
    this.setState({ regularTags });
  }

  render() {
    const { color } = this.props

    return (
      <TagsInput
        value={this.state.tags}
        onChange={this.handleTags}
        tagProps={{className: `react-tagsinput-tag ${color}` }}
      />
    )
  }
}

export { Tags }

export default Tags