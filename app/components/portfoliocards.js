import React from 'react';


export default class PortfolioCards extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let projects = {
      Sabertooth: {
        title: 'Sabertooth',
        thumb: './assets/thumb_sabertooth.png',
        desc: 'A Javascript library for interacting with Bluetooth devices through the browser',
        url: 'http://sabertooth-io.github.io/'
      },
      Top50: {
        title: 'Top50 [in progress...]',
        thumb: './assets/thumb_top50.png',
        desc: 'A Billboard Top 50 music website built with React, Redux, & NodeJS',
        url: 'https://github.com/apeltz/react-redux-webpack-node'
      }
    }
    let projectsToDOM = Object.keys(projects).map((p, i) => {
      return (
          <div
            className='project-thumb'
            key={'project-'+i}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={projects[p].url}
              onClick={e => e.stopPropagation()}
            >
              <img src={projects[p].thumb} />
              <h3>{projects[p].title}</h3>
              <p>{projects[p].desc}</p>
            </a>
          </div>
      )
    });
    return (
      <div id='portfolio-projects'>
        {projectsToDOM}
      </div>
    )
  }

} //End of class PortfolioCards
