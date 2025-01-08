import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [tracking, setTracking] = useState(0);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/photos");
        setPhotos(response.data);
      } catch (error) {
        console.error("Error fetching photos", error);
      }
    };
    fetchPhotos();
  }, []);

  const openImage = (index) => {
    setSelectedPhoto(photos[index]);
    setTracking(index);
  };

  const showNextImage = () => {
    setTracking((prevTracking) => (prevTracking + 1) % photos.length);
  };

  const showPreviousImage = () => {
    setTracking((prevTracking) => (prevTracking - 1 + photos.length) % photos.length);
  };

  return (
    <div>
      <h1>Photo Gallery</h1>
      <div>
        {photos.map((photo, index) => (
          <div key={photo.id} onClick={() => openImage(index)}>
            <img src={photo.url} alt={photo.title} />
            <figcaption>{photo.title.charAt(0).toUpperCase() + photo.title.slice(1)}</figcaption>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div onClick={() => setSelectedPhoto(null)}>
          <div>
            <div onClick={(e) => { e.stopPropagation(); showPreviousImage(); }}>
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <img src={selectedPhoto.url} alt={selectedPhoto.title} />
            <div onClick={(e) => { e.stopPropagation(); showNextImage(); }}>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
