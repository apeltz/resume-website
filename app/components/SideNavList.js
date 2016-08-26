import React from 'react';


export default class SideNavList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const listItems = {
          // key -> section title, value -> className for FontAwesome icon
          About: "fa fa-user",
          Portfolio: 'fa fa-suitcase',
          Resume: 'fa fa-file-text',
          Blog: 'fa fa-comment',
          Contact: 'fa fa-envelope'
        }
        let listItemsToDOM = Object.keys(listItems).map((sectionTitle, i) => {
          let className = () => {
            let className = 'collapseable'
            if(this.props.mobile().matches || i) className += ' hidden'
            return className
          }
          return (
              <li
                key={'sidenav-list-item-'+i}
                onClick={this.props.changeView}
                className="hvr-bounce-to-right"
              >
                  <i className={listItems[sectionTitle]}></i>
                  <span>{sectionTitle}</span>
                  <div className={className()}>
                    {this.props.views[sectionTitle]}
                  </div>
              </li>
          )
        });

        return (
          <ul>
            {listItemsToDOM}
          </ul>
        )
    }

} //End of class SideNavList
