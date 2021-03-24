import axios from "axios"

export const listMusics = () => async (dispatch) => {
	try {
		dispatch({type: "Music_LIST_REQUEST"})

		const {data} = await axios.get('/api/musics')

		dispatch({type: 'MUSIC_LIST_SUCCESS', payload: data})
	} catch (error) {
		dispatch({
			type: "MUSIC_LIST_FAIL",
			payload: error.response && error.response.data.message ? error.response.data.message : error.message
		})
	}
}

export const MusicDetail = (id) => async (dispatch) => {
	try {
		dispatch({type: "MUSIC_DETAIL_REQUEST"})

		const {data} = await axios.get(`/api/musics/${id}`)

		dispatch({type: 'MUSIC_DETAIL_SUCCESS', payload: data})
	} catch (error) {
		dispatch({
			type: "MUSIC_DETAIL_FAIL",
			payload: error.response && error.response.data.message ? error.response.data.message : error.message
		})
	}
}