import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [dataPosts, setDataPost] = useState([]);
  const [dataUsers, setDatauser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    axios.all([
      axios.get('https://jsonplaceholder.typicode.com/posts'),
      axios.get('https://jsonplaceholder.typicode.com/users')
    ])
       .then(axios.spread((posts,users) => {
        console.log(posts);
        console.log(users);
        setDataPost(posts.data);
        setDatauser(users.data);
        setLoading(false);
        }))

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
      <h1>Api Rest - POSTS</h1>
      <ul>
        {dataPosts.map((post) => (
          <li key={post.id}>
            <p><strong>{post.title}</strong></p>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <h1>Api Rest - USERS</h1>
      <ul>
        {dataUsers.map((user) => (
          <li key={user.id}>
            <p><strong>{user.name}</strong></p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default App;