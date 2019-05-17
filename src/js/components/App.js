import React, { Component } from 'react';
import '../../scss/index.scss';
import { BrowserRouter as Router} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Routes from './Routes';
class App extends Component {

componentDidMount() {

/////////////////////////////////
//  WATCH FOR ANIMATIONS
/////////////////////////////////



/////////////////////////////////
// WATCH FOR LAZY LOADED ASSETS
/////////////////////////////////



/////////////////////////////////
// WATCH FOR SECTIONS THAT MATCH MENU LINK
/////////////////////////////////



   /////////////////////////////////
  // SMOOTH SCROLLING
 /////////////////////////////////
}
  render() {
    return (
      <div className="App">
        <div className="page-wrapper">
        <Router basename={process.env.PUBLIC_URL}>
          <React.Fragment>
          <Header/>
          <Routes/>
          <Footer/>
          </React.Fragment>
        </Router>
        </div>
      </div>
    );
  }
}
export default App;
