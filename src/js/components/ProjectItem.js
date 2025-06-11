import React, {Component} from 'react';
import ProjectImage from '../../media/screen1.png';
import TestImage from '../../media/Homepage.png';

class ProjectItem extends Component {
  constructor(props) {
    super(props);
  }

 componentDidMount() {
}
  render() {

    return (
      <div className="project-item animated" id={this.props.project.id} data-anim="slideInDown" onClick={this.props.selected}>
        <div className="mac" style={{backgroundImage: `url(${ProjectImage})`}}>
              <div className="thumb">
                      <img src={`${process.env.REACT_APP_MEDIA_URL}/${this.props.image}`} alt="test-project" className="demo-img"></img>
              </div>
        </div>
        <div className="item-text-area">
          <h3> { this.props.project.title } </h3>
          <span className="category-tag" data-type={this.props.project.category}> {this.props.project.category} </span>
        </div>
      </div>
    )
  }
}

export default ProjectItem;
