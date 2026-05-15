import { useNavigate } from "react-router-dom";


function Dashboard() {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/")
    }

    return (

    <div className="flex flex-col items-center justify-center min-h-screen">

        <h2 className="text-3xl font-bold text-blue-600">
            Welcome!
        </h2>

        <button 
        className="text-white mt-4 text-lg bg-gray-500 p-4 rounded-lg
         hover:text-blue-400 transition duration-300"
         onClick ={handleLogout}>
            Logout        
        </button>
        
    </div>

    )
}

export default Dashboard;