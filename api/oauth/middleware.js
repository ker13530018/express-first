
const validateIndex = (req, res , next) => {
	req.middleware = "validateIndex"
	next()
}

const validateStore = (req, res , next) => {

	req.middleware = "validateStore"
	
	if(Object.keys(req.body).length < 1){
		console.log( 'validateStore', Object.keys(req.body).length)
		return res.status(400).json({
			status:false,
			middleware:req.middleware
		});
	}

	next()
}


const validateUpdate = (req, res , next) => {
	if(!req.params.id){
		return res.status(400)
	}

	req.middleware = "validateUpdate"
	next()
}


module.exports = {
	validateIndex,
	validateStore,
	validateUpdate
}