import React from 'react';
import BannerHome from './BannerHome.js';
import FilterableProjects from './FilterableProjects.js';
import ContactForm from './ContactSection.js'
import Widgets from './SocialWidgets.js';
import Avatar from '../../media/avatar.PNG';
class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    const threshold= {
      threshold: 0.55
    }
    const animates = (entries, observer) => {
      entries.forEach((entry) => {
          if (entry.intersectionRatio > threshold.threshold) {
            let animationType = entry.target.dataset.anim;
            entry.target.classList.add(animationType);
          }
      })
    }

    const observeAnimation = new IntersectionObserver(animates, threshold);
    const targets = document.querySelectorAll(".animated");
    targets.forEach((targets) => {
    observeAnimation.observe(targets);
    });




    const options= {
      threshold: 0.55
    }
    const lazyLoad = (entries, observer) => {
      entries.forEach((entry) => {
          if (entry.intersectionRatio > options.threshold) {
            loadImage(entry.target);
          }
      })
    }

    const lazyObserve = new IntersectionObserver(lazyLoad, options);
    const tempImages = document.querySelectorAll('.lazy');
    tempImages.forEach((tempImages) => {
    lazyObserve.observe(tempImages);
    });


    function loadImage(imageElement) {
        console.dir(imageElement.querySelector('img'));
        imageElement.querySelector('img').src = imageElement.querySelector('img').dataset.src;
        imageElement.querySelector('img').classList.add('loaded');
    }


    function smoothScroll(e) {
      e.preventDefault();
      var tID;
      tID = this.getAttribute("href");
      let tSection = document.querySelector(tID);
      tSection.scrollIntoView({behavior: "smooth"});
    }
  const scrollLinks = document.querySelectorAll('[data-scroll]');
  scrollLinks.forEach(each => (each.onclick = smoothScroll));
  }

  render() {
  return (
    <main className="main-content">
      <BannerHome/>
      <section id="projects">
        <FilterableProjects/>
      </section>
      <section id="about">
        <div className="profile-container">
          <div className="profile-section animated" data-anim="slideInLeft">
            <figure className="profile-picture temp-image">
              <img src={Avatar} alt="portrait of web developer Carl Humm"/>
            </figure>
          <Widgets/>
          </div>
          <div className="profile-description animated" data-anim="fadeIn">
              <div className="text-container">
            <h3> About Me</h3>
            <p className="description__content">
             Hi there! My name's Carl. I am a web developer from hampshire with a passion for developing aesthetically pleasing and usable interfaces.
             Web Development interests me as it gives me the opportunity to combine my appreciation for good design with my proficiency with
             technology in order to help people. The idea that multiple people can find use in an interface or service I developed allows me to take pride in my work
             and ensure what I create meets and exceeds a user or clients expectation.
            </p>
              <p className="description__content">
             I have recentlly graduated with a First in Web Design & Development from Solent University
             and am now looking to make a career for myself in the industry. When not developing websites or keeping up
              to date with technology, I enjoy evening runs, sketching and travelling.
             </p>
            <a className="btn-primary"  href="/uploads/carlscv.pdf">
            <span>View CV!</span>
            <i class="far fa-file-pdf"></i>
            </a>
              </div>
          </div>
        </div>
      </section>
      <section className="services" id="services">
        <div className="services-container">
        <div className="section-heading">
          <h2> Services </h2>
          <p> Here are a list of services I offer. Need something else? <a href="#contact" data-scroll="true"> <span className="highlight">get in touch</span></a> and I'll see how I can help.</p>
        </div>
        <div className="service-card animated" data-anim="fadeIn">
          <div className="card-content">
          <h3> UX Design </h3>
          <p> Building websites with users in mind. Use of task/user analysis, personas, user research,
          and customer journeys to craft interfaces that are both clear in their function and enjoyable to use. </p>
          </div>
        </div>
        <div className="service-card animated" data-anim="fadeIn">
          <div className="card-content">
          <h3> SSL + Web Hosting </h3>
          <p> Providing clients with safe & secure web hosting option and helping with the deployment of
              applications and assets.</p>
          </div>
        </div>
        <div className="service-card animated" data-anim="fadeIn">
          <div className="card-content">
          <h3> Responsive Web Design </h3>
          <p>  Using a mobile first approach to create websites that look good at any size, resolution
               or orientation. </p>
          </div>
        </div>
        <div className="service-card animated" data-anim="fadeIn">
          <div className="card-content">
          <h3> SEO </h3>
          <p>Improving websites click through rates and helping businesses get discovered by using SEO best practices and developing with
             accessibility, performance and usability in mind. </p>
          </div>
        </div>
        <div className="service-card animated" data-anim="fadeIn">
          <div className="card-content">
          <h3> Web Application Development </h3>
          <p>  Building more interesting websites that use dynamic data supplied from custom web services, a database and
               integration with third party API. </p>
          </div>
        </div>
        <div className="service-card animated" data-anim="fadeIn">
          <div className="card-content">
          <h3> Wordpress CMS </h3>
          <p> Building sites that are practical for clients. Using Wordpress as a CMS so clients can
              add, edit and delete their content without needing to learn to code. </p>
          </div>
        </div>
        </div>
      </section>
      <section id="contact">
      <div className="contact-panel">
            <ContactForm/>
            </div>
            <div className="contact-links animated" data-anim="slideInDown">
                <h2> ...or follow me on  <span className="connect"> social media</span> </h2>
                <Widgets myclass="ribbon"/>
            </div>
      </section>
    </main>
)
}
}


export default Home;
