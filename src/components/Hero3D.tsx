
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const RotatingCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={[3, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#6366f1" />
    </mesh>
  );
};

const FloatingRing = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.4;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[-3, 0, 0]}>
      <torusGeometry args={[1, 0.3, 16, 32]} />
      <meshStandardMaterial color="#8b5cf6" />
    </mesh>
  );
};

const Hero3DScene = () => {
  return (
    <div className="h-64 w-full">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[-10, -10, -10]} color="#6366f1" />
        
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Center>
            <Text3D
              font="/fonts/helvetiker_regular.typeface.json"
              size={0.5}
              height={0.1}
              curveSegments={12}
            >
              DEVELOPER
              <meshStandardMaterial color="#ffffff" />
            </Text3D>
          </Center>
        </Float>
        
        <RotatingCube />
        <FloatingRing />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
};

export default Hero3DScene;
