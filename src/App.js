import React, { Fragment, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { Camera } from './lib';

function capture(imgSrc) {
  console.log(imgSrc);
}

function App() {
  const cam = useRef(null);
  
  return (
    <Fragment>
      <Camera
        showFocus={true}
        front={false}
        capture={capture}
        ref={cam}
        width="80%%"
        height="auto"
        focusWidth="80%"
        focusHeight="60%"
        btnColor="white"
      />
      <button onClick={img => cam.current.capture(img)}>Take image</button>
    </Fragment>
  );
}

export default App;
