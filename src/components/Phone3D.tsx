import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, RoundedBox } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import mapScreen from '@/assets/map-screen.png';

const PhoneModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  const texture = useLoader(THREE.TextureLoader, mapScreen);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef} rotation={[0.2, 0.3, 0]}>
      {/* Phone Body (Titanium frame - iPhone 15 Pro Max style) */}
      <RoundedBox args={[2, 4.2, 0.15]} radius={0.15} smoothness={4} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#5a5a5a" 
          metalness={0.95} 
          roughness={0.15}
        />
      </RoundedBox>
      
      {/* Back glass */}
      <RoundedBox args={[1.98, 4.18, 0.05]} radius={0.14} smoothness={4} position={[0, 0, -0.08]}>
        <meshStandardMaterial 
          color="#c8c8d0"
          metalness={0.3}
          roughness={0.1}
        />
      </RoundedBox>
      
      {/* Screen bezel */}
      <RoundedBox args={[1.95, 4.15, 0.08]} radius={0.13} smoothness={4} position={[0, 0, 0.08]}>
        <meshStandardMaterial color="#000000" />
      </RoundedBox>
      
      {/* Screen with Map texture - Full screen */}
      <RoundedBox args={[1.9, 4.1, 0.01]} radius={0.12} smoothness={4} position={[0, 0, 0.13]}>
        <meshStandardMaterial 
          map={texture} 
          emissive="#ffffff"
          emissiveIntensity={0.3}
        />
      </RoundedBox>
      
      {/* Notch */}
      <RoundedBox args={[0.6, 0.12, 0.06]} radius={0.06} smoothness={4} position={[0, 1.95, 0.14]}>
        <meshStandardMaterial color="#000000" />
      </RoundedBox>
      
      {/* Camera lens in notch */}
      <mesh position={[-0.15, 1.95, 0.15]}>
        <cylinderGeometry args={[0.05, 0.05, 0.02, 32]} />
        <meshStandardMaterial color="#1a1a1a" metalness={1} roughness={0.2} />
      </mesh>
      
      {/* Speaker grill */}
      <mesh position={[0.2, 1.95, 0.15]}>
        <boxGeometry args={[0.15, 0.03, 0.01]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.5} roughness={0.5} />
      </mesh>
      
      {/* Side power button */}
      <mesh position={[1.02, 0.8, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.04, 0.4, 0.12]} />
        <meshStandardMaterial color="#2c2c2c" metalness={0.8} roughness={0.3} />
      </mesh>
      
      {/* Side volume buttons */}
      <mesh position={[1.02, -0.3, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.04, 0.25, 0.12]} />
        <meshStandardMaterial color="#2c2c2c" metalness={0.8} roughness={0.3} />
      </mesh>
      
      {/* Back camera module - iPhone 15 Pro Max style */}
      <group position={[-0.65, 1.5, -0.11]}>
        {/* Camera bump base */}
        <RoundedBox args={[0.65, 0.65, 0.08]} radius={0.15} smoothness={4}>
          <meshStandardMaterial 
            color="#4a4a52" 
            metalness={0.9} 
            roughness={0.2}
          />
        </RoundedBox>
        
        {/* Main camera (top left) */}
        <mesh position={[-0.13, 0.13, 0.05]}>
          <cylinderGeometry args={[0.14, 0.14, 0.04, 32]} />
          <meshStandardMaterial color="#1a1a1a" metalness={1} roughness={0.1} />
          <mesh position={[0, 0, 0.015]}>
            <cylinderGeometry args={[0.1, 0.1, 0.01, 32]} />
            <meshStandardMaterial color="#2a5a8f" metalness={0.9} roughness={0.05} />
          </mesh>
        </mesh>
        
        {/* Ultra-wide camera (top right) */}
        <mesh position={[0.13, 0.13, 0.05]}>
          <cylinderGeometry args={[0.14, 0.14, 0.04, 32]} />
          <meshStandardMaterial color="#1a1a1a" metalness={1} roughness={0.1} />
          <mesh position={[0, 0, 0.015]}>
            <cylinderGeometry args={[0.1, 0.1, 0.01, 32]} />
            <meshStandardMaterial color="#2a5a8f" metalness={0.9} roughness={0.05} />
          </mesh>
        </mesh>
        
        {/* Telephoto camera (bottom left) */}
        <mesh position={[-0.13, -0.13, 0.05]}>
          <cylinderGeometry args={[0.14, 0.14, 0.04, 32]} />
          <meshStandardMaterial color="#1a1a1a" metalness={1} roughness={0.1} />
          <mesh position={[0, 0, 0.015]}>
            <cylinderGeometry args={[0.1, 0.1, 0.01, 32]} />
            <meshStandardMaterial color="#2a5a8f" metalness={0.9} roughness={0.05} />
          </mesh>
        </mesh>
        
        {/* LiDAR scanner (bottom right) */}
        <mesh position={[0.13, -0.13, 0.05]}>
          <cylinderGeometry args={[0.09, 0.09, 0.03, 32]} />
          <meshStandardMaterial 
            color="#0a0a0a" 
            metalness={0.8} 
            roughness={0.3}
          />
        </mesh>
        
        {/* Flash */}
        <mesh position={[0.0, -0.25, 0.04]}>
          <cylinderGeometry args={[0.06, 0.06, 0.02, 32]} />
          <meshStandardMaterial 
            color="#fff8e1" 
            emissive="#fff8e1"
            emissiveIntensity={0.4}
          />
        </mesh>
      </group>
    </group>
  );
};

const Phone3D = () => {
  return (
    <div className="w-full h-[500px] md:h-[600px]">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />
        
        {/* Lighting setup for realistic appearance */}
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1.2} 
          castShadow
        />
        <pointLight position={[-5, 3, 2]} intensity={0.5} color="#4F46E5" />
        <pointLight position={[5, -3, -2]} intensity={0.4} color="#10B981" />
        <spotLight
          position={[0, 5, 3]}
          angle={0.3}
          penumbra={1}
          intensity={0.6}
          castShadow
        />
        
        <PhoneModel />
        
        <OrbitControls 
          enableZoom={true}
          minDistance={4}
          maxDistance={10}
          autoRotate={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
};

export default Phone3D;
