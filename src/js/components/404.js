import React from 'react';

const NoMatch = ({location}) => {
  return (<h1> 404 - No Match for <code>{process.env.PUBLIC_URL + location.pathname}</code></h1>)
}

export default NoMatch;
