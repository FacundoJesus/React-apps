import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    axios.get('https://jsonplaceholder.typicode.com/posts')
      
       .then((response) => {
        console.log(response);
        setData(response.data);
        setLoading(false);
        })

      .catch((error) => {
        console.log(`Error: ${error}`);
        setError('Failed to fetch data');
        setLoading(false);
      });

  }, []);


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (

    <div>
      <h1>Api Rest</h1>

      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <p><strong>{post.title}</strong></p>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default App;