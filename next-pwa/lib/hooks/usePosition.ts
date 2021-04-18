import { useEffect, useState } from 'react';

interface IUsePositionSettings {
    enableHighAccuracy: boolean;
    timeout: number;
    maximumAge: number;
}

interface IPosition {
    latitude: number;
    longitude: number;
    accuracy: number;
    speed: number | null;
    timestamp: number;
}

const defaultSettings: IUsePositionSettings = {
    enableHighAccuracy: false,
    timeout: Infinity,
    maximumAge: 0,
};

export const usePosition = (watch: boolean = false, settings: IUsePositionSettings = defaultSettings) => {
    const [position, setPosition] = useState<IPosition>(<IPosition>{});
    const [error, setError] = useState<string | null>(null);

    const onChange = ({ coords, timestamp }: { coords: GeolocationCoordinates; timestamp: number }) => {
        setPosition({
            latitude: coords.latitude,
            longitude: coords.longitude,
            accuracy: coords.accuracy,
            speed: coords.speed,
            timestamp,
        });
    };

    const onError = (error: GeolocationPositionError) => {
        setError(error.message);
    };

    useEffect(() => {
        const geo = navigator.geolocation;

        let watcher: number | null = null;
        if (watch) {
            watcher = navigator.geolocation.watchPosition(onChange, onError, settings);
        } else {
            navigator.geolocation.getCurrentPosition(onChange, onError, settings);
        }

        return () => {
            if (watcher !== null) {
                geo.clearWatch(watcher);
                watcher = null;
            }
        };
    }, [settings.enableHighAccuracy, settings.timeout, settings.maximumAge]);

    return { ...position, error };
};
