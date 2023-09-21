// command npm test

const chai = require('chai')
let {expect, assert} = require('chai')

const app = require('../day_8/day_8.1_add')

describe('Addition', function () {
    // test case 1
    it(`Sum of 2 and 3`, function () {
        let res = app.add(2,3)
        expect(res).to.equal(5)
    })

})