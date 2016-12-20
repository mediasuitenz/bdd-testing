'use strict'

var English = require('yadda').localisation.English;
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../app');
let expect = chai.expect;

chai.use(chaiHttp);
let response = null

module.exports = English.library()
  .given('I make a request to $url', function(url, next) {
    chai.request(server)
      .get(url)
      .end((err, res) => {
        expect(err).to.not.exist
        response = res
        next();
      });
  })
  .when('I receive a (success|failure) response', function(responseType, next) {
    expect(response).to.exist
    expect(response).to.not.be.empty
    if (responseType === 'success') {
      expect(response.status).to.equal(200)
    } else {
      expect(response.status).to.be.above(399)
    }
    next();
  })
  .then('there should be $num $elementType in the response', function(number, elementType, next) {
    expect(response.body[elementType]).to.have.length.of(1)
    next();
  });