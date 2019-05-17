import React, {Component} from 'react';

const Dialog = (props) => {
  return(
    <div className={props.type}>
      <p> {props.msg} </p>
    </div>
  )
}

export default Dialog;
