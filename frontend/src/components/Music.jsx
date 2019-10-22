// Task 19: Capstone Project - Compulsory Task 1 - Frontend - Components - Music.jsx

// --- Imports ---

import React from 'react';
import favIcon from './images/favIcon.png';

// --- Functions ---


class Music extends React.Component{
    constructor(){
        super()
        this.state ={
            data: [],
            musicInput: ''
        }
    }

    // This fetches iTunes data

    newSearch(){
        fetch('/music')
            .then(res => res.json())
            .then(data => this.setState({data}, () => console.log('info fetched...', data)))
    }

    // This refines the fetched iTune data based on user input in the search bar

    musicSearch = async () => {
        let search = this.state.musicInput.split(' ').join('+')
        const getMusic = await fetch(`/music?search=${search}&type=${this.state.type}`)
        let res = await getMusic.json()
        this.setState({
            data: res
        })
    }

    // This adds an iTune to the 'Favourites' list once the 'add to favourite' icon is clicked

    favoriteMusic= (i) => {
        let fav = {
            id: i.trackId,
            artist: i.artistName,
            artwork: i.artworkUrl100,
            track: i.trackName,
            sample: i.previewUrl
        }
        fetch('/favoritesMusic', {
            method: 'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(fav)
        })
        alert('Added to favorites')
    }

    // --- Rendered in App: ---

    render(){
        return (
            <div>

                {/* -- Heading and Search Bar -- */}

                <h2 className="subHeading">iTunes</h2>
                <div className="search">
                <input className="searchBar" placeholder="Search iTunes" type="text" onChange={(e) => this.setState({musicInput: e.target.value})}/>
                <button className="searchBtn" onClick={() => this.musicSearch()}>Search</button>
                </div>

                    <br/><br/>

                    {/* -- iTune -- */}
                    {/* -- This renders all the iTune search results -- */}
    
                    <div>
                        {this.state.data.map(sort_data => <article className="iTune" key={sort_data.trackId}>
                            <div className="trackRow">
                                <div className="trackCol">
                                    <img className="trackArt" src={sort_data.artworkUrl100} alt={sort_data.trackId}/>
                                </div>
                                <div className="trackCol">
                                    <h3>{sort_data.trackName}</h3>
                                    <h4>{sort_data.artistName}</h4>
                                    <audio controls><source src={sort_data.previewUrl}type='audio/mpeg'></source></audio>
                                    <img className="favIcon" src={favIcon} alt="favIcon" onClick={() =>this.favoriteMusic(sort_data)}/>
                                </div>
                            </div>
                        </article>)}
                    </div>
            </div>
        )
    }
}

export default Music