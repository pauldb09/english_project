import React, { useEffect, useRef } from "react";

export const Video = ({ pause }: any) => {
    const videoRef = useRef();
    if (videoRef && pause) {
        videoRef && videoRef.current && (videoRef.current as any).pause();
    }
    useEffect(() => {
        videoRef && videoRef.current && (videoRef.current as any).play();
    }, []);

    return (
        <video
            ref={videoRef}
            loop
            muted
            className="isolate bg-black"
            style={{
                position: "fixed",
                right: "0",
                bottom: "0",
                minHeight: "100%",
                minWidth: "100%",
            }}
        >
            <source src="/images/video_background.mp4" type="video/mp4"></source>
        </video>
    );
};
