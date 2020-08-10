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

import { Card as RSCard, CardImg, CardHeader, CardBody, CardFooter } from 'reactstrap'

// Add your info to the docs if you edit this!

/**
 * ### Baseline card component!
 * 
 * @version 1.0.0
 * @author Noah Templet ([w3aseL](https://github.com/w3aseL))
 */
class Card extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    /**
     * The header of the card.
     */
    header: PropTypes.node,
    /**
     * The footer of the card.
     */
    footer: PropTypes.node,
    /**
     * The body of the card.
     */
    children: PropTypes.node.isRequired,
    /**
     * The source of the header image.
     */
    imgSrc: PropTypes.string,
    /**
     * The width of the card.
     */
    width: PropTypes.string,
    /**
     * Other style options of the card.
     */
    style: PropTypes.object,
    /**
     * The color of the card.
     */
    color: PropTypes.string
  }

  static defaultProps = {
    style: {}
  }

  render() {
    const { header, footer, children, imgSrc, width, style, color } = this.props

    return (
      <RSCard style={{ width: width && width, ...style  }} color={color} {...this.props}>
        {imgSrc && <CardImg top width="100%" src={imgSrc} alt="..." />}
        {header && 
        <CardHeader>
          {header}
        </CardHeader>}
        <CardBody>
          {children}
        </CardBody>
        {footer &&
        <CardFooter>
          {footer}
        </CardFooter>}
      </RSCard>
    )
  }
}

export { Card }

export default Card