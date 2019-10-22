// Task 19: Capstone Project - Compulsory Task 1 - Frontend - Components - Books.jsx

// --- Imports ---

import React from 'react';
import favIcon from './images/favIcon.png';
import parse from 'html-react-parser';

// --- Functions ---


class Books extends React.Component{
    constructor(){
        super()
        this.state ={
            data: [],
            bookInput: ''
        }
    }

    // This fetches iBook data

    newSearch(){
        fetch('/books')
            .then(res => res.json())
            .then(data => this.setState({data}, () => console.log('info fetched...', data)))
    }

    // This refines the fetched iBook data based on user input in the search bar

    bookSearch = async () => {
        let search = this.state.bookInput.split(' ').join('+')
        const getBook = await fetch(`/book?search=${search}&type=${this.state.type}`)
        let res = await getBook.json()
        this.setState({
            data: res
        })
    }

    // This adds an iBooks to the  'Favourites' list once the 'add to favourite' icon is clicked

    favoriteBook= (i) => {
        let fav = {
            id: i.trackId,
            artist: i.artistName,
            artwork: i.artworkUrl100,
            track: i.trackName,
            description: i.description
        }
        fetch('/favoritesBooks', {
            method: 'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(fav)
        })
        alert('Added to favorites');
    }

    // --- Rendered in App: ---

    render(){
        return (
            <div>

                {/* -- Heading and Search Bar -- */}

                <h2 className="subHeading">iBooks</h2>
                <div className="search">
                <input className="searchBar" placeholder="Search iBooks" type="text" onChange={(e) => this.setState({bookInput: e.target.value})}/>
                <button className="searchBtn" onClick={() => this.bookSearch()}>Search</button>
                </div>

                    <br/><br/>

                {/* -- iBook -- */}
                {/* -- This renders all the iBook search results -- */}

                <div>
                    {this.state.data.map(sort_data => <article className="iBook" key={sort_data.trackId}> 
                        <div className="bookRow">
                            <div className="bookCol">
                                <img className="bookArt" src={sort_data.artworkUrl100} alt={sort_data.trackId}/>
                            </div>
                            <div className="bookCol">
                                <h3>{sort_data.trackName}</h3>
                                <h4>{sort_data.artistName}</h4>
                                {parse(`<p>${sort_data.description}</p>`)}
                                <img className="favIcon" src={favIcon} alt="favIcon" onClick={() =>this.favoriteBook(sort_data)}/>
                            </div>
                        </div>
                    </article>)}
                </div>
            </div>
        )
    }
}

export default Books