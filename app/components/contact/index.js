import React from 'react';
import style from './index.less';

export default class Contact extends React.Component {

  constructor(props) {
    super(props);
  }

    render() {
    let divStyle = {
      backgroundImage: 'url(./assets/envelope.jpg)',
      backgroundSize: 'auto 90%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }
    return (

      <div id='contact'
        style={divStyle}
      >
      <table>
        <thead></thead>
        <tbody>
          <tr>
           <td >Name:</td><td className='value'>Aaron Peltz</td>
           </tr>
           <tr>
           <td>Email:</td><td className='value'><a target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} href="mailto:aaron.peltz@gmail.com">aaron.peltz@gmail.com</a></td>
           </tr>
           <tr>
           <td>Phone:</td><td className='value'>(310) 698.2327</td>
           </tr>
           <tr>
            <td>LinkedIn:</td><td className='value'><a target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} href="https://www.linkedin.com/in/apeltz">linkedin.com/in/apeltz</a></td>
           </tr>
           <tr>
             <td>Github:</td><td className='value'><a target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} href="https://www.github.com/apeltz">github.com/apeltz</a></td>
           </tr>
        </tbody>
      </table>

      </div>


    )
  }

} //End of class Contact
