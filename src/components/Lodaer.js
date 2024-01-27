// Loader.js

import React from 'react';
import './Loader.css';
import loader from '../assets/dog.png'

const Loader = ({ loading, progress }) => {
  return (
    <div className={`loader-overlay ${loading ? '' : 'hidden'}`}>
        <div className="aligner">
        <img className="loader" alt="loader" src={loader}/>
        <h1 className="hey">HEY...</h1>
      </div>
    </div>
  );
};

export default Loader;
