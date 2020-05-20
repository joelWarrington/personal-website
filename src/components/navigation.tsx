import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Segment, Menu, Container, Sidebar, Icon } from "semantic-ui-react"

const Navigation = ({ isMobile }) => {
  const [sidebarOpen, setSidebar] = useState(false)
  return isMobile === true ? (
    <>
      <Sidebar
        as={Menu}
        animation="overlay"
        direction="top"
        inverted
        onHide={() => setSidebar(!sidebarOpen)}
        vertical
        visible={sidebarOpen}
        width="thin"
      >
        <Menu.Item link onClick={() => setSidebar(!sidebarOpen)}>
          About
        </Menu.Item>
        <Menu.Item link onClick={() => setSidebar(!sidebarOpen)}>
          Projects
        </Menu.Item>
        <Menu.Item link onClick={() => setSidebar(!sidebarOpen)}>
          Blog
        </Menu.Item>
        <Menu.Item link onClick={() => setSidebar(!sidebarOpen)}>
          Connect
        </Menu.Item>
      </Sidebar>
      <Segment inverted textAlign="center" vertical>
        <Container>
          <Menu inverted pointing secondary size="large">
            <Menu.Item onClick={() => setSidebar(!sidebarOpen)}>
              <Icon name="sidebar" />
            </Menu.Item>
          </Menu>
        </Container>
      </Segment>
    </>
  ) : (
    <Segment inverted textAlign="center" vertical>
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
    </Segment>
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
