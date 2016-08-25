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
        $('#content').removeClass("animated fadeIn");
        // console.log('e.target:', $(e.target).closest('li')[0].dataset.section);
        var section = $(e.target).closest('li')[0].dataset.section;
        this.setState({sectionTitle: section});
        setTimeout(function(){
          $('#content').addClass("animated fadeIn");
        },0);

    }

    render() {
        return (
            <div id='wrapper'>
                <SideNav changeView={this.changeView.bind(this)}/>
                <div id="content" className="animated fadeIn">
                    <h2 id="sectionTitle">{this.state.sectionTitle}</h2>
                    {this.views[this.state.sectionTitle]}
                </div>
            </div>
        )
    }

} //End of class App

ReactDOM.render(<App/>, document.getElementById('container'));
