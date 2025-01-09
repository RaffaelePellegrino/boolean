import React, { useState, useEffect } from "react";
import axios from "axios";
import PostTab from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: "", // TITOLO
    url: "", // URL
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/photos")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => {
        console.error("Errore nel caricamento del post", err);
      });
  }, []);

  // Funzione per inviare un nuovo post
  const handleSubmit = (e) => {
    e.preventDefault(); // Preveniamo il comportamento di invio di default

    axios
      .post("http://localhost:5000/api/photos", newPost) // Invio dei dati al backend
      .then((response) => {
        setPosts([...posts, response.data]);
        setNewPost({ title: "", url: "" }); 
      })
      .catch((error) => {
        console.error("Errore nell'aggiungere il post", error);
      });
  };

  const handleChange = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Estate 2024</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Titolo:
          <input
            type="text"
            name="title"
            value={newPost.title}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          URL immagine:
          <input
            type="text"
            name="url"
            value={newPost.url}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Aggiungi Post</button>
      </form>

      <PostTab posts={posts} />
    </div>
  );
}

export default App;
