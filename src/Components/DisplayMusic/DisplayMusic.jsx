import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayMusic = (props) => {

    useEffect(()=> {
    getAllSongs();
    }, [])


    async function getAllSongs(){
        let response = await axios.get('http://127.0.0.1:8000/api/music/');
        props.setList(response.data);
        }
    
    
        return(
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                </tr>
            </thead>
            <tbody>
                {props.list.map((song) => {
                    return(
                        <tr>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.genre}</td>
                            <td>{song.release_date}</td>
                        </tr>
                            )
                    })
                }
            </tbody>
        </table>
    )
}

export default DisplayMusic;