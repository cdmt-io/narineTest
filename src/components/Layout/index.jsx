import React from 'react'
import Helmet from 'react-helmet'
import '../../assets/scss/init.scss'
import Doodle from '../Doodle/Doodle';

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="layout">
        {/*<Doodle>*/}
        {/*</Doodle>*/}
        <Helmet defaultTitle="Randy Unger - Personal Website" />
        {children}
      </div>
    )
  }
}

export default Layout
