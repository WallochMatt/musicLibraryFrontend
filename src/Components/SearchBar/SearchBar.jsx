import { useState } from "react";

const SearchBar = (props) => {

    const [search, setSearch] = useState([])


    function handleSubmit(event){
        event.preventDefault();
        props.getResults(search)
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)}>
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