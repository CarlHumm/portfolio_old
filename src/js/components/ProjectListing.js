
import React, {Component} from 'react';
import ProjectItem from './ProjectItem';
import { CSSTransition } from 'react-transition-group';
import Modal from './Modal';

class ProjectListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedimg: '',
      modalData: 'default',
      modalOpen: false
    }
    this.projectClick = this.projectClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  projectClick(index, event) {
    event.preventDefault();
    let modalData = this.props.projects.filter(selected => {
      return selected.id == index;
    });
      this.setState({
        modalData: modalData,
        modalOpen: true});
}

closeModal(evt) {
  var modal;
  let container = document.querySelector('.modal-container');
  let overlay = container.firstChild;
  overlay.classList.toggle('visible');
  modal = evt.target.parentNode;
  modal.classList.add('animated');
  modal.classList.add('slideOutDown');
      this.setState({
      modalOpen: false
      })
}

  render() {
    return (
      <div className="list-of-projects">
      {
       this.props.projects.length ?
       this.props.projects.map(project => {
        return(
          <ProjectItem project={project}  key={project.id} selected={this.projectClick.bind(null, project.id)} image={project.imgURL}/>
        )
      }) :
          <h3 className="notfound-message">  No projects found for <span className="four">{this.props.tag}.</span></h3>
      }
      {
        this.state.modalOpen ?
        <Modal selected={this.state.modalData} isOpen = {this.state.modalOpen} closeModal={this.closeModal}/>
        : ''
      }
        </div>

    )
  }
}


export default ProjectListing;
