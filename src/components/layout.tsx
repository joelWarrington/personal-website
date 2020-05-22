/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {
  Container,
  Segment,
  Sidebar,
  Menu,
  Icon,
  Responsive,
} from "semantic-ui-react"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [width, setWidth] = useState(null)
  const [sidebarOpen, setSidebar] = useState(false)

  return (
    <Responsive
      as={Sidebar.Pushable}
      onUpdate={(e, { width }) => {
        setWidth(width)
        if (Responsive.onlyMobile.maxWidth <= width) setSidebar(false)
      }}
      fireOnMount
    >
      <Segment inverted textAlign="center" vertical>
        {Responsive.onlyMobile.maxWidth >= width ? (
          <>
            <Sidebar
              as={Menu}
              animation="overlay"
              direction="top"
              onHide={() => setSidebar(false)}
              vertical
              visible={sidebarOpen}
              width="thin"
            >
              <Menu.Item link onClick={() => setSidebar(false)}>
                About
              </Menu.Item>
              <Menu.Item link onClick={() => setSidebar(false)}>
                Projects
              </Menu.Item>
              <Menu.Item link onClick={() => setSidebar(false)}>
                Blog
              </Menu.Item>
              <Menu.Item link onClick={() => setSidebar(false)}>
                Connect
              </Menu.Item>
            </Sidebar>
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item position="right" onClick={() => setSidebar(true)}>
                  <Icon name="sidebar" size="large" />
                </Menu.Item>
              </Menu>
            </Container>
          </>
        ) : (
          <Menu inverted secondary={true} size="large" borderless>
            <Container>
              <Menu.Item link position="right">
                About
              </Menu.Item>
              <Menu.Item link>Projects</Menu.Item>
              <Menu.Item link>Blog</Menu.Item>
              <Menu.Item link>Connect</Menu.Item>
            </Container>
          </Menu>
        )}
      </Segment>
      <Sidebar.Pusher dimmed={sidebarOpen}>
        <Segment inverted textAlign="center" vertical>
          {children}
        </Segment>
      </Sidebar.Pusher>
    </Responsive>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
