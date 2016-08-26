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
            sectionTitle: 'About'
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
        let sectionTitle = sectionNode.dataset.section;
        let sideNavContent = sectionNode.getElementsByClassName('sideNavContent')[0]
        if(this.state.mobile().matches) {
          sideNavContent.classList.toggle('hidden')
        }
        else {
          if(sideNavContent.classList.contains('hidden')){
            let allCollapseable = document.getElementsByClassName('sideNavContent')
            for(let n=0; n<allCollapseable.length; n++) {
              allCollapseable[n].classList.add('hidden')
              sideNavContent.classList.remove('hidden')
            }
          }
        }
        let classes = ['animated', 'fadeIn']
        classes.map(c => document.getElementById('large-content').classList.remove(c))
        this.setState({sectionTitle: sectionTitle});
        setTimeout(function(){
            classes.map(c => document.getElementById('large-content').classList.add(c))
        },0);
    }

    render() {
        return (
            <div id='wrapper'>
                <SideNav
                mobile={this.state.mobile}
                changeView={this.changeView.bind(this)} views={this.views}/>

                <div id="large-content" className="animated fadeIn">
                    <h2 id="sectionTitle">{this.state.sectionTitle}</h2>
                    {this.views[this.state.sectionTitle]}
                </div>
            </div>
        )
    }

} //End of class App

ReactDOM.render(<App/>, document.getElementById('container'));
