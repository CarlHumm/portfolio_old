import React from 'react';
const Banner = (props) => {
  let bgImage = props.imageURL
  return(
    <section id={props.bannerID} className="banner" style={{backgroundImage: props.imageURL ? `url(${bgImage})` : false}}>
      <div className="heading-contents animated" data-anim="slideInLeft">
        {props.title}
        <p className="heading-subheading"> {props.subheading} </p>
        { props.children }
      </div>
      <div className="svg-section">
      {props.svg}
      </div>
    </section>
  )
}

export default Banner;
