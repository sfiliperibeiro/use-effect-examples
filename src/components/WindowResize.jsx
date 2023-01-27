import { useEffect, useState } from "react";

const WindowResize = () =>{

    const getSize = () => {
        return {
            width: window.innerWidth,
            heigth: window.innerHeight,
        }
    }

    const [size, setSize] = useState(getSize());

    useEffect(() =>{
        const handleResize = () =>{
            setSize(getSize());
        }

            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        
    }, [])

    const {width, heigth} = size

    return(
        <p>Width: {width} Heigth: {heigth}</p>
    )

};

export default WindowResize;