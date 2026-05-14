import { Outlet, Link } from "react-router-dom";

function About() {

    return (

    <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-3xl font-bold text-blue-600">
            About Page
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

        <div className="mt-8 w-full max-w-4xl">
            <Outlet />
        </div>
        
    </div>

    )
}

export default About;