import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(
        window.innerWidth < 760 ? smallHeroVideo : heroVideo
    );

    // Helper function to update video source based on screen size
    const updateVideoSrc = () => {
        const newSrc = window.innerWidth < 760 ? smallHeroVideo : heroVideo;
        setVideoSrc(newSrc);
    };

    // Debounced resize handler to prevent excessive calls
    useEffect(() => {
        const handleResize = () => {
            clearTimeout(window.resizeTimeout);
            window.resizeTimeout = setTimeout(updateVideoSrc, 100); // Debounce by 100ms
        };

        window.addEventListener("resize", handleResize);

        return () => {
            clearTimeout(window.resizeTimeout);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // GSAP animations
    useGSAP(() => {
        gsap.to("#hero",
            { opacity: 1, delay: 2 }
        );
        gsap.to("#callToAction",
            { opacity: 1, y: -50, delay: 2 }
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
                <p className="font-large text-xl">From $199 / month or $999</p>
            </div>
        </section>
    );
};

export default Hero;
