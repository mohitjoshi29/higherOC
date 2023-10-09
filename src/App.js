import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home';
import About from './About';


export default function App() {
  const [hom, setHom] = useState(true);
  const [abou, setAbou] = useState(false);

  function homefun() {
    // setHom({ hom: true, abou: false });
    setHom(true)
    setAbou(false)
  }
  function aboutfun() {
    // setAbou({
    //   hom: false,
    //   abou: true
    // })

    setHom(false)
    setAbou(true)

  }

  return (
    <>
      <div className="row">
        <div className='col-2'>
          <ul>
            <li onClick={homefun}>Home</li>
            <li onClick={aboutfun}>About</li>
          </ul>
        </div>
        <div className='col-10' style={{ borderLeft: "2px solid red" }}>
          {
            abou ? <About /> : <Home />
          }
        </div>
      </div>
    </>
  );
}
