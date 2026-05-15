import { Outlet, Link, useSearchParams } from "react-router-dom";

function About() {

    const [searchParams, setSearchParams] = useSearchParams();
    const topic = searchParams.get("topic") || "general";

    const urlParams = new URLSearchParams(window.location.search);
    const topicFrom = urlParams.get("topic");

    console.log("useSearchParam: ", topic);
    console.log("useSearchParam: ", topicFrom);

    const handleTopic = (newTopic) => {
        setSearchParams({topic:newTopic});
    }

    return (

        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-3xl font-bold text-blue-600">
                About Us
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
                This page provides information about us. Learn more about our mission, values, etc.
            </p>

            <nav>
                <ul className="mt-6">
                    <li><Link to="team" className="text-blue-500 hover:underline">Our Team</Link></li>
                    <li><Link to="/" className="text-blue-500 hover:underline">Back to Home</Link></li>
                </ul>
            </nav>

            <div className="mt-6">
                <h1 className="text-xl text-gray-800">Choose a topic:</h1>
                <div className="flex space-x-4 mt-4">
                    <button 
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    onClick={() => handleTopic("Team")}>
                        Team
                    </button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    onClick={() => handleTopic("Mission")}>
                        Mission
                    </button>                
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    onClick={() => handleTopic("Vision")}>
                        Vision
                    </button>
                </div>
            </div>

            <div className="text-gray-700 mt-4 text-lg">
                <p>The topic selected is: {topic}</p>
            </div>


            <div className="mt-8 w-full max-w-4xl">
                <Outlet />
            </div>
            
        </div>

    )
}

export default About;