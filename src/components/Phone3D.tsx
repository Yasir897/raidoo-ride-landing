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
      {/* Phone Body (Aluminum frame) */}
      <RoundedBox args={[2, 4.2, 0.15]} radius={0.15} smoothness={4} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#2c2c2c" 
          metalness={0.9} 
          roughness={0.3}
        />
      </RoundedBox>
      
      {/* Screen bezel */}
      <RoundedBox args={[1.95, 4.15, 0.08]} radius={0.13} smoothness={4} position={[0, 0, 0.08]}>
        <meshStandardMaterial color="#000000" />
      </RoundedBox>
      
      {/* Screen with Map texture */}
      <RoundedBox args={[1.85, 4.0, 0.01]} radius={0.12} smoothness={4} position={[0, 0, 0.13]}>
        <meshStandardMaterial 
          map={texture} 
          emissive="#ffffff"
          emissiveIntensity={0.2}
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
      
      {/* Back camera module */}
      <group position={[-0.65, 1.5, -0.09]}>
        <RoundedBox args={[0.5, 0.5, 0.05]} radius={0.1} smoothness={4}>
          <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
        </RoundedBox>
        {/* Triple camera lenses */}
        <mesh position={[-0.1, 0.1, 0.04]}>
          <cylinderGeometry args={[0.12, 0.12, 0.03, 32]} />
          <meshStandardMaterial color="#0a0a0a" metalness={1} roughness={0.1} />
          <mesh position={[0, 0, 0.01]}>
            <cylinderGeometry args={[0.08, 0.08, 0.01, 32]} />
            <meshStandardMaterial color="#1a4d8f" metalness={0.9} roughness={0.1} />
          </mesh>
        </mesh>
        <mesh position={[0.1, 0.1, 0.04]}>
          <cylinderGeometry args={[0.12, 0.12, 0.03, 32]} />
          <meshStandardMaterial color="#0a0a0a" metalness={1} roughness={0.1} />
          <mesh position={[0, 0, 0.01]}>
            <cylinderGeometry args={[0.08, 0.08, 0.01, 32]} />
            <meshStandardMaterial color="#1a4d8f" metalness={0.9} roughness={0.1} />
          </mesh>
        </mesh>
        <mesh position={[-0.1, -0.1, 0.04]}>
          <cylinderGeometry args={[0.12, 0.12, 0.03, 32]} />
          <meshStandardMaterial color="#0a0a0a" metalness={1} roughness={0.1} />
          <mesh position={[0, 0, 0.01]}>
            <cylinderGeometry args={[0.08, 0.08, 0.01, 32]} />
            <meshStandardMaterial color="#1a4d8f" metalness={0.9} roughness={0.1} />
          </mesh>
        </mesh>
        {/* Flash */}
        <mesh position={[0.1, -0.1, 0.04]}>
          <cylinderGeometry args={[0.08, 0.08, 0.02, 32]} />
          <meshStandardMaterial 
            color="#fff5e1" 
            emissive="#fff5e1"
            emissiveIntensity={0.3}
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
