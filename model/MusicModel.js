const mongoose = require("mongoose")
const schema = mongoose.Schema

const BooksSchema = new schema({
	name: {
		type: String,
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
	},
	singer_name: {
		type: String,
		required: true
	}
})

const Music = mongoose.model('Music', BooksSchema)

module.exports = Music