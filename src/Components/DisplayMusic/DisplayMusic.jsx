

const DisplayMusic = (props) => {


        function hitClick(event, song){
            event.preventDefault();
            props.removeSong(song)
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
                    <th>Likes</th>
                </tr>
            </thead>
            <tbody>
                {props.list.map((song, index) => {
                    return(
                        <tr key={index}>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.genre}</td>
                            <td>{song.release_date}</td>
                            <td>{song.likes}</td>
                            <td>
                                <button onClick={(event) => hitClick(event, song)}>Delete</button>
                            </td>
                        </tr>
                            )
                    })
                }
            </tbody>
        </table>
    )
}

export default DisplayMusic;