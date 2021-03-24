const mongoose = require("mongoose")

const connection = () => mongoose.connect("mongodb://127.0.0.1:27017/ecommerce", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
}).then(() => {
	console.log("mongo db is connected successfully")
}).catch((err) => {
	console.log(err)
})

module.exports = connection