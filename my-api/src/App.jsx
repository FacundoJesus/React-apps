import './App.css'
import { useState } from 'react';
import api from './api/api.js'


function App() {

  const [data, setData] = useState([]);

  const handleSubmit = (event) => {

    event.preventDefault();

    const newPost = {
      title: 'Posteo de facebook',
      body: 'Aguante Patronato =)',
      userId: 1
    }

    api.post('https://jsonplaceholder.typicode.com/posts', newPost)
      .then(response => {
        console.log('New Post Added: ', response.data);
        setData([response.data,...data]);

      })

  }


 return (
  <div>

    <h1>API's in React</h1>
    <form onSubmit={handleSubmit}>
      <button>Add Post</button>
    </form>

  </div>
 )
}

export default App;