import { useState } from "react";



const PostSong = (props) => {

    const [newTitle, setTitle] =useState('')
    const [newArtist, setArtist] =useState('')
    const [newAlbum, setAlbum] =useState('')
    const [newGenre, setGenre] =useState('')
    const [newRelease, setRelease] =useState('')

    
    function submit(event) {
        event.preventDefault();
        let newSong = {
            title: newTitle,
            artist: newArtist,
            album: newAlbum,
            genre: newGenre,
            release_date: newRelease
        };
        console.log(newSong)
        props.addNewSong(newSong)
    }







    return(
        <form>
            <span>
                <label>Add Title</label>
                <input value={newTitle} onChange={(event) => setTitle(event.target.value)}></input>
                <label>Add Artist</label>
                <input value={newArtist} onChange={(event) => setArtist(event.target.value)}></input>
                <label>Add Album</label>
                <input value={newAlbum} onChange={(event) => setAlbum(event.target.value)}></input>
                <label>Add Genre</label>
                <input value={newGenre} onChange={(event) => setGenre(event.target.value)}></input>
                <label>Add Release Date</label>
                <input value={newRelease} onChange={(event) => setRelease(event.target.value)}></input>
                <button onClick={submit}>Add Song</button>
            </span>
        </form>
    )
}

export default PostSong;