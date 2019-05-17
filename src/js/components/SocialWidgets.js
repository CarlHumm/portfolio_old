import React from 'react';



const Widgets = (props) => {
  return(
    <ul className={props.myclass ? `social-widgets ${props.myclass}` : `social-widgets`}>
      <li><a href="https://www.github.com/hummc/" target="_blank"><i className="fab fa-github"></i>github.com/hummc</a></li>
      <li><a href="https://twitter.com/carlhumm" target="_blank"><i className="fab fa-twitter"></i>twitter.com/carlhumm</a></li>
      <li><a href="https://www.linkedin.com/in/carlhumm/" target="_blank"><i className="fab fa-linkedin"></i>linkedin.com/in/carlhumm/</a></li>
      <li><a href="https://www.behance.net/carlhumm" target="_blank"><i className="fab fa-behance"></i>behance.net/carlhumm</a></li>
      <li><a href="https://codepen.io/HummC" target="_blank"><i className="fab fa-codepen"></i>codepen.io/HummC/</a></li>
    </ul>
  )
}

export default Widgets;
