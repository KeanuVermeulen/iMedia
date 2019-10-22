// Task 19: Capstone Project - Compulsory Task 1 - LandingPage.test.js

// This is a unit test; testing the url of my app. 

let expect = require('chai').expect;
let request = require('request');

describe('Status', function(){
	describe('Landing Page', function() {
		it('status', function(done){
			request('http://localhost:3000/', function(error, response, body){
				expect(response.statusCode).to.equal(200);
				done();
			});
		});
	});
});