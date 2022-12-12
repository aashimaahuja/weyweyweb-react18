import * as React from 'react';
import './styles.css';


export default function Demo2() {
  
  return (
    <>
      <video width="100%" height="90%" controls>
        <source src="http://localhost:3005/videos/demo2.mp4" type="video/mp4" />
      </video>
    </>
  );
}
