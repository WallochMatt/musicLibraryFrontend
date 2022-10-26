import { useState } from "react";
import "./SearchBar.css"

const SearchBar = (props) => {

    const [search, setSearch] = useState([])


    function handleSubmit(event){
        event.preventDefault();
        props.getResults(search)
    }

    return(
        <form  onSubmit={(e) => handleSubmit(e)}>
            <div className="pad">

                <label>Search</label>
                <input value={search} onChange={(event) => setSearch(event.target.value)}></input>
            </div>
        </form>
    )
}

export default SearchBar;