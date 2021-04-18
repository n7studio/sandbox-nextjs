import { useEffect, useState } from 'react';


export const useUserMedia = (requestedMedia: MediaStreamConstraints) => {
    const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);

    useEffect(() => {
        const enableStream = async () => {
            try {
                const media = navigator.mediaDevices;
                const stream = await media.getUserMedia(requestedMedia);
                setMediaStream(stream);
            } catch (err) {
                console.log(err);
            }
        };

        if (!mediaStream) {
            enableStream();
        } else {
            return () => {
                mediaStream.getTracks().forEach((track) => track.stop());
            };
        }
    }, [requestedMedia, mediaStream]);

    return mediaStream;
};
