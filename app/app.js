"use strict"
import React from 'react';
import ReactDOM from 'react-dom';
import SideNav from './components/SideNav';
import About from './components/about';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import Blog from './components/blog';
import Contact from './components/contact';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mobile: () => window.matchMedia('(max-width: 599px)'),
        }
        this.views = {
            'About': <About/>,
            'Portfolio': <Portfolio/>,
            'Resume': <Resume/>,
            'Blog': <Blog/>,
            'Contact': <Contact/>
        }
    }

    changeView(e) {
        let sectionNode = e.target.closest('li');
        let collapseable = sectionNode.getElementsByClassName('collapseable')[0]
        if(this.state.mobile().matches) {
          collapseable.classList.toggle('hidden')
        }
        else {
          if(collapseable.classList.contains('hidden')){
            let allCollapseable = document.getElementsByClassName('collapseable')
            for(let n=0; n<allCollapseable.length; n++) {
              allCollapseable[n].classList.add('hidden')
              collapseable.classList.remove('hidden')
            }
          }
        }
    }

    render() {
        return (
            <div id='wrapper'>
                <SideNav
                mobile={this.state.mobile}
                changeView={this.changeView.bind(this)} views={this.views}/>
            </div>
        )
    }

} //End of class App

ReactDOM.render(<App/>, document.getElementById('container'));
