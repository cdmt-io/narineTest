import React from 'react'
import Helmet from 'react-helmet'
import '../../assets/scss/init.scss'
import Doodle from '../Doodle/Doodle'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    const doodleStyle = {
      position: 'absolute',
      height: '100%',
      width: '100%',
      zIndex: "-99999999",
    }

    return (
      <div id="toppest">
        <Doodle grid="6" style={doodleStyle} rule={`
            :doodle {
              @size: 20em;
              grid-gap: 15px;
            }

            transition: all .4s ease;
            border-top: 1px solid hsl(@rand(137.50deg, 360deg), 80%, 80%);
            border-right: 1px solid hsl(@rand(137.50deg, 360deg), 80%, 80%);

            :after {
              content: \\@hex(@rand(9632, 9687));
              color: hsl(@rand(137.50deg, 360deg), 60%, 60%);
            }

            @random {
              border-top: 1px solid transparent;
              border-right: 1px solid transparent;
              border-bottom: 1px solid hsl(@rand(137.50deg, 360deg), 80%, 80%);
              border-left: 1px solid hsl(@rand(137.50deg, 360deg), 80%, 80%);
              border-style: dashed;
            }

            @keyframes turn {
               0% {
                transform: rotate(0deg);
               }
               100% {
                transform: rotate(360deg);
               }
            }

            :hover {
              animation: turn .9s ease-out infinite;
            }
        `} />
        <div className="layout">
          <Helmet defaultTitle="Randy Unger - Personal Website" />
          {children}
        </div>
      </div>
    )
  }
}

export default Layout
