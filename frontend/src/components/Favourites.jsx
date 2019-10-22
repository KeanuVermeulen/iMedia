// Task 19: Capstone Project - Compulsory Task 1 - Frontend - Components - Favourites.jsx

// --- Imports ---

import React from 'react';
import removeIcon from './images/removeIcon.png';
import parse from 'html-react-parser';

// --- Functions ---

class Favourites extends React.Component {
    constructor(){
        super()
        this.state = {
            favMusic: [],
            favBooks: []
        }
    }

    componentDidMount(){
        fetch('/favoritesMusic')
            .then(res => res.json())
            .then(music => this.setState({favMusic: music}, () => console.log('fetched...', music)))

            fetch('/favoritesBooks')
            .then(res => res.json())
            .then(books => this.setState({favBooks: books}, () => console.log('fetched...', books)))
    }

    // This deletes an iTune from the Favourites list once the remove button is clicked

    removeMusic = (i) => {
        let removeTrack = {
            deleted: i.id
        }
        fetch('/favoritesMusic', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(removeTrack)
        })
        document.location.reload()
    }

     // This deletes an iBook from the Favourites list once the remove button is clicked

    removeBooks = (i) => {
        let removeBook = {
            deleted: i.id
        }
        fetch('/favoritesBooks', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(removeBook)
        })
        document.location.reload()
    }

    // --- Rendered in App: ---

    render(){
        return(
            <div>
                     {/* -- Favourite iTunes -- */}

                    <div>
                    <h2 className="favHeading">Favourite iTunes</h2>
                    <br/>
                        <table className="favourites">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Artist</th>
                                <th>Title</th>
                                <th>Sample</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.favMusic.map(favM =>
                            <tr key={favM.trackId}>
                                <td><img src={favM.artwork} alt='artwork'/></td>
                                <td><p>{favM.artist}</p></td>
                                <td><p>{favM.trackId}</p><p>{favM.track}</p></td>
                                <td><audio controls><source src={favM.sample}/></audio></td>
                                <td><img id="removeIcon" src={removeIcon} alt="removeIcon" onClick={() => {this.removeMusic(favM)}}/></td>
                            </tr>
                            )}
                        </tbody>
                        </table>
                    </div>

                    <br/>

                    {/* -- Favourite iBooks -- */}
                    
                    <div>
                        <h2 className="favHeading">Favourite iBooks</h2>
                        <br/>
                        <table className="favourites">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Author</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.favBooks.map(favB =>
                            <tr key={favB.artwork}>
                                <td><img src={favB.artwork} alt='artwork'/></td>
                                <td><p>{favB.artist}</p></td>
                                <td><p>{favB.track}</p></td>
                                <td>{parse(`<p>${favB.description}</p>`)}</td>
                                <td> <img id="removeIcon" src={removeIcon} alt="removeIcon" onClick={() => {this.removeBooks(favB)}}/></td>
                            </tr>
                            )}
                        </tbody>
                        </table>
                    </div>
                    <br/>
            </div>
        )
    }
}

export default Favourites