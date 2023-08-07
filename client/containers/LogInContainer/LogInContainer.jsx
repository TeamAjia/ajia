import React from 'react';
import LoginComponent from '../../components/LogInComponent/LogInComponent.jsx';
import { useState, useEffect, useRef } from 'react';
import TRUNK from 'vanta/dist/vanta.trunk.min';
import * as THREE from 'three';
import p5 from 'p5';

const LoginContainer = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        TRUNK({
          el: myRef.current,
          p5: p5,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          spacing: 8.0,
          color: 0x1db954,
          chaos: 10.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={myRef}>
      <LoginComponent />
    </div>
  );
};

export default LoginContainer;
