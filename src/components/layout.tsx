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
import smoothScroll from "./smoothScroll"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import ScrollAnimation from "react-animate-on-scroll"
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
              <Menu.Item
                onClick={() => {
                  setSidebar(false)
                  smoothScroll("about")
                  trackCustomEvent({
                    category: "Navigation",
                    action: "Click",
                    label: "About",
                  })
                }}
              >
                About
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  setSidebar(false)
                  smoothScroll("projects")
                  trackCustomEvent({
                    category: "Navigation",
                    action: "Click",
                    label: "Projects",
                  })
                }}
              >
                Projects
              </Menu.Item>
              {/* <Menu.Item link onClick={() => setSidebar(false)}>
                <AnchorLink href="#about" offset="25">
                  Blog
                </AnchorLink>
              </Menu.Item> */}
              <Menu.Item
                onClick={() => {
                  setSidebar(false)
                  smoothScroll("connect")
                  trackCustomEvent({
                    category: "Navigation",
                    action: "Click",
                    label: "Connect",
                  })
                }}
              >
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
            <Container text>
              <Menu.Item
                link
                position="right"
                onClick={() => {
                  smoothScroll("about")
                  trackCustomEvent({
                    category: "Navigation",
                    action: "Click",
                    label: "About",
                  })
                }}
              >
                About
              </Menu.Item>
              <Menu.Item
                link
                onClick={() => {
                  smoothScroll("projects")
                  trackCustomEvent({
                    category: "Navigation",
                    action: "Click",
                    label: "Projects",
                  })
                }}
              >
                Projects
              </Menu.Item>
              {/* <Menu.Item link>
                <AnchorLink href="#about" offset="25">
                  Blog
                </AnchorLink>
              </Menu.Item> */}
              <Menu.Item
                link
                onClick={() => {
                  smoothScroll("connect")
                  trackCustomEvent({
                    category: "Navigation",
                    action: "Click",
                    label: "Connect",
                  })
                }}
              >
                Connect
              </Menu.Item>
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
