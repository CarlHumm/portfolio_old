import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      linkPath: '#'
    }
  }

  toggleMenu = (evt) => {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }

  render() {
  return(
    <header className="top-header">
    <div className="top-bar">
    <a href="#contact" data-scroll="true">
      <i class="fas fa-envelope"></i>
      </a>
    </div>
    <div className="bottom-bar">
    <div onClick={this.toggleMenu} className={this.state.isOpen ? "menu__button toggled": "menu__button"}>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
    <div className="header-logo">
      <div className="logo-mark">
        <span><a href="/#"> CSH </a></span>
      </div>
    </div>
    <nav className={ this.state.isOpen ? "menu-links slide": "menu-links"}>
        <a className={"menu-links__item"} aria-current="page" data-scroll = "true" href={this.state.linkPath + "home"}> Home </a>
        <a className="menu-links__item" aria-current="page" data-scroll = "true" href={this.state.linkPath + "projects"}> Projects </a>
        <a className="menu-links__item" aria-current="page" data-scroll = "true" href={this.state.linkPath + "about"}> About </a>
        <a className={"menu-links__item"} aria-current="page" data-scroll = "true" href={this.state.linkPath + "services"}> Services </a>
        <a className="menu-links__item" aria-current="page" data-scroll = "true" href={this.state.linkPath + "contact"}> Contact </a>
    </nav>
    </div>
    <div onClick={this.toggleMenu} className={ this.state.isOpen ? "overlay visible": "overlay"}></div>
    </header>
  )
}
}


export default Header;
