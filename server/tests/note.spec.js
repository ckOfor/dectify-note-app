import request from 'supertest';
import chai from 'chai';
import app from '../../app';
import db from '../models';

const superRequest = request.agent(app);
const expect = chai.expect;

let testUser;

describe('User API', () => {
	try {
		before((done) => {
			db.User.create({
				email: 'c@r.com',
				password: 'c@r.com'
			})
		})
	} catch (error) {
		console.log(error)
	}
	
	try {
		after((done) => {
			db.User.destroy({ where: { email: 'c@r.com' }})
		})
	} catch (error) {
		console.log(error)
	}
	
	describe('Create User POST /api/user/create', () => {
		it('it should create a new user with the complete data', (done) => {
			superRequest.post('/api/1/notes')
			.set({ 'content-type': 'application/json' })
			.send({
				category: 'Maths',
				catent: 'Bla bla'
			})
			.end((err, res) => {
				expect(res.status).to.equal(200);
				expect(res.body.email).to.equal('dec@tify.com');
				expect(res.body.password).to.equal('cccccc');
				done();
			});
		});
	})
	
})
