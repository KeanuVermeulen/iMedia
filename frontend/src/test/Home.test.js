// Task 19: Capstone Project - Compulsory Task 1 - Home.test.js

// This is a snapshot test for the 'Home.jsx' component of my app.

import React from 'react'; 
import renderer from 'react-test-renderer'; 
import Home from '../components/Home';

test('renders correctly', () => {
const tree = renderer
.create(<Home/>)
.toJSON();
expect(tree).toMatchSnapshot();
});