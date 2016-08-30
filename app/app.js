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
            sectionTitle: 'Resume'
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
        sideNavContent.classList.toggle('hidden')
        if(sectionTitle !== this.state.sectionTitle) {
          let classes = ['animated', 'fadeIn']
          classes.map(c => document.getElementById('large-content').classList.remove(c))
          this.setState({sectionTitle: sectionTitle});
          setTimeout(function(){
              classes.map(c => document.getElementById('large-content').classList.add(c))
          },0);
        }


    }

    render() {
        return (
            <div id='wrapper'>
                <SideNav
                changeView={this.changeView.bind(this)} views={this.views}/>
                <div id="large-content" >
                    <h2 id="sectionTitle">{this.state.sectionTitle}</h2>
                    {this.views[this.state.sectionTitle]}
                </div>
            </div>
        )
    }
} //End of class App

ReactDOM.render(<App/>, document.getElementById('container'));
