
const SearchBar = (props) => {
    let currentSongs
    let songsFound;
    songsFound = props.list

    function filterSongs(){
        

        try{ 
            let search = prompt("Search database");

            songsFound.filter(function(song){
                if(song.title.toLoweCase() === search.toLocaleLowerCase){
                    return true
                }
                return songsFound
            });
        }

        catch{
            songsFound = props.list;
        }

        return (
            currentSongs = songsFound
        )
    
    }

    return(
    <div>
        <button onClick={() => filterSongs()}>SEARCH</button>
        
    </div>
    )

}

export default SearchBar;