
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
            <div className='coordinates'>
                <h3>X: {mousePosition.x}</h3>
                <h3>Y: {mousePosition.y}</h3>
            </div>
            
        </div>
    )

}

export default MouseTracker;


  