import { useState } from "react";

const SearchBar = (props) => {

    let songsFound = props.list;
    
    const [search, setSearch] = useState([])

    function filterSongs(criteria){
        let results;

        try{ 
            results = songsFound.filter(function(song){
                if(song.title.toLowerCase() === criteria.toLowerCase()){
                    // console.log("in try");
                    return true
                }
                return results
            });
        }
        catch(err){
            // console.log(err);
            results = props.list;
            return results
        }
        return(
            console.log(results)
        )
    }

    function handleSubmit(event){
        // event.preventDefault();
        filterSongs(search)
    }

    return(
        <form onSubmit={handleSubmit()}>
            <div>

                <label>Search</label>
                <input value={search} onChange={(event) => setSearch(event.target.value)}></input>
                {/* <button onClick={() => filterSongs()}>SEARCH</button>
         */}
            </div>
        </form>
    )
}

export default SearchBar;