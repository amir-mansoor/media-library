const Books = require("../model/BookModel.js")

const getBooks = async (req, res) => {
	const books = await Books.find({})
	res.json(books)
}

const getBooksById = async (req, res) => {
	const book = await Books.findById(req.params.id)
	if(book) {
		res.json(book)		
	} else {
		res.status(404)
		res.json({error: "Book is not found"})
	}
	
}

module.exports = {getBooks, getBooksById}