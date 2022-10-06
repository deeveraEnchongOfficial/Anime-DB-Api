import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";



const App = () => {

  const [endPoint, setEndPoint] = useState('')
  const [container, setContainer] = useState([])


  useEffect(() => {
    fetchMe()
  },[endPoint])

  const fetchMe = () => {

  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '12c795e279msh29d4f743dcc07e4p1f75fbjsnb5ac1f6edd91',
      'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
  };
  
  fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=+${endPoint}`, options)
    .then(response => {
      return response.json();
    })
    .then(data => {
      setContainer(data.data)
    })
    .catch(err => console.error(err));
  }


    const onChangeHandler = (e) => {
      setEndPoint(e.target.value)
    }

    const onSubmitHandler = (e) => {
      e.preventDefault()
    }



  return (
    <div className="app">
      <h1>Anime DB api</h1>

      <div className="search">
        <input
          value={endPoint}
          onChange={onChangeHandler}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={onSubmitHandler}
        />
      </div>

      {container?.length > 0 ? (
        <div className="container">
          {container.map((item, key) => (
            // <img src={container.image} alt="logo"/>
            <MovieCard  key={key} anime={item} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;