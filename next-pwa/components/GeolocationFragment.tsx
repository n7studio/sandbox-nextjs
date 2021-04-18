import { usePosition } from "../lib/hooks/usePosition";

export const GeolocationFragment: React.FunctionComponent = () => {
    const { latitude, longitude, timestamp, accuracy, speed, error } = usePosition();

    const loader =
        !latitude && !error ? (
            <>
                <div>Trying to fetch location...</div>
                <br />
            </>
        ) : null;

    return (
        <>
            {loader}

            <code>
                latitude: {latitude}
                <br />
                longitude: {longitude}
                <br />
                timestamp: {timestamp}
                <br />
                accuracy: {accuracy && `${accuracy}m`}
                <br />
                speed: {speed}
                <br />
                error: {error}
            </code>
        </>
    );
};

export default GeolocationFragment;
