import React, {useState,useEffect} from "react";
import axios from "axios";
import PostTab from "./components/PostList";

function App(){
  const [posts, setPosts] = useState([]);

  useEffect(() =>{
    axios.get('http://localhost:5000/api/photos').then((response)=>{
      setPosts(response.data);
    })
    .catch((err) => {
      console.error("Errore nel caricamento del post", err)
    })
  }, [] ); // serve il [] per restituire una sola volta tutta la lista

  return (
    <div>
      <h1>Estate 2024</h1>
      <PostTab posts={posts} />
    </div>
  )
}

export default App;