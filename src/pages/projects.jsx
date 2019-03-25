import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'

const ProjectTile = ({
  children, name, link, ...others
}) => (
  <a href={link}>
    <div className="projectTile">
      <h3>{name}</h3>
      {children}
    </div>
  </a>
)

class ProjectsRoute extends React.Component {
  render() {
    const mrg = {
      marginTop: "20px"
    }
    const { title, subtitle } = this.props.data.site.siteMetadata

    return (
      <Layout title="Projects" description="Projects I've worked on">
        <div>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={subtitle} />
          </Helmet>
          <Sidebar {...this.props} />
          <div className="clearSidebar" style={mrg}>
            <ProjectTile name="React Demo">
              <span>A demo I wrote in React</span>
            </ProjectTile>
            <ProjectTile name="Site3 Site" />
            <ProjectTile name="Another Site" />
            <ProjectTile name="Resume Site" link="https://resume.randleunger.com">
              <span>My Resume</span>
            </ProjectTile>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ProjectsRoute

export const pageQuery = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          email
          telegram
          twitter
          github
          rss
          vk
        }
      }
    }
  }
`
