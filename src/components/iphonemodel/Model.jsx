import React, { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ModelView from './ModelView';
import { yellowImg } from '../../utils';
import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from '../../constants/index';
import { animateWithGsapTimeline } from '../../utils/animations';

const VIEW1_SELECTOR = "#view1";
const VIEW2_SELECTOR = "#view2";
const HEADING_SELECTOR = "#heading";
const SMALL_SIZE = "small";
const LARGE_SIZE = "large";
const TIMELINE_ANIMATION_DURATION = 2;
const TRANSLATE_X_LARGE = "translateX(-100%)";
const TRANSLATE_X_SMALL = "translateX(0)";
const SECTION_PADDING_CLASS = "common-padding";
const SCREEN_MAX_WIDTH_CLASS = "screen-max-width";
const SECTION_HEADING_CLASS = "section-heading";
const SIZE_BUTTON_ACTIVE_STYLE = { 
  backgroundColor: 'white', color: 'black' 
};
const SIZE_BUTTON_INACTIVE_STYLE = { 
  backgroundColor: 'transparent', color: 'white' 
};

const Model = () => {
    const [size, setSize] = useState(SMALL_SIZE);
    const [model, setModel] = useState({
        title: "iPhone 15 Pro in Natural Titanium",
        color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
        img: yellowImg,
    });

    // References for camera control and model groups
    const cameraControlSmall = useRef();
    const cameraControlLarge = useRef();
    const smallGroup = useRef(new THREE.Group());
    const largeGroup = useRef(new THREE.Group());

    // Rotation states
    const [smallRotation, setSmallRotation] = useState(0);
    const [largeRotation, setLargeRotation] = useState(0);

    const timeline = gsap.timeline();

    useEffect(() => {
        if (size === LARGE_SIZE) {
            animateWithGsapTimeline(
                timeline,
                smallGroup,
                smallRotation,
                VIEW1_SELECTOR,
                VIEW2_SELECTOR,
                {
                    transform: TRANSLATE_X_LARGE,
                    duration: TIMELINE_ANIMATION_DURATION,
                }
            );
        } else if (size === SMALL_SIZE) {
            animateWithGsapTimeline(
                timeline,
                largeGroup,
                largeRotation,
                VIEW2_SELECTOR,
                VIEW1_SELECTOR,
                {
                    transform: TRANSLATE_X_SMALL,
                    duration: TIMELINE_ANIMATION_DURATION,
                }
            );
        }
    }, [size]);

    useGSAP(() => {
        gsap.to(HEADING_SELECTOR, { y: 0, opacity: 1 });
    }, []);

    return (
        <section className={SECTION_PADDING_CLASS}>
            <div className={SCREEN_MAX_WIDTH_CLASS}>
                <h1 id="heading" className={SECTION_HEADING_CLASS}>
                    Take a closer look.
                </h1>

                <div className="flex flex-col items-center mt-5">
                    <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
                        <ModelView
                            index={1}
                            groupRef={smallGroup}
                            gsapType="view1"
                            controlRef={cameraControlSmall}
                            setRotationState={setSmallRotation}
                            item={model}
                            size={size}
                        />

                        <ModelView
                            index={2}
                            groupRef={largeGroup}
                            gsapType="view2"
                            controlRef={cameraControlLarge}
                            setRotationState={setLargeRotation}
                            item={model}
                            size={size}
                        />

                        <Canvas
                            className="w-full h-full"
                            style={{
                                position: 'fixed',
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                overflow: 'hidden',
                            }}
                            eventSource={document.getElementById('root')}
                        >
                            <View.Port />
                        </Canvas>
                    </div>

                    <div className="mx-auto w-full">
                        <p className="text-sm font-light text-center mb-5">{model.title}</p>

                        <div className="flex-center">
                            <ul className="color-container">
                                {models.map((item, index) => (
                                    <li
                                        key={index}
                                        className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                                        style={{ backgroundColor: item.color[0] }}
                                        onClick={() => setModel(item)}
                                    />
                                ))}
                            </ul>

                            <button className="size-btn-container">
                                {sizes.map(({ label, value }) => (
                                    <span
                                        key={label}
                                        className="size-btn"
                                        style={
                                            size === value
                                                ? SIZE_BUTTON_ACTIVE_STYLE
                                                : SIZE_BUTTON_INACTIVE_STYLE
                                        }
                                        onClick={() => setSize(value)}
                                    >
                                        {label}
                                    </span>
                                ))}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Model;
