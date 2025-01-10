import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 760;
const DEBOUNCE_DELAY = 100;
const HERO_FADE_IN_DELAY = 2;
const CALL_TO_ACTION_FADE_IN_DELAY = 2;
const EVENT_RESIZE = "resize";

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(
        window.innerWidth < MOBILE_BREAKPOINT ? smallHeroVideo : heroVideo
    );

    // Helper function to update video source based on screen size
    const updateVideoSrc = () => {
        const newSrc = window.innerWidth < MOBILE_BREAKPOINT ? smallHeroVideo : heroVideo;
        setVideoSrc(newSrc);
    };

    // Debounced resize handler to prevent excessive calls
    useEffect(() => {
        const handleResize = () => {
            clearTimeout(window.resizeTimeout);
            window.resizeTimeout = setTimeout(updateVideoSrc, DEBOUNCE_DELAY);
        };

        window.addEventListener(EVENT_RESIZE, handleResize);

        return () => {
            clearTimeout(window.resizeTimeout);
            window.removeEventListener(EVENT_RESIZE, handleResize);
        };
    }, []);

    // GSAP animations
    useGSAP(() => {
        gsap.to("#hero",
            { opacity: 1, delay: HERO_FADE_IN_DELAY }
        );
        gsap.to("#callToAction",
            { opacity: 1, y: -50, delay: CALL_TO_ACTION_FADE_IN_DELAY }
        );
    });

    return (
        <section className="w-full nav-height bg-black relative">
            {/* Hero Content */}
            <div className="h-5/6 w-full flex-center flex-col">
                <p id="hero" className="hero-title">
                    iPhone 15 Pro
                </p>
                <div className="md:w-10/12 w-9/12">
                    <video
                        className="pointer-events-none"
                        autoPlay
                        muted
                        key={videoSrc}
                        playsInline
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
            </div>

            {/* Call to Action */}
            <div
                id="callToAction"
                className="flex flex-col items-center opacity-0 translate-y-20"
            >
                <a href="#highlights" className="btn">
                    Buy
                </a>
                <p className="font-normal text-xl">
                    From $199/month or $999
                </p>
            </div>
        </section>
    );
};

export default Hero;
