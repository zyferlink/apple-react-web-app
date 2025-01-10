import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';
import { explore1Img, explore2Img, exploreVideo } from '../utils';

// Constants for magic strings/numbers
const SELECTORS = {
  VIDEO: '#exploreVideo',
  FEATURES_TITLE: '#features_title',
  GROW_ANIMATION: '.g_grow',
  TEXT_ANIMATION: '.g_text',
};

const ANIMATIONS = {
  VIDEO_SCROLL_TRIGGER: {
    trigger: SELECTORS.VIDEO,
    toggleActions: 'play pause reverse restart',
    start: '-10% bottom',
  },
  TITLE_ANIMATION: { y: 0, opacity: 1 },
  GROW_ANIMATION: { scale: 1, opacity: 1, ease: 'power1' },
  TEXT_ANIMATION: { y: 0, opacity: 1, ease: 'power2.inOut', duration: 1 },
};

const DURATION = {
  SCRUB: 5.5,
};

const Features = () => {
  const videoRef = useRef();

  // Init animations using GSAP
  useGSAP(() => {
    gsap.to(SELECTORS.VIDEO, {
      scrollTrigger: ANIMATIONS.VIDEO_SCROLL_TRIGGER,
      onComplete: () => {
        videoRef.current?.play();
      },
    });

    animateWithGsap(SELECTORS.FEATURES_TITLE, ANIMATIONS.TITLE_ANIMATION);
    animateWithGsap(SELECTORS.GROW_ANIMATION, ANIMATIONS.GROW_ANIMATION, { scrub: DURATION.SCRUB });
    animateWithGsap(SELECTORS.TEXT_ANIMATION, ANIMATIONS.TEXT_ANIMATION);
  }, []);

  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-wdith">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            Explore the full story.
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">iPhone.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">Forged in Titanium.</h2>
          </div>

          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video
                playsInline
                id="exploreVideo"
                className="w-full h-full object-cover object-center"
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={explore1Img} alt="Titanium" className="feature-video g_grow" />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={explore2Img} alt="Titanium 2" className="feature-video g_grow" />
                </div>
              </div>

              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    iPhone 15 Pro is{' '}
                    <span className="text-white">
                      the first iPhone to feature an aerospace-grade titanium design
                    </span>,
                    using the same alloy that spacecrafts use for missions to Mars.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Titanium has one of the best strength-to-weight ratios of any metal, making these our{' '}
                    <span className="text-white">lightest Pro models ever.</span> You'll notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
