// command npm test

const chai = require('chai')
let {expect, assert} = require('chai')
let jsonpath = require('jsonpath')
let chaiHttp = require('chai-http')

chai.use(chaiHttp)

const app = require('../day_5/day_5.2.1_helloExpress')

let appURL = "http://localhost:5001"


describe('App', function () {

    // test case 1
    it(`GET /api/users Test 1`, async function () {
        let res = await chai.request(appURL)
        .get('/api/users')
        expect(res).to.have.status(200)
    })

    // test case 2
    it(`GET /api/users Test 2`, async function () {
        let res = await chai.request(appURL+"/api/users")
        .get('/api/users')
        expect(res).to.have.status(404)
    })

})