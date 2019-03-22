import React from 'react'
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';

const ProjectTile = ({ children, name, link, ...others }) => {
  return (
    <a href={link}>
      <div className='projectTile floating'>
        <h3>{name}</h3>
        {children}
      </div>
    </a>
  )
}

class ProjectsRoute extends React.Component {
  render() {
    return (
      <Layout title="Projects" description="Projects I've worked on">
        <Sidebar {...this.props}/>
        <ProjectTile name={'React Demo'}>
          <span>A demo I wrote in React</span>
        </ProjectTile>
        <ProjectTile name={'Site3 Site'}/>
        <ProjectTile name={'Another Site'}/>
        <ProjectTile name={'Resume Site'} link={'https://resume.randleunger.com'}>
          <span>My Resume</span>
        </ProjectTile>
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
