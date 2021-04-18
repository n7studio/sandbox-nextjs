import { useEffect, useRef } from 'react';
import { usePosition } from '../lib/hooks/usePosition';
import { useUserMedia } from '../lib/hooks/useUserMedia';

const CAPTURE_OPTIONS: MediaStreamConstraints = {
    audio: false,
    video: { facingMode: 'environment' },
};

export const UserMediaFragment: React.FunctionComponent = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const mediaStream = useUserMedia(CAPTURE_OPTIONS);

    if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
        videoRef.current.srcObject = mediaStream;
    }

    const handleCanPlay = () => {
        if (videoRef && videoRef.current) {
            videoRef.current.play();
        }
       
    }

    return (
        <>
            <video ref={videoRef} onCanPlay={handleCanPlay} autoPlay playsInline muted />
        </>
    );
};

export default UserMediaFragment;
