import React from "react";
import "./PutModal.css"
import { useState } from 'react';


const PutModal = (props) => {
    const [putTitle, setPutTitle] =useState('')
    const [putArtist, setPutArtist] =useState('')
    const [putAlbum, setPutAlbum] =useState('')
    const [putGenre, setPutGenre] =useState('')
    const [putRelease, setPutRelease] =useState('')



    function enter(event) {
        event.preventDefault();
        let putSong = {
            id: `${props.tempToModal.id}`,
            title: `${putTitle}`,
            artist: `${putArtist}`,
            album: `${putAlbum}`,
            genre: `${putGenre}`,
            release_date: `${putRelease}`,
            likes: `${props.tempToModal.likes}`
        };
        props.enterChange(putSong)
    }



    function toggleModal(){
        props.changeState(false);
    }



        return (
            <div className="modal">
                <div className="modal-content">
                    <div className="close">
                        <button onClick={toggleModal}> X </button>
                    </div>
                    <div>
                        <h2>Update a Song(cannot alter the amount of likes)</h2>
                    </div>
                    <div>
                        <label >Change Title:</label>
                        <input value={putTitle} onChange={(event) => setPutTitle(event.target.value)}></input>
                        <label >Change Artist:</label>
                        <input value={putArtist} onChange={(event) => setPutArtist(event.target.value)}></input>
                        <label >Change Album:</label>
                        <input value={putAlbum} onChange={(event) => setPutAlbum(event.target.value)}></input>
                        <label >Change Genre:</label>
                        <input value={putGenre} onChange={(event) => setPutGenre(event.target.value)}></input>
                        <label >Change Release Date:</label>
                        <input type="date" value={putRelease} onChange={(event) => setPutRelease(event.target.value)}></input>
                    </div>
                    <div>
                        <button onClick={toggleModal}>Cancel</button>
                        <button onClick={enter}>Enter</button>
                    </div>
                </div>
            </div>
        )

}



export default PutModal;