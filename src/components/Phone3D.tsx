import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, RoundedBox, Html } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapScreen = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || mapLoaded) return;

    // You can replace this with your Mapbox token
    mapboxgl.accessToken = 'pk.eyJ1IjoibG92YWJsZSIsImEiOiJjbTcxdWo5dWMwMGI3MmtzNDk5c2lhcTg1In0.VfihaRdJBN2U1XTIzRrXtw';
    
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [67.0011, 24.8607], // Karachi, Pakistan
      zoom: 12,
      interactive: false,
      attributionControl: false,
    });

    // Add markers to simulate ride-hailing app
    new mapboxgl.Marker({ color: '#4F46E5' })
      .setLngLat([67.0011, 24.8607])
      .addTo(map);

    new mapboxgl.Marker({ color: '#10B981' })
      .setLngLat([67.0211, 24.8707])
      .addTo(map);

    setMapLoaded(true);

    return () => map.remove();
  }, [mapLoaded]);

  return (
    <div 
      ref={mapContainer} 
      style={{ 
        width: '360px', 
        height: '740px',
        borderRadius: '40px',
      }} 
    />
  );
};

const PhoneModel = () => {
  const groupRef = useRef<THREE.Group>(null);

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
          envMapIntensity={1}
        />
      </RoundedBox>
      
      {/* Screen bezel */}
      <RoundedBox args={[1.95, 4.15, 0.08]} radius={0.13} smoothness={4} position={[0, 0, 0.08]}>
        <meshStandardMaterial color="#000000" />
      </RoundedBox>
      
      {/* Screen with Map - Using HTML overlay */}
      <Html
        transform
        position={[0, 0, 0.13]}
        style={{
          width: '360px',
          height: '740px',
          borderRadius: '40px',
          overflow: 'hidden',
        }}
        distanceFactor={1.95}
      >
        <MapScreen />
      </Html>
      
      {/* Notch */}
      <RoundedBox args={[0.6, 0.12, 0.06]} radius={0.06} smoothness={4} position={[0, 1.95, 0.14]}>
        <meshStandardMaterial color="#000000" />
      </RoundedBox>
      
      {/* Camera lens */}
      <mesh position={[-0.15, 1.95, 0.15]}>
        <cylinderGeometry args={[0.05, 0.05, 0.02, 32]} />
        <meshStandardMaterial color="#1a1a1a" metalness={1} roughness={0.2} />
      </mesh>
      
      {/* Speaker grill */}
      <mesh position={[0.2, 1.95, 0.15]}>
        <boxGeometry args={[0.15, 0.03, 0.01]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.5} roughness={0.5} />
      </mesh>
      
      {/* Side buttons */}
      <mesh position={[1.02, 0.8, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.04, 0.4, 0.12]} />
        <meshStandardMaterial color="#2c2c2c" metalness={0.8} roughness={0.3} />
      </mesh>
      
      <mesh position={[1.02, -0.3, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.04, 0.25, 0.12]} />
        <meshStandardMaterial color="#2c2c2c" metalness={0.8} roughness={0.3} />
      </mesh>
      
      {/* Back camera module */}
      <group position={[-0.65, 1.5, -0.09]}>
        <RoundedBox args={[0.5, 0.5, 0.05]} radius={0.1} smoothness={4}>
          <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
        </RoundedBox>
        <mesh position={[-0.1, 0.1, 0.04]}>
          <cylinderGeometry args={[0.12, 0.12, 0.03, 32]} />
          <meshStandardMaterial color="#0a0a0a" metalness={1} roughness={0.1} />
        </mesh>
        <mesh position={[0.1, 0.1, 0.04]}>
          <cylinderGeometry args={[0.12, 0.12, 0.03, 32]} />
          <meshStandardMaterial color="#0a0a0a" metalness={1} roughness={0.1} />
        </mesh>
        <mesh position={[-0.1, -0.1, 0.04]}>
          <cylinderGeometry args={[0.12, 0.12, 0.03, 32]} />
          <meshStandardMaterial color="#0a0a0a" metalness={1} roughness={0.1} />
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
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1} 
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-5, 3, 2]} intensity={0.5} color="#4F46E5" />
        <pointLight position={[5, -3, -2]} intensity={0.3} color="#10B981" />
        <spotLight
          position={[0, 5, 3]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
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
