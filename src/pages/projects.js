import React from 'react'
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import styles from './projects.module.scss';

const ProjectTile = ({ children, name, link, ...others }) => {
  return (
    <a href={link}>
      <div className={styles['projectTile']}>
        <h3>{name}</h3>
        {children}
      </div>
    </a>
  )
}

function Projects(props) {
  return (
    <Layout title="Projects" description="Projects I've worked on">
      <Sidebar isIndex />
      <Page>
        <ProjectTile name={'React Demo'}>
          <span>A demo I wrote in React</span>
        </ProjectTile>
        <ProjectTile name={'Site3 Site'}/>
        <ProjectTile name={'Another Site'}/>

        <ProjectTile name={'Resume Site'} link={'https://resume.randleunger.com'}>
          <span>My Resume</span>
        </ProjectTile>
      </Page>
    </Layout>
  )
}

export default Projects
