const mongoose = require("mongoose")
const schema = mongoose.Schema

const BooksSchema = new schema({
	name: {
		type: String,
		required: true
	},
	class: {
		type: Number,
		max: 20,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true,
		max: 1000
	},
	image: {
		type: String,
		required: true
	}
})

const Books = mongoose.model('Books', BooksSchema)

module.exports = Books