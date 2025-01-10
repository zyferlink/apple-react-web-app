import React, { useRef } from 'react';
import { chipImg, frameImg, frameVideo } from '../utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const SCROLL_TRIGGER_START = "-10% bottom";
const CHIP_OPACITY = 0;
const CHIP_SCALE = 2;
const CHIP_ANIMATION_DURATION = 1.5;
const FADE_IN_DURATION = 1;
const EASE_TYPE = "power2.inOut";
const VIDEO_TYPE = "video/mp4";
const CHIP_IMAGE_DIMENSIONS = 180;

const HowItWorks = () => {

  const videoRef = useRef();

  // GSAP animations
  useGSAP(() => {
    // Animation for chip
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: "#chip",
        toggleActions: 'restart restart restart restart',
        start: SCROLL_TRIGGER_START,
      },
      opacity: CHIP_OPACITY,
      scale: CHIP_SCALE,
      duration: CHIP_ANIMATION_DURATION,
      ease: EASE_TYPE,
    });

    // Fade-in animation
    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: FADE_IN_DURATION,
      ease: EASE_TYPE,
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        {/* Chip Section */}
        <div id="chip" className="flex-center w-full my-20">
          <img
            src={chipImg}
            alt="chip"
            width={CHIP_IMAGE_DIMENSIONS}
            height={CHIP_IMAGE_DIMENSIONS}
          />
        </div>

        {/* Title and Subtitle */}
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro chip.
            <br /> A monster win for gaming.
          </h2>

          <p className="hiw-subtitle">
            It's here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>

        {/* Video Frame Section */}
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={frameVideo} type={VIDEO_TYPE} />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">
            Honkai: Star Rail
          </p>
        </div>

        {/* Text Content Section */}
        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              A17 Pro is an entirely new class of iPhone chip that delivers our{' '}
              <span className="text-white">
                best graphic performance by far
              </span>.
            </p>

            <p className="hiw-text g_fadeIn">
              Mobile{' '}
              <span className="text-white">
                games will look and feel so immersive
              </span>,
              with incredibly detailed environments and characters.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">Pro-class GPU</p>
            <p className="hiw-text">with 6 cores</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
