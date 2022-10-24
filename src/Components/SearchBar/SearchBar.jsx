
const SearchBar = (props) => {

    let songsFound = props.list;
    let results;

    function filterSongs(){
        console.log("in function");
        

        try{ 
            let search = prompt("Search database");
            
            results = songsFound.filter(function(song){
                if(song.title.toLowerCase() === search.toLowerCase()){
                    console.log("in try");
                    return true
                }
                return results
            });
        }

        catch(err){
            console.log(err);
            results = props.list;
        }

        return (
            console.log(results)

        )
    
    }

    return(
    <div>
        <button onClick={() => filterSongs()}>SEARCH</button>
        
    </div>
    )

}

export default SearchBar;