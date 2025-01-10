import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { hightlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils";

const SELECTORS = {
    slider: "#slider",
    video: "#video",
    title: "#title",
};

const VIDEO_WIDTH = {
    SMALL_SCREEN: "10vw",
    LARGE_SCREEN: "4vw",
    DEFAULT: "12px",
};

const BG_COLOR = {
    PLAYING: "white",
    DEFAULT: "#afafaf",
};

const VideoCarousel = () => {
    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDivRef = useRef([]);

    // State management for video controls and playback
    const [video, setVideo] = useState({
        isEnd: false,
        startPlay: false,
        videoId: 0,
        isLastVideo: false,
        isPlaying: false,
    });

    const [loadedData, setLoadedData] = useState([]);

    const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

    const handleVideoEnd = (index) => {
        setVideo((prevVideo) => ({
            ...prevVideo,
            isEnd: true,
            videoId: index + 1,
        }));
    };

    const handleVideoLast = () => {
        setVideo((prevVideo) => ({
            ...prevVideo,
            isLastVideo: true,
        }));
    };

    const handleVideoReset = () => {
        setVideo((prevVideo) => ({
            ...prevVideo,
            isLastVideo: false,
            videoId: 0,
        }));
    };

    // Toggle play/pause state
    const togglePlayPause = () => {
        setVideo((prevVideo) => ({
            ...prevVideo,
            isPlaying: !prevVideo.isPlaying,
        }));
    };

    const getControlButtonIcon = () => {
        if (isLastVideo) return replayImg;
        return isPlaying ? pauseImg : playImg;
    };

    const getControlButtonAlt = () => {
        if (isLastVideo) return "replay";
        return isPlaying ? "pause" : "play";
    };

    // Handle metadata loaded for each video
    const handleLoadedMetaData = (index, element) => {
        setLoadedData((prevData) => [...prevData, element]);
    };

    // GSAP animations for slider transitions and video scroll triggers
    useGSAP(() => {
        gsap.to(SELECTORS.slider, {
            transform: `translateX(${-100 * videoId}%)`,
            duration: 2,
            ease: "power2.inOut",
        });

        gsap.to(SELECTORS.video, {
            scrollTrigger: {
                trigger: SELECTORS.video,
                toggleActions: "restart none none none",
            },
            onComplete: () => {
                setVideo((prevVideo) => ({
                    ...prevVideo,
                    startPlay: true,
                    isPlaying: true,
                }));
            },
        });
    }, [isEnd, videoId]);

    // Sync playback state with the video element
    useEffect(() => {
        if (loadedData.length > 3) {
            if (!isPlaying) {
                videoRef.current[videoId].pause();
            } else {
                startPlay && videoRef.current[videoId].play();
            }
        }
    }, [startPlay, videoId, isPlaying, loadedData]);

    // Animate progress bar for each video
    useEffect(() => {
        let currentProgress = 0;
        const span = videoSpanRef.current;

        if (span[videoId]) {
            const anim = gsap.to(span[videoId], {
                onUpdate: () => {
                    const progress = Math.ceil(anim.progress() * 100);

                    if (progress !== currentProgress) {
                        currentProgress = progress;

                        gsap.to(videoDivRef.current[videoId], {
                            width:
                                window.innerWidth < 760
                                    ? VIDEO_WIDTH.SMALL_SCREEN
                                    : window.innerWidth < 1200
                                        ? VIDEO_WIDTH.SMALL_SCREEN
                                        : VIDEO_WIDTH.LARGE_SCREEN,
                        });

                        gsap.to(span[videoId], {
                            width: `${currentProgress}%`,
                            backgroundColor: BG_COLOR.PLAYING,
                        });
                    }
                },
                onComplete: () => {
                    if (isPlaying) {
                        gsap.to(videoDivRef.current[videoId], {
                            width: VIDEO_WIDTH.DEFAULT,
                        });

                        gsap.to(span[videoId], {
                            backgroundColor: BG_COLOR.DEFAULT,
                        });
                    }
                },
            });

            if (videoId === 0) {
                anim.restart();
            }

            const animUpdate = () => {
                anim.progress(
                    videoRef.current[videoId].currentTime /
                    hightlightsSlides[videoId].videoDuration
                );
            };

            if (isPlaying) {
                gsap.ticker.add(animUpdate);
            } else {
                gsap.ticker.remove(animUpdate);
            }
        }
    }, [videoId, startPlay]);

    return (
        <>
            {/* Video carousel slider */}
            <div className="flex items-center mt-16">
                {hightlightsSlides.map((list, index) => (
                    <div
                        id="slider"
                        key={list.id}
                        className="sm:pr-20 pr-10"
                    >
                        <div className="video-carousel_container">
                            <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                                <video
                                    id="video"
                                    playsInline
                                    preload="auto"
                                    muted
                                    className={`${list.id === 2 && "translate-x-44"
                                        } pointer-events-none`}
                                    ref={(element) =>
                                        (videoRef.current[index] = element)
                                    }
                                    onPlay={() => {
                                        setVideo((prevVideo) => ({
                                            ...prevVideo,
                                            isPlaying: true,
                                        }));
                                    }}
                                    onEnded={() =>
                                        index !== 3
                                            ? handleVideoEnd(index)
                                            : handleVideoLast()
                                    }
                                    onLoadedMetadata={(element) =>
                                        handleLoadedMetaData(index, element)
                                    }
                                >
                                    <source
                                        src={list.video}
                                        type="video/mp4"
                                    />
                                </video>
                            </div>

                            {/* Video text overlay */}
                            <div className="absolute top-12 left-[5%] z-10">
                                {list.textLists.map((text) => (
                                    <p
                                        key={text}
                                        className="carousel-text"
                                    >
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Video controls */}
            <div className="relative flex-center mt-10">
                <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
                    {videoRef.current.map((_, index) => (
                        <span
                            key={index}
                            ref={(element) =>
                                (videoDivRef.current[index] = element)
                            }
                            className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
                        >
                            <span
                                className="absolute h-full w-full rounded-full"
                                ref={(element) =>
                                    (videoSpanRef.current[index] = element)
                                }
                            />
                        </span>
                    ))}
                </div>
                <button className="control-btn">
                    <img
                        src={getControlButtonIcon()}
                        alt={getControlButtonAlt()}
                        onClick={
                            isLastVideo
                                ? handleVideoReset
                                : togglePlayPause
                        }
                    />
                </button>
            </div>
        </>
    );
};

export default VideoCarousel;
