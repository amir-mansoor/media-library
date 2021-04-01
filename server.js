// import modules
const express = require("express")
const app = express()
const dotenv = require("dotenv")
const booksRoute = require("./routes/booksRoute.js")
const connection = require("./config/db.js")
const {notFound} = require("./middleware/errorMiddleware.js")

dotenv.config()
connection()

app.use(express.json())
// Home route
app.get("/", (req, res) => {
	// if we dont't set the status code here. the server understand because the browser already know that the default status code is 200
	// res.status(200)
	res.send("Your Api is running😂️")
})


app.use('/api/books', booksRoute)
app.use(notFound)


// APP PORT 
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`Your App is running on PORT ${PORT} and ${process.env.MODE} mode`)
})
