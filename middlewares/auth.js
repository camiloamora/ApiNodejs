'use strict'

const services = require('../services')

function isAuth(req, res, next){
	if(!req.headers.authorization){
		return res.status(403).send({ message: 'No tienes autoirzación'})
	}

	const token = req.headers.authorization.split(" ")[1]
	req.user = payload.sub
	next()  
}

module.exports = isAuth