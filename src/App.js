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

      function filterSongs(criteria){
        let results;

        try{ 
            results = songs.filter(function(song){
                if(song.title.toLowerCase() === criteria.toLowerCase()){
                    console.log("match found");
                    return true
                }
            });
        }
        catch(err){
            console.log(err);
            results = songs;
        }
        finally{
          if(results.length === 0){
            console.log("Could not find");
            results = songs
          }
        }
        return setSongs(results)
    }



  return (
    <div>
      <SearchBar getResults={filterSongs}/>
      <br></br>
      <DisplayMusic list={songs} />
      {/* trying to use an array that is the result of the search */}
    </div>
  );
}

export default App;
