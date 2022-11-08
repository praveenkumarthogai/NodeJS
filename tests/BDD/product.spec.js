const { assert } = require('@hapi/joi');
const chai = require('chai');
const expect = require('chai').expect;
const httpClient = require('chai-http');
const startUp = require('../../startup');
chai.use(httpClient);


describe('product', () => {
    beforeEach(() => {
    })

    describe('get endpoints', () => {
        it('health check', async () => {
            let result = await chai.request(startUp).get('/').send();
            expect(result.body.message).to.equal("POC application Health Check is successfull");
        })

        it('get auth token',async()=>{
            let token =await chai.request(startUp).get('/api/login').send();
            expect(token.body).to.not.be.null;
        })



    })



})