import { OrbitControls } from "@react-three/drei";
import { LoadModel } from "./LoadModel";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useState, useRef } from "react";


import React from "react";
export const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 2000);
  }, []);

  const planeRef = useRef();

  useFrame(() => {
    if(planeRef.current) {
      planeRef.current.rotation.z += THREE.MathUtils.degToRad(1);
    }
  })

  return (
    <>

    <OrbitControls />
      <mesh ref={planeRef}>
        <planeGeometry attach="geometry" args={[2, 2]} />
        <meshStandardMaterial attach="material" color="white" />
      </mesh>
      {isVisible ? <LoadModel /> : <></>}
    </>
  );
};
