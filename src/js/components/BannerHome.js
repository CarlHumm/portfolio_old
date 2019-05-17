import React from 'react';
import Banner from './Banner';
import Person from '../../scss/img/svg/person-glasses.svg';
const BannerHome = () => {
  return(
  <Banner
    title={
      <h1 className="heading-headline"> Hi, my name's <span className="highlight">Carl.</span></h1>
    }
    subheading='I am a hampshire based Web Developer experienced in front and back-end web development'
    bannerID="home"
    svg = {
        <img  className="person-glasses" src={Person} alt="person-svg"/>
}
  >
  <a className="btn-hero" data-scroll="true" href="#contact">
    <span>Say Hello</span>
    <i class="fas fa-envelope"></i>
  </a>
  </Banner>
)
}

export default BannerHome;
