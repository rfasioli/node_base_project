import express from "express"
const consign = require('consign')

const app = express()

consign()
    .include('config/middlewares')
    .then('app/routes')
	// .then('config/dbConnection.js')
	// .then('app/models')
	// .then('app/controllers')
	.into(app)

export default app
