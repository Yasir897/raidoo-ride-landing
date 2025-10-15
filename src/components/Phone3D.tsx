import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, RoundedBox, Text } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const PhoneModel = () => {
  const groupRef = useRef<THREE.Group>(null);

  return (
    <group ref={groupRef} rotation={[0.1, 0.3, 0]}>
      {/* Phone Body */}
      <RoundedBox args={[2, 4, 0.2]} radius={0.2} smoothness={4} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </RoundedBox>
      
      {/* Screen */}
      <RoundedBox args={[1.8, 3.7, 0.05]} radius={0.15} smoothness={4} position={[0, 0, 0.13]}>
        <meshStandardMaterial 
          color="#4F46E5" 
          emissive="#4F46E5"
          emissiveIntensity={0.3}
        />
      </RoundedBox>
      
      {/* Notch */}
      <RoundedBox args={[0.5, 0.1, 0.05]} radius={0.05} smoothness={4} position={[0, 1.8, 0.14]}>
        <meshStandardMaterial color="#000000" />
      </RoundedBox>
      
      {/* Side Buttons */}
      <mesh position={[1.05, 0.5, 0]}>
        <boxGeometry args={[0.05, 0.3, 0.15]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
      
      {/* Camera */}
      <mesh position={[-0.6, 1.5, 0.14]}>
        <cylinderGeometry args={[0.08, 0.08, 0.05, 32]} />
        <meshStandardMaterial color="#000000" metalness={1} roughness={0.1} />
      </mesh>
    </group>
  );
};

const Phone3D = () => {
  return (
    <div className="w-full h-[500px] md:h-[600px]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <PhoneModel />
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={2}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
};

export default Phone3D;
