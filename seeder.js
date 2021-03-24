const mongoose = require("mongoose")
const connection = require("./config/db.js")
const Books = require("./model/BookModel.js")
const books = require("../media_library/frontend/src/books.js")
const Music = require("./model/MusicModel.js")
const music = require("../media_library/frontend/src/music.js")
connection()

const importData = async () => {
	try {
		await Books.deleteMany()
		await Books.insertMany(books)
		await Music.deleteMany()
		await Music.insertMany(music)
		console.log("Data is imported Successfully")
		process.exit()
	} catch (error) {
		console.log(`this is the import data error ${error}`)
		process.exit(1)
	}
}

const destroyData = async () => {
	try {
		await Books.deleteMany()
		await Music.deleteMany()
		console.log("data is destroy successfuly")
		process.exit()
	} catch (error) {
		console.log(`this is the destroy error ${error}`)
		process.exit(1)
	}
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}