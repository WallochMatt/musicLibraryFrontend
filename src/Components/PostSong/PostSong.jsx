import { useState } from "react";
import "./PostSong.css"


const PostSong = (props) => {

    const [newTitle, setTitle] =useState('')
    const [newArtist, setArtist] =useState('')
    const [newAlbum, setAlbum] =useState('')
    const [newGenre, setGenre] =useState('')
    const [newRelease, setRelease] =useState('')

    
    function submit(event) {
        event.preventDefault();
        let newSong = {
            title: `${newTitle}`,
            artist: `${newArtist}`,
            album: `${newAlbum}`,
            genre: `${newGenre}`,
            release_date: `${newRelease}`,
            likes: 1,
        };
        // console.log(newSong)
        props.addNewSong(newSong)
    }




    return(
        <form>
            <span>
                <label className="spacer">Add Title:</label>
                <input value={newTitle} onChange={(event) => setTitle(event.target.value)}></input>
                <label className="spacer">Add Artist:</label>
                <input value={newArtist} onChange={(event) => setArtist(event.target.value)}></input>
                <label className="spacer">Add Album:</label>
                <input value={newAlbum} onChange={(event) => setAlbum(event.target.value)}></input>
                <label className="spacer">Add Genre:</label>
                <input value={newGenre} onChange={(event) => setGenre(event.target.value)}></input>
                <label className="spacer">Add Release Date:</label>
                <input type="date" value={newRelease} onChange={(event) => setRelease(event.target.value)}></input>
                <button className="spacer" onClick={submit}>Add Song</button>
            </span>
        </form>
    )
}

export default PostSong;