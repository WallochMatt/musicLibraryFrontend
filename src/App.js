import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar/SearchBar'
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import PostSong from './Components/PostSong/PostSong';

function App() {

  const [songs, setSongs] = useState([]);
  
  useEffect(()=> {
    getAllSongs();
    }, [])



  async function getAllSongs(){
      let response = await axios.get('http://127.0.0.1:8000/api/music/');
      setSongs(response.data);
      }



  function filterSongs(criteria){
    let results;

    try{ 
      results = songs.filter(function(song){
            if(song.title.toLowerCase() === criteria.toLowerCase() || song.artist.toLowerCase() === criteria.toLowerCase() || 
            song.album.toLowerCase() === criteria.toLowerCase() || song.genre.toLowerCase() === criteria.toLowerCase() ||
            song.release_date.toLowerCase() === criteria.toLowerCase()){
              
              console.log("match found");
                return true
            }
          }
      );
    }
    catch(err){
        console.log(err);
        results = songs;
    }
    finally{
      if(results.length === 0){
        console.log("Could not find");
        results = songs
        getAllSongs() //keep for all songs on no match or remove so no matches do not reset list
      }
    }
    return setSongs(results)
}




    async function addSong(song){
      try{
        console.log("in addSong func, song is:", song)
        let response = await axios.post('http://127.0.0.1:8000/api/music/', song);
        if(response.status === 201){
          await getAllSongs();
        }
      }
      catch(err){
        console.log(err)
      }
    }





    
  return (
    <div>
      <PostSong addNewSong={addSong}/>
      <br></br>
      <SearchBar getResults={filterSongs}/>
      <br></br>
      <DisplayMusic list={songs} />
    </div>
  );
}

export default App;
