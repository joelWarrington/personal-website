import React from "react"
import { Link, graphql } from "gatsby"
import "animate.css/animate.min.css"
import "semantic-ui-css/semantic.min.css"
import {
  Button,
  Icon,
  Container,
  Grid,
  List,
  Label,
  Card,
  Image,
} from "semantic-ui-react"
import ScrollAnimation from "react-animate-on-scroll"
import { map } from "lodash"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

import SEO from "../components/seo"
import Layout from "../components/layout"
import "./index.scss"
import smoothScroll from "../components/smoothScroll"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container textAlign="left" text>
        <div className="intro section">
          <div>
            <p>Hello, my name is</p>
            <h1>Joel Warrington.</h1>
            <h2>I build web applications.</h2>
            <p>
              Software developer focused on business processes and solving
              problems.
            </p>
            <Button.Group>
              <Button
                animated
                size="medium"
                color="teal"
                onClick={() => {
                  smoothScroll("projects")
                  trackCustomEvent({
                    category: "Intro Buttons",
                    action: "Click",
                    label: "See Projects",
                  })
                }}
              >
                <Button.Content visible>See Projects</Button.Content>
                <Button.Content hidden>
                  <Icon name="right arrow" />
                </Button.Content>
              </Button>
              <Button
                animated
                size="medium"
                onClick={() => {
                  smoothScroll("connect")
                  trackCustomEvent({
                    category: "Intro Buttons",
                    action: "Click",
                    label: "Get In Touch",
                  })
                }}
              >
                <Button.Content visible>Get In Touch</Button.Content>
                <Button.Content hidden>
                  <Icon name="handshake" />
                </Button.Content>
              </Button>
            </Button.Group>
          </div>
        </div>
        <div className="about section">
          <ScrollAnimation
            animateIn="slideInLeft"
            offset={
              typeof window !== "undefined" ? window.innerHeight * 0.35 : 50
            }
            animateOnce={true}
          >
            <a id="about" className="section-link">
              <h2>About</h2>
            </a>
            <p>
              I am a software developer based out of{" "}
              <Label
                as="a"
                href="https://www.google.com/maps/search/?api=1&query=Edmonton,%20Alberta"
                rel="noopener noreferrer"
                target="_blank"
                horizontal
              >
                <Icon name="point" />
                Edmonton, AB
              </Label>
            </p>

            <p>
              I want to create applications which have a tangible impact on
              people & businesses. I like to be involved with the customer by
              gathering requirements, providing functional demonstrations and
              understanding pain points.
            </p>
            <p>
              I'm always looking to learn new technologies and skills, but
              here's a few I've been working with:
            </p>
            <Grid columns="equal">
              <Grid.Column>
                <List bulleted animated>
                  <List.Item>JavaScript / Typescript</List.Item>
                  <List.Item>SQL</List.Item>
                  <List.Item>Nintex</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List bulleted animated>
                  <List.Item>HTML</List.Item>
                  <List.Item>SharePoint</List.Item>
                  <List.Item>Git / GitHub</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List bulleted animated>
                  <List.Item>SCSS / CSS</List.Item>
                  <List.Item>Gatsby</List.Item>
                  <List.Item>GraphQL</List.Item>
                </List>
              </Grid.Column>
            </Grid>
          </ScrollAnimation>
        </div>
        <div className="project section">
          <ScrollAnimation
            animateIn="slideInRight"
            offset={
              typeof window !== "undefined" ? window.innerHeight * 0.4 : 50
            }
            animateOnce={true}
          >
            <a id="projects" className="section-link">
              <h2>Projects</h2>
            </a>
            <Card.Group itemsPerRow={2} doubling>
              {map(data.allMarkdownRemark.projects, item => {
                return (
                  <Card color="grey" key={item.project.metadata.title}>
                    {/* <Img
                    fluid={
                      item.project.metadata.featuredImage.childImageSharp.fluid
                    }
                  /> */}
                    <Card.Content>
                      <Card.Header>{item.project.metadata.title}</Card.Header>
                      <Card.Meta>
                        {map(item.project.metadata.technologies, technology => (
                          <Label>{technology}</Label>
                        ))}
                      </Card.Meta>
                      <Card.Description>
                        {item.project.metadata.description}
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div className="ui two buttons">
                        <Button
                          as="a"
                          href={item.project.metadata.live_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          animated
                          size="medium"
                          color="teal"
                          onClick={e => {
                            trackCustomEvent({
                              category: "Project Buttons",
                              action: "Click",
                              label: `Live Site: ${item.project.metadata.title}`,
                            })
                          }}
                        >
                          <Button.Content visible>Live Site</Button.Content>
                          <Button.Content hidden>
                            <Icon name="external alternate" />
                          </Button.Content>
                        </Button>
                        <Button
                          as="a"
                          href={item.project.metadata.github_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          animated
                          size="medium"
                          onClick={e => {
                            trackCustomEvent({
                              category: "Project Buttons",
                              action: "Click",
                              label: `Code Repo: ${item.project.metadata.title}`,
                            })
                          }}
                        >
                          <Button.Content visible>Code Repo</Button.Content>
                          <Button.Content hidden>
                            <Icon name="github" />
                          </Button.Content>
                        </Button>
                      </div>
                    </Card.Content>
                  </Card>
                )
              })}
            </Card.Group>
          </ScrollAnimation>
        </div>
        {/* <div className="blog section">
          <a href="#blog" id="blog" />
          <h2>Blog</h2>
        </div> */}
        <div className="connect section">
          <ScrollAnimation
            animateIn="slideInLeft"
            offset={
              typeof window !== "undefined" ? window.innerHeight * 0.2 : 25
            }
            animateOnce={true}
          >
            <a id="connect" className="section-link">
              <h2>Connect</h2>
            </a>
            <p>Want to get in touch with me or check out my stuff?</p>
            <List className="social">
              <List.Item>
                <Label
                  as="a"
                  size="large"
                  href="mailto:joelwarrington@gmail.com"
                  onClick={() =>
                    trackCustomEvent({
                      category: "Connect Buttons",
                      action: "Click",
                      label: "Email",
                    })
                  }
                >
                  <Icon name="mail" />
                  joelwarrington@gmail.com
                </Label>
              </List.Item>
              <List.Item>
                <Label
                  size="large"
                  as="a"
                  href="tel:7802982037"
                  onClick={() =>
                    trackCustomEvent({
                      category: "Connect Buttons",
                      action: "Click",
                      label: "Phone",
                    })
                  }
                >
                  <Icon name="phone" />
                  780-298-2037
                </Label>
              </List.Item>
              <List.Item>
                <Label
                  size="large"
                  as="a"
                  href="https://www.linkedin.com/in/joelwarrington/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackCustomEvent({
                      category: "Connect Buttons",
                      action: "Click",
                      label: "LinkedIn",
                    })
                  }
                >
                  <Icon name="linkedin square" />
                  joelwarrington
                </Label>
              </List.Item>
              <List.Item>
                <Label
                  size="large"
                  as="a"
                  href="https://github.com/joelwarrington/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackCustomEvent({
                      category: "Connect Buttons",
                      action: "Click",
                      label: "GitHub",
                    })
                  }
                >
                  <Icon name="github" />
                  joelwarrington
                </Label>
              </List.Item>
            </List>
          </ScrollAnimation>
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query QueryQuery {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "Project" } } }
      sort: { fields: frontmatter___order, order: ASC }
    ) {
      projects: edges {
        project: node {
          metadata: frontmatter {
            description
            github_link
            live_link
            order
            title
            technologies
          }
        }
      }
    }
  }
`
