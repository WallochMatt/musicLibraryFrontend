import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar/SearchBar'
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';

function App() {

  const [songs, setSongs] = useState([]);
  
  useEffect(()=> {
    getAllSongs();
    }, [])


    async function getAllSongs(){
        let response = await axios.get('http://127.0.0.1:8000/api/music/');
        setSongs(response.data);
        }


  return (
    <div>
      <SearchBar list={songs}/>
      <br></br>
      <DisplayMusic list={songs} />
      {/* Now i should be able to change the prop to make any filtered table.. */}
    </div>
  );
}

export default App;
