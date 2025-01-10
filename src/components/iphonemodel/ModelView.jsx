import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import Lights from "./Lights";
import IPhone from "./IPhone";
import { Suspense } from "react";
import * as THREE from "three";
import Loader from "./Loader";

// Constants for magic strings and numbers
const CAMERA_POSITION = [0, 0, 4];
const ORBIT_CONTROL_SETTINGS = {
  enableZoom: false,
  enablePan: false,
  rotateSpeed: 0.4,
  target: new THREE.Vector3(0, 0, 0),
};
const AMBIENT_LIGHT_INTENSITY = 0.3;
const SMALL_SCALE = [15, 15, 15];
const LARGE_SCALE = [17, 17, 17];
const CLASSNAME_BASE = "w-full h-full absolute";
const RIGHT_CLASS = "right-[-100%]";
const GROUP_POSITION = [0, 0, 0];
const SMALL_NAME = "small";
const LARGE_NAME = "large";

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
  const isIndexTwo = index === 2;
  const isIndexOne = index === 1;

  return (
    <View
      index={index}
      id={gsapType}
      className={`${CLASSNAME_BASE} ${isIndexTwo ? RIGHT_CLASS : ""}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={AMBIENT_LIGHT_INTENSITY} />

      {/* Perspective Camera */}
      <PerspectiveCamera makeDefault position={CAMERA_POSITION} />

      {/* Scene Lights */}
      <Lights />

      {/* Orbit Controls */}
      <OrbitControls
        makeDefault
        ref={controlRef}
        {...ORBIT_CONTROL_SETTINGS}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      {/* 3D Model Group */}
      <group
        ref={groupRef}
        name={isIndexOne ? SMALL_NAME : LARGE_NAME}
        position={GROUP_POSITION}
      >
        <Suspense fallback={<Loader />}>
          <IPhone
            scale={isIndexOne ? SMALL_SCALE : LARGE_SCALE}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
