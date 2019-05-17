import React from 'react';
import ReactCSSTransitionGroup from 'react-transition-group';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMouseInside: false
    }

  }

  componentDidMount() {
     }
mouseEnter = (e) => {
this.setState({ isMouseInside: true });
e.target.style.backgroundColor = "#d61117";
e.target.parentNode.style.border = "4px solid #d61117";
}
mouseLeave = (e) => {
this.setState({ isMouseInside: false });
e.target.style.backgroundColor = "#dedede";
e.target.parentNode.style.border = "4px solid #dedede";
}
  render() {
    return(
      <div className="modal-container">
      <div onClick={this.props.closeModal} className={ this.props.isOpen ? "overlay visible": "overlay"}></div>
      <div className="modal animated slideInUp">
        <figure className="modal-image">
          <img src={`static/media/${this.props.selected[0].imgURL}`} alt="image here"></img>
        </figure>
        <div className="modal-description">
            <h2> {this.props.selected[0].title} </h2>
            <p>  {this.props.selected[0].content} </p>
            <div className="group">
            <a className="btn-primary" href={this.props.selected[0].websiteURL}  target="_blank"> View </a>
            </div>
        </div>
      <button className="btn_close" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onClick={this.props.closeModal}>
      {this.state.isMouseInside ? <i class="fa fa-window-close" aria-hidden="true"></i> : "Close Modal"}
       </button>
      </div>
      </div>
    )
  }
}

export default Modal;
