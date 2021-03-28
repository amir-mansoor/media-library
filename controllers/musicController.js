const Music = require("../model/MusicModel.js")

const getMusics = async (req, res) => {
	const musics = await Music.find({})
	res.json(musics)
}

const getMusicById = async (req, res) => {
	const music = await Music.findById(req.params.id)
	if(music) {
		res.json(music)		
	} else {
		res.status(404)
		throw new Error("Music is not found")
	}
	
}

module.exports = {getMusics, getMusicById}
