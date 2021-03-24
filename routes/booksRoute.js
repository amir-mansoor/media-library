const express = require("express")
const {getBooks, getBooksById} = require("../controllers/bookController.js")
const router = express.Router()

router.route("/").get(getBooks)
router.route("/:id").get(getBooksById)

module.exports = router