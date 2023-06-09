// import React, { Suspense, useEffect, useState } from 'react'
// import { Canvas } from "@react-three/fiber";
// import CanvasLoader from "../Loader";
// import { OrbitControls, useGLTF } from '@react-three/drei';

// const Computers = () => {
//   const computer = useGLTF('./desktop_pc/scene.gltf')
//   return (
//     <mesh>
//       <hemisphereLight intensity={0.5} groundColor="black"/>
//       <pointLight intensity={1}/>
//       <primitive
//         object={computer.scene}
//         scale={1.75}
//         position={[0, -3.25 ,-1.5]}
//         rotation={[-0.01, -0.2,-0.1]}
//       />
//     </mesh>
//   )
// }

// const ComputersCanvas = () => {
//   return(
//     <canvas
//       frameLoop='demand'
//       shadows
//       camera={{position: [20,3,5], fov:25}}
//       gl={{preserveDrawingBuffer: true}}
//     >
//       <Suspense fallback={<CanvasLoader/>}>
//         <OrbitControls 
//             enableZoom={false}
//             maxPolarAngle={Math.PI / 2}
//             minPolarAngle={Math.PI / 2}
//           />
//         <Computers />
//       </Suspense>
//       <Preload all />
//     </canvas>
//   )
// }

// export default Computers

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene2.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.35} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0.1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 1.5 : 2.5}
        position={isMobile ? [0, -1.55, 0] : [0, -3.5, 0]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={4}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;