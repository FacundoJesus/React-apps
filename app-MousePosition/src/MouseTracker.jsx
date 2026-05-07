
import { useEffect,useState } from "react";

function MouseTracker() {
    
    const [mousePosition, setMousePosition] = useState( {
        x: 0,
        y: 0
    });

    useEffect(() => {
        const handleMouseMove = (event) => {
        setMousePosition({x: event.clientX, y: event.clientY})
        };
        
        window.addEventListener('mousemove',handleMouseMove);
        console.log("Mouse move listener added");
        
        // Limpieza
        return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        console.log("Mouse move listener removed");
        };

    },[]);

    return (
        <div>
            <h1>Mouse Position</h1>
            <h3>X: {mousePosition.x} - Y: {mousePosition.y}</h3>
        </div>
    )

}

export default MouseTracker;


  