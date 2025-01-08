import React from 'react'
import { hightlightsSlides } from '../constants'

const VideoCarousel = () => {
    return (
        <>
            <div className='flex items-center'>
                {hightlightsSlides.map((list, index) => (
                    <div
                        id='slider'
                        key={list.id}
                        className='sm:pr-20 pr-10'>
                        <div className='video-carousel_container'>
                            <div
                                className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
                                <video
                                    id="video"
                                    playsInline={true}
                                    preload='auto'
                                    muted
                                >
                                    <source src={list.video} type="video/mp4" />
                                </video>
                            </div>

                            <div className='absolute top-12 left-[5%] z-10'>
                                {list.textLists.map((text) => (
                                    <p
                                        key={text}
                                        className='md:text-2xl text-xl font-medium'
                                    >
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default VideoCarousel