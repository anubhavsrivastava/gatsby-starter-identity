import React from 'react';

import config from '../../config';
const pic = require('../assets/images/avatar.png');

export default function Footer() {
  return (
    <header>
      <span className="avatar">
        <img height="128px" src={pic} alt="" />
      </span>
      <h1>{config.authorName}</h1>
      <p>{config.heading}</p>
    </header>
  );
}
