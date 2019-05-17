import React, { Component } from 'react';
import '../../scss/components/_app.scss';
import { BrowserRouter as Router} from "react-router-dom";
import Header from './Header';
import Routes from './Routes';
class App extends Component {

componentDidMount() {
  const config = {
  	threshold: 0.55
  }
    const scrollHighlight = (entries, observer) => {
  	entries.forEach((entry) => {
  		if(entry.isIntersecting && entry.intersectionRatio >= config.threshold) {
      if(entry.target.id === "" || entry.target.id === undefined || entry.target.id === null) {
      console.log('empty');
       }
  }
}

  const observer = new IntersectionObserver(scrollHighlight, config);
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
  observer.observe(section);
  });

  const smoothScroll = (e) => {
  e.preventDefault();

    let fromTop = el => el.getBoundingClientRect().top;
    let tID = this.getAttribute("href")
    let tSection = document.querySelector(tID);
    let topDistance = fromTop(tSection);
    window.scrollBy({ top: topDistance, left: 0, behavior: "smooth" });
const theNav = document.querySelectorAll('.menu-links__item');
theNav.forEach(each => (each.onclick = smoothScroll));
}
}
  render() {
    return (
      <div className="App">
        <div className="page-wrapper">
        <Router basename={process.env.PUBLIC_URL}>
          <React.Fragment>
          <Header/>
          <Routes/>
          </React.Fragment>
        </Router>
        </div>
      </div>
    );
  }
}
export default App;
