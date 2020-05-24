import React from "react"
import "animate.css/animate.min.css"
import "semantic-ui-css/semantic.min.css"
import { Container, Segment, Button, Icon } from "semantic-ui-react"
import "./404.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Segment style={{ height: "100vh" }} inverted vertical>
    <Container className="vert-center" inverted text textAlign="center">
      <SEO title="404: Not found" />
      <h1>404</h1>
      <p>That page couldn't be found!</p>
      <Button fluid icon="home" size="large" color="teal" as="a" href="/" />
    </Container>
  </Segment>
)

export default NotFoundPage
