import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar/SearchBar'
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';

function App() {

  const [songs, setSongs] = useState([]);

  let currentSongs = songs

  return (
    <div>
      <SearchBar list={songs}/>
      <br></br>
      <DisplayMusic list={currentSongs} setList = {setSongs} />
      {/* Now i should be able to change the prop to make any filtered table.. */}
    </div>
  );
}

export default App;
