const express = require("express")
const router = express.Router()
const {getMusics, getMusicById} = require("../controllers/musicController.js")

router.route("/").get(getMusics)
router.route("/:id").get(getMusicById)

module.exports = router