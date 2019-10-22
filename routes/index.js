// Task 19: Capstone Project - Compulsory Task 1 - Back-end - index.js

// This serves as a Back-End Server for my Full Stack Web Application.

// --- Imports ---

const express = require('express');
const router = express.Router();
const fs = require('fs');
const bodyParser = require('body-parser');

const fetch = require('node-fetch');
var favMusic = require('./favoritesMusic.json');
var favBooks = require('./favoritesBooks.json');
const app = express();
app.use(bodyParser.json());
app.use(express.json());

//Helmet will set various HTTP headers to help protect this app

const helmet = require('helmet');
app.use(helmet());

// --- Functions ---

// -- iTunes --

// This fetches iTune data from the Api 

router.get('/music', (req, res) => {
    fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(req.query.search)}&limit=10&entity=song`)
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            res.send(JSON.stringify(data.results))
        })
    console.log(res)
})

// This allows a user to make a Post request that adds an iTune to the 'Favourites' list.

router.post('/favoritesMusic', (req, res) => {
    favMusic.push(req.body)
    fs.writeFile('favoritesMusic.json', JSON.stringify(favMusic), (err) => {
        if (err) {
            console.log("Not working", err)
        } else {
            console.log("Working")
        }
    })
})

// This allows a user to make a Get request that returns the iTunes added to the 'Favourites' list.

router.get('/favoritesMusic', (req, res) => {
    fs.readFile('./favoritesBooks.json', (err, data) => {
        if (err) {
            console.log('Cant read')
        } else {
            res.send(favMusic)
        }
    })
})

// This allows a user to make a Delete request that removes an iTune from the 'Favourites' list.

router.delete('/favoritesMusic', (req, res) => {
    favMusic = favMusic.filter((i) => {
        return i.id != req.body.deleted
    })
    fs.writeFile('favoritesMusic.json', JSON.stringify(favMusic), (err) => {
        if (err) {
            console.log("Not working", err)
        } else {
            console.log("Working")
        }
    })
})

// -- iBooks --

// This fetches iBook data from the Api

router.get('/book', (req, res) => {
    fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(req.query.search)}&limit=10&entity=ebook`)
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            res.send(JSON.stringify(data.results))
        })
})

// This allows a user to make a Post request that adds an iBook to the 'Favourites' list.

router.post('/favoritesBooks', (req, res) => {

    favBooks.push(req.body)
    fs.writeFile('favoritesBooks.json', JSON.stringify(favBooks), (err) => {
        if (err) {
            console.log("Not working", err)
        } else {
            console.log("Working")
        }
    })
})

// This allows a user to make a Get request that returns the iBook added to the 'Favourites' list.

router.get('/favoritesBooks', (req, res) => {
    fs.readFile('./favoritesBooks.json', (err, data) => {
        if (err) {
            console.log('Cant read')
        } else {
            res.send(favBooks)
        }
    })
})

// This allows a user to make a Get request that returns the iBook added to the 'Favourites' list.

router.delete('/favoritesBooks', (req, res) => {
    favBooks = favBooks.filter((i) => {
        return i.id != req.body.deleted
    })
    fs.writeFile('favoritesBooks.json', JSON.stringify(favBooks), (err) => {
        if (err) {
            console.log("Not working", err)
        } else {
            console.log("Working")
        }
    })
})

// --- Export ---

module.exports = router;