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