import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ProjectNavigation extends Component {
constructor(props){
  super(props);
  this.state = {
    active: false
  }
  this.howMany = this.howMany.bind(this);
}

  howMany(tag) {
    let tagname = tag;
    let projects = this.props.projects;
    let filtered = projects.filter((project) => {
      return project.tags.indexOf(tagname) !== -1;
    });

    let numberOfProjects = filtered.length;
    if(numberOfProjects <= 0) {
      return false;
    }
    else {
      return numberOfProjects;
    }
      // when this component mounts, the tags have not been selected yet so it
      // returns an empty array. We need a list of all tags from the start.
  }

  render() {
    return (
      <React.Fragment>
      <nav className="project-navigation">
        <a href="#" data-category="all" onClick={this.props.toggleFilter}> All </a>
        <a href="#" data-category="dev" onClick={this.props.toggleFilter}> Development </a>
        <a href="#" data-category="des" onClick={this.props.toggleFilter}> Design</a>
      </nav>
      <nav className={this.props.isOpen ? "project-sub-navigation toggled": "project-sub-navigation"}>
        {this.props.selectedTags.map((tag) => {
          return (
            <a href="#" key={tag} className="navigation-tag" data-tag={tag} onClick={this.props.filterProjects.bind(this)}>
            {tag} {this.howMany(tag) > 0 ? <span className="indicator">{this.howMany(tag)}</span> : ''}
            </a>
          )
        })}
      </nav>
      </React.Fragment>
    )
  }
}

export default ProjectNavigation;
