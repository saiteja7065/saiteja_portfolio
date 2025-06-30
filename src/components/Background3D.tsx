
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ position, color, shape }: { position: [number, number, number], color: string, shape: 'sphere' | 'box' | 'torus' }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.set(
        position[0] + Math.sin(state.clock.elapsedTime * 0.5) * 0.5,
        position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5,
        position[2] + Math.cos(state.clock.elapsedTime * 0.3) * 0.3
      );
      
      // Add pulsing effect
      const scale = hovered ? 1.2 + Math.sin(state.clock.elapsedTime * 3) * 0.1 : 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      meshRef.current.scale.setScalar(scale);
    }
  });

  const renderShape = () => {
    const commonProps = {
      ref: meshRef,
      onPointerOver: () => setHovered(true),
      onPointerOut: () => setHovered(false),
    };

    switch (shape) {
      case 'sphere':
        return (
          <mesh {...commonProps}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial 
              color={color} 
              transparent 
              opacity={hovered ? 0.8 : 0.6}
              emissive={hovered ? color : '#000000'}
              emissiveIntensity={hovered ? 0.2 : 0}
            />
          </mesh>
        );
      case 'box':
        return (
          <mesh {...commonProps}>
            <boxGeometry args={[0.8, 0.8, 0.8]} />
            <meshStandardMaterial 
              color={color} 
              transparent 
              opacity={hovered ? 0.8 : 0.6}
              emissive={hovered ? color : '#000000'}
              emissiveIntensity={hovered ? 0.2 : 0}
            />
          </mesh>
        );
      case 'torus':
        return (
          <mesh {...commonProps}>
            <torusGeometry args={[0.6, 0.2, 16, 32]} />
            <meshStandardMaterial 
              color={color} 
              transparent 
              opacity={hovered ? 0.8 : 0.6}
              emissive={hovered ? color : '#000000'}
              emissiveIntensity={hovered ? 0.2 : 0}
            />
          </mesh>
        );
      default:
        return null;
    }
  };

  return renderShape();
};

const Background3D = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed inset-0 -z-10 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 60 }}
        onCreated={(state) => {
          state.gl.setClearColor('#000000', 0);
        }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#6366f1" />
        <pointLight position={[0, 10, -10]} intensity={0.4} color="#8b5cf6" />
        
        <FloatingShape position={[-4, 2, -2]} color="#6366f1" shape="sphere" />
        <FloatingShape position={[4, -2, -3]} color="#8b5cf6" shape="box" />
        <FloatingShape position={[0, 3, -4]} color="#06b6d4" shape="torus" />
        <FloatingShape position={[-3, -3, -2]} color="#10b981" shape="sphere" />
        <FloatingShape position={[3, 1, -3]} color="#f59e0b" shape="box" />
        <FloatingShape position={[0, -4, -5]} color="#ef4444" shape="torus" />
        <FloatingShape position={[-2, 0, -1]} color="#ec4899" shape="sphere" />
        <FloatingShape position={[2, -4, -2]} color="#14b8a6" shape="box" />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.3}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
};

export default Background3D;
