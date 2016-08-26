import React from 'react';


export default class ResumeProjects extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='res-projects'>

        <div className='res-subhead'>
        <p className='res-title'>Sabertooth - </p>
        <p className='res-desc'>Javascript library</p>
        </div>
        <ul>
          <li>Created Javascript API with promise-based OOP architecture to simplify browser-based interaction with Bluetooth 4.0 hardware
          </li>
          <li>Leveraged native Javascript low-level interfaces to enable read/write functionality in exchanges between high-level, dynamically typed scripting environment and imperative device language</li>
          <li>Implemented proxy-based caching scheme to improve performance and reduce latency by leveraging local-object instances of previously resolved asynchronous device exchanges</li>
          <li>Enabled use-case flexibility through inclusion of configuration methods powered by instance-specific object decorator pattern</li>
          <li>Authored API documentation and wrote demo use-case applications for fellow developers utilizing NodeJS, Express</li>
        </ul>


        <div className='res-subhead'>
        <p className='res-title'>ElephantCards - </p>
        <p className='res-desc'>Flashcard deck web platform</p>
        </div>
        <ul>
          <li>Used AngularJS to create multi-view single-page flashcard application with PosgresSQL-stored user-created content
          </li>
          <li>Utilized Angular UI router to manage state transitions, enable nested views, and allow for modular application architecture</li>
          <li>Leveraged database ORM for managing dynamic data permissions, allowing for sharing and privatization of user content</li>
        </ul>

      </div>


    )
  }

} //End of class ResumeProjects
