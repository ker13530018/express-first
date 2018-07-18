const express = require('express')
const router = express.Router()
const { index, store , update } = require('./controller')
const { validateIndex, validateStore , validateUpdate } = require('./middleware')

// High level middleware
router.use((req, res, next) => {
	// TODO : validate token

	// 
	req.requestTime = Date.now()

	next()
})


router.get('/', validateIndex, index)
router.post('/', validateStore, store)
router.put('/:id', validateUpdate, update)

module.exports = router
