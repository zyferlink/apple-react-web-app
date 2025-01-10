import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

// Animation constants
const ANIMATION = {
    TITLE: { opacity: 1, y: 0 },
    LINK: { opacity: 1, y: 0, duration: 1, stagger: 0.25 },
};

const Highlights = () => {
    useGSAP(() => {
        gsap.to("#title", ANIMATION.TITLE);
        gsap.to(".highlight-link", ANIMATION.LINK);
    }, []);

    const HighlightLink = ({ text, imgSrc, altText, style }) => (
        <a href="#" className="highlight-link flex items-center text-blue text-lg">
            {text}
            <img src={imgSrc} alt={altText} className="ml-3" style={style} />
        </a>
    );

    return (
        <section
            id="highlights"
            className="w-screen overflow-hidden h-full common-padding bg-zinc"
        >
            <div className="screen-max-width">
                <div className="md-12 w-full md:flex items-end justify-between">
                    {/* Title */}
                    <h1 id="title" className="section-heading">
                        Get the highlights.
                    </h1>

                    {/* Links */}
                    <div className="flex flex-wrap items-end gap-5">
                        <HighlightLink
                            text="Watch the film"
                            imgSrc={watchImg}
                            altText="watch"
                        />
                        <p style={{ opacity: "0.2", marginBottom: "4px" }}>
                            |
                        </p>
                        <HighlightLink
                            text="Watch the event"
                            imgSrc={rightImg}
                            altText="right arrow"
                            style={{ marginBottom: "-4px" }}
                        />
                    </div>
                </div>

                {/* Video Carousel */}
                <VideoCarousel />
            </div>
        </section>
    );
};

export default Highlights;
