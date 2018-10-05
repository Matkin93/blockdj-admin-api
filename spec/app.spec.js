const app = require('../app');
const mongoose = require('mongoose');
const { expect } = require('chai');
const request = require('supertest')(app);

describe('BlockDJ Admin API', () => {
    describe('wibble', () => {
        it('GET homepage', () => {
            return request
                .get('/api/cities')
                .expect(200)
                .then(res => {
                    console.log(res.body);
                })
        })
    });
}); 