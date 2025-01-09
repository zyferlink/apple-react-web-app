import { Html } from '@react-three/drei'
import React from 'react'

const Loader = () => {
    return (
        <Html
            className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div 
            className="w-[10vm] h-[10vm] rounded-full">
                Loading...
            </div>
        </Html>
    )
}

export default Loader