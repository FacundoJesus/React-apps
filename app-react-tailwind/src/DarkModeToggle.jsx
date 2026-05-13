import {useState, useEffect} from 'react';

function DarkModeToggle() {

    const [isDarkMode, setIsDarkMode] = useState(
        () => {
            return localStorage.getItem('theme') === 'dark';
        }
    );

    useEffect(() => {
        if(isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme','dark');
        }
        else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme','light');
        }
        
        
    },[isDarkMode])

    
    return (
        <button className="dark:bg-gray-900 dark:text-white p-2 bg-gray-200 text-gray-800 rounded cursor-pointer"
        onClick={() => setIsDarkMode(!isDarkMode)}>
            Dark Mode
        </button>
    )


}

export default DarkModeToggle;