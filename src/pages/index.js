import React from "react"
import { Link } from "gatsby"
import "animate.css/animate.min.css"
import "semantic-ui-css/semantic.min.css"
import { Button, Icon, Container, Grid, List, Label } from "semantic-ui-react"
import ScrollAnimation from "react-animate-on-scroll"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container textAlign="left">
        <p>Hello, my name is</p>
        <h1>Joel Warrington.</h1>
        <h2>I build web applications.</h2>
        <p>
          I am a software developer specializing in web applications which
          improve business processes and solve problems.
        </p>
        <Button.Group>
          <Button animated size="medium" color="teal">
            <Button.Content visible>See Projects</Button.Content>
            <Button.Content hidden>
              <Icon name="right arrow" />
            </Button.Content>
          </Button>
          <Button animated size="medium">
            <Button.Content visible>Get In Touch</Button.Content>
            <Button.Content hidden>
              <Icon name="handshake" />
            </Button.Content>
          </Button>
        </Button.Group>
      </Container>
      <Container textAlign="left">
        <div className="about-section">
          <a href="#about" id="about" />
          <h2>About</h2>
          <p>
            I am a software developer based out of{" "}
            <Label
              as="a"
              href="https://www.google.com/maps/search/?api=1&query=Edmonton,%20Alberta"
              target="_blank"
              horizontal
            >
              <Icon name="point" />
              Edmonton, AB
            </Label>
          </p>

          <p>
            I want to create applications which have a tangible impact on people
            & businesses. I like to be involved with the customer by gathering
            requirements, providing functional demonstrations and understanding
            pain points.
          </p>
          <p>
            I'm always looking to learn new technologies and skills, but here's
            a few I've been working with:
          </p>
          <Grid columns="equal">
            <Grid.Column>
              <List bulleted animated>
                <List.Item>JavaScript</List.Item>
                <List.Item>SQL</List.Item>
                <List.Item>SharePoint</List.Item>
                <List.Item>Nintex</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List bulleted animated>
                <List.Item>TypeScript</List.Item>
                <List.Item>HTML</List.Item>
                <List.Item>SharePoint</List.Item>
                <List.Item>Git / GitHub</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List bulleted animated>
                <List.Item>SCSS / CSS</List.Item>
                <List.Item>SharePoint</List.Item>
                <List.Item>Microsoft Visio</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
        <div className="connect-section">
          <ScrollAnimation
            animateIn="slideInLeft"
            offset={100}
            animateOnce={true}
          >
            <a href="#connect" id="connect" />
            <h2>Connect</h2>
            <p>Want to get in touch with me or check out my stuff?</p>
            <List className="social">
              <List.Item>
                <List.Icon name="mail" size="large" />
                <List.Content>
                  <a href="mailto:joelwarrington@gmail.com">
                    joelwarrington@gmail.com
                  </a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="phone" size="large" />
                <List.Content>
                  <a href="tel:7802982037">780-298-2037</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon
                  name="linkedin square"
                  size="large"
                  style={{ paddingRight: "8px" }}
                />
                <List.Content>
                  <a
                    href="https://www.linkedin.com/in/joelwarrington/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    joelwarrington
                  </a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="github" size="large" />
                <List.Content>
                  <a
                    href="https://github.com/joelwarrington/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    joelwarrington
                  </a>
                </List.Content>
              </List.Item>
            </List>
          </ScrollAnimation>
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage
