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

import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col } from 'reactstrap'

// Add your info to the docs if you edit this!

/**
 * ### Baseline tabs component!
 * 
 * @version 1.0.0
 * @author Noah Templet ([w3aseL](https://github.com/w3aseL))
 */
class Tabs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: 0
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle(tab) {
    if(this.state.activeTab !== tab)
      this.setState({ activeTab: tab })
  }

  static propTypes = {
    /**
     * The list of labels for the tabs. Nodes are allowed (for using icons).
     */
    labels: PropTypes.array.isRequired,
    /**
     * The list of content for the tabs. Nodes are encouraged (it is content anyways).
     */
    content: PropTypes.array.isRequired,
    /**
     * Sets if the tab buttons are pills.
     */
    pills: PropTypes.bool,
    /**
     * The color of the pills.
     */
    pillColor: PropTypes.string,
    /**
     * Sets the pills to a vertical orientation.
     */
    vertical: PropTypes.bool,
    /**
     * Sets the horizontal placement of the tabs. [center, end]
     */
    tabPlacement: PropTypes.string,
    /**
     * Sets the placement of text. [left, center, right]
     */
    textPlacement: PropTypes.string
  }

  static defaultProps = {
    labels: [ "tab1", "tab2" ],
    content: [ "This is content for tab 1.", "This is content for tab 2." ],
    pillColor: "primary"
  }

  render() {
    const { labels, content, pills, pillColor, vertical, tabPlacement, textPlacement } = this.props

    const navBar = (
      <>
        {labels.map((label, index) => (
          <NavItem className={`${index > 0 ? `m${vertical ? "t" : "l"}-1` : ""} ${index < labels.length - 1 ? `m${vertical ? "b" : "r"}-1` : ""}`}>
            <NavLink
              className={this.state.activeTab === index ? "active" : ""}
              onClick={() => this.toggle(index)}
            >
              {label}
            </NavLink>
          </NavItem>
        ))}
      </>
    )

    const tabContent = (
      <TabContent activeTab={this.state.activeTab}>
        {content.map((val, index) => (
          <TabPane tabId={index} className={`${textPlacement ? `text-${textPlacement}` : ""}`}>
            {val}
          </TabPane>
        ))}
      </TabContent>
    )

    if(vertical)
      return (
        <Row>
          <Col md="4" xs="12">
            <Nav tabs={!pills} pills={pills} className={`${pills ? `nav-pills-${pillColor} ` : ""}${vertical ? `flex-column ` : ""}`}>
              {navBar}
            </Nav>
          </Col>
          <Col md="8" xs="12">
            {tabContent}
          </Col>
        </Row>
      )

    return (
      <>
        <div className="nav-tabs-navigation">
          <div className="nav-tabs-wrapper">
            <Nav tabs={!pills} pills={pills} className={`${pills ? `nav-pills-${pillColor} ` : ""}${tabPlacement ? `justify-content-${tabPlacement}` : ""}`}>
              {navBar}
            </Nav>
          </div>
        </div>
        <br />
        {tabContent}
      </>
    )
  }
}

export { Tabs }

export default Tabs