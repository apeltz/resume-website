"use strict"
import React from 'react';
import ReactDOM from 'react-dom';
import SideNav from './components/side-nav';
import About from './components/about';
import Resume from './components/resume';
import Contact from './components/contact';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeView: 'Resume'
        }
				this.views = {
					'About': <About/>,
					'Resume': <Resume/>,
					'Contact': <Contact/>
				}
    }

    changeView(e) {
        let sectionNode = e.target.closest('li');
        let activeView = sectionNode.dataset.section;
        let sideNavContent = sectionNode.getElementsByClassName('sideNavContent')[0]
        sideNavContent.classList.toggle('hidden')
        if(activeView !== this.state.activeView) {
          let classes = ['animated', 'fadeIn']
          classes.map(c => document.getElementById('large-content').classList.remove(c))
          this.setState({ activeView: activeView });
          setTimeout(function(){
              classes.map(c => document.getElementById('large-content').classList.add(c))
          },0);
        }


    }

    render() {
        return (
            <div id='wrapper'>
                <SideNav
                	changeView={this.changeView.bind(this)}
									views={this.views}
									activeView={this.state.activeView}
								/>
                <div id="large-content" >
                    <h2 id="sectionTitle">{this.state.activeView}</h2>
                    {this.views[this.state.activeView]}
                </div>
            </div>
        )
    }
} //End of class App

ReactDOM.render(<App/>, document.getElementById('container'));
