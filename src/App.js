import React, { useState, useEffect } from 'react';
import axios from 'axios';

import DisplayMusic from './Components/DisplayMusic/DisplayMusic';

function App() {

  const [songs, setSongs] = useState([]);
  // const [song, setSong] = useState([]);

  // useEffect(()=> {
  //   getAllSongs();
  // }, [])


  // async function getAllSongs(){
  //   let response = await axios.get('http://127.0.0.1:8000/api/music/');
  //   setSongs(response.data);
  //   console.log(songs)
  // }

  // async function getOneSong(){
  //   let input = prompt("Enter ID")
  //   let response = await axios.get(`http://127.0.0.1:8000/api/music/${input}/`);
  //   setSong(response.data);
  //   console.log(song)
  // }


  return (
    <div>
      <DisplayMusic list={songs} setList = {setSongs} />
      {/* Now i should be able to change the prop to make any filtered table.. */}
      
      {/* <button onClick={() => getAllSongs()}>Get All Songs</button> */}

      {/* <button onClick={() => getOneSong()}>Get One Song</button> */}
    </div>
  );
}

export default App;
