import './App.css'
import { useState } from 'react';
import axios from 'axios';

axios.interceptors.request.use(request => {
  console.log('Starting Request',request);
  return request;
})

axios.interceptors.response.use(response => {
  console.log("Response ", response);
  return response;
})

function App() {

  const [data, setData] = useState([]);

  const handleSubmit = (event) => {

    event.preventDefault();

    const newPost = {
      title: 'Posteo de facebook',
      body: 'Aguante Patronato =)',
      userId: 1
    }

    axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
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