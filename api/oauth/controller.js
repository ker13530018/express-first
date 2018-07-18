
const index = (req, res) => {
	return res.json({
		status: true,
		middleware:req.middleware,
		request_at : req.requestTime,
		data:  {}
	})
}


const store = (req, res) => {
	return res.json({
		status: true,
		middleware:req.middleware,
		request_at : req.requestTime,
		data:  req.body
	})
}


const update = (req, res) => {
	let data = req.body
	data.id = req.params.id

	return res.json({
		status: true,
		middleware:req.middleware,
		request_at : req.requestTime,
		data: data
	})
}


module.exports = {
	index,
	store,
	update,
}