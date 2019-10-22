## Task 19: Capstone Project - Compulsory Task 1 

## How to use iMedia

iMedia is a full stack web application made with React and Express that interfaces with the iTunes Search API. The application should allow a user to search for Music and iBooks within the iTunes Store and Apple Books Store. A user should be able to create a list of ‘favourites’.

## How to install and run iMedia

in your command prompt:

1. cd backend 
2. npm install
3. npm start
4. open a new command prompt
5. cd frontend
6. npm install
7. npm start

## How to test iMedia

in your command prompt: 

1. cd backend/frontend
2. npm test 

## Measures taken to ensure the security of iMedia

# Helmet 

I installed Helmet as a measure of security for this application. Helmet helps secure the Express App by setting various HTTP headers. It’s not a silver bullet, but it can help!

# API Key

I followed the following steps to make my API Key invisible on GitHub:

1. Add a file called ‘.env’ on your root folder with key/pairs entries.
E.g.: API_KEY=<yourKey>

2. Now you access the key stored in ‘.env’ from anywhere in your React code by using
the process.env variable.
E.g.: console.log(process.env.API_KEY) will print your API key to the
console.

3. Add .env to your .gitignore file so that the .env file that stores your API key isn’t
pushed to GitHub.

## Link to deployed App

https://imedia-001.herokuapp.com/




