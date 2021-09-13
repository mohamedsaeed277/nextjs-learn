import { useEffect, useState } from "react";

export default function Social(){
    const [subscribes, setsubscribes] = useState(6000);
    useEffect(() => {
        const interval = setInterval(() => {
            setsubscribes(subs => subs + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <h1>Subscribes: {subscribes}</h1>
    );
}