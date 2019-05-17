
import React, {Component} from 'react';
import ProjectItem from './ProjectItem';
import TestImage from '../../img/Homepage.png';

class ProjectListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedimg: '#',
      status: false
    }
    this.lazyLoad = this.lazyLoad.bind(this);
    this.loadImage = this.loadImage.bind(this);
  }


  lazyLoad(entries, observer) {
    const options= {
      threshold: 0.55
    }
    entries.forEach((entry) => {
        if (entry.intersectionRatio > options.threshold) {
          this.loadImage(entry.target);
        }
    })
  }


  loadImage(imageElement) {
      imageElement.src = imageElement.dataset.src;
      imageElement.classList.add('loaded');
      this.setState({
        loadedimg: TestImage,
        status: true
      })
  }

  componentDidMount() {
    const lazyObserve = new IntersectionObserver(this.lazyLoad);
    const tempImages = document.querySelectorAll('.demo-img');
    tempImages.forEach((tempImages) => {
    lazyObserve.observe(tempImages);
    });
  }
  render() {
    return (
      <div className="list-of-projects">
      {
        // if projects isnt empty, then display them, otherwise display 404 component.
      this.props.projects.map(project => {
        return(
          <ProjectItem project={project}  key={project.id} image={this.state.loadedimg} loaded={this.state.status}/>
        )
      })
    }
        </div>

    )
  }
}


export default ProjectListing;
