import { useSelector } from "react-redux";


const Display = () => {

    const count = useSelector((state => state.counter.count))


    return (

        <div>
            <h1>Current Count from Display: {count}</h1>
        </div>

    );

}

export default Display;