import React from 'react';
import { animate } from "framer-motion"


const AnimatingCounter = ({ from, to }) => {
    const ref = React.useRef();

    React.useEffect(() => {
        const controls = animate(from, to, {
            duration: 1.5,
            onUpdate(value) {
                ref.current.textContent = value.toFixed(1);
            }
        });
        return () => controls.stop();
    }, [from, to]);

    return <p ref={ref} />;
}


export default AnimatingCounter;
