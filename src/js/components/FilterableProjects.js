import React, {Component} from 'react';
import ProjectNavigation from './FilterNavigation.js';
import ProjectListing from './ProjectListing.js';

class FilterableProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      isOpen: false,
      activeTag: false,
      filteredProjects:[],
      selectedTags: [],
      allTags: ['Photoshop', 'Illustrator', 'Motion Design', 'Wordpress', 'React', 'SQL', 'PHP', 'Javascript', 'Twig'],
      design: ['Photoshop', 'Illustrator', 'Motion Design'],
      development: ['Wordpress', 'React', 'SQL', 'PHP', 'Javascript', 'Twig']
    }
    this.toggleFilter = this.toggleFilter.bind(this);
    this.filterProjects = this.filterProjects.bind(this);
    this.state.filteredProjects = this.state.projects;
  }


  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URL}/displayposts.php`)
    .then(res => res.json())
      .then(json => {
        this.setState({
          projects: json,
          filteredProjects: json
        })
      });
  }

  toggleFilter(e) {
    e.preventDefault();
    let activestatus = document.querySelectorAll('.active-tag, .active-tab');
    activestatus.forEach(each => {
      each.classList.remove('active-tag');
      each.classList.remove('active-tab');
    })
    e.target.classList.add('active-tab');
    if(e.target.getAttribute('data-category') === 'des') {
      let filtered = this.state.projects.filter((project) => {
        return project.category.indexOf('design') !== -1;
      });

      this.setState({
        isOpen: true,
        selectedTags: this.state.design,
        filteredProjects: filtered
      })
    }
    else if(e.target.getAttribute('data-category') === 'dev') {
      let filtered = this.state.projects.filter((project) => {
        return project.category.indexOf('development') !== -1;
      });
      this.setState({
        isOpen: true,
        selectedTags: this.state.development,
        filteredProjects: filtered
      })
    }
    else {
      this.setState({
        isOpen: true,
        filteredProjects: this.state.projects,
        selectedTags: this.state.allTags
      })
    }
  }

  filterProjects(event) {
    event.preventDefault();
    let activestatus = document.querySelectorAll('.active-tag');
    activestatus.forEach(each => {
      each.classList.remove('active-tag');
    })
    event.target.classList.add('active-tag');
    let tagname = event.target.getAttribute('data-tag');
    let projects = this.state.projects;
    let filtered = projects.filter((project) => {
      return project.tags.indexOf(tagname) !== -1;
    })

    this.setState({
      filteredProjects: filtered,
      activeTag: tagname
    })
  }

  render() {
    return (
  <React.Fragment>
  <ProjectNavigation
   toggleFilter={this.toggleFilter}
   selectedTags={this.state.selectedTags}
   filterProjects={this.filterProjects}
   isOpen={this.state.isOpen}
   projects = {this.state.projects}
   alltags = {this.state.allTags}


  />
  <ProjectListing
  projects={this.state.filteredProjects}
  loaded={this.state.loaded}
  tag={this.state.activeTag}
  />
  </React.Fragment>
)
  }
}


export default FilterableProjects;
