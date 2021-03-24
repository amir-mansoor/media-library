const musicListReducer = (state = {musicProducts: []}, action) => {
	switch(action.type) {
		case "MUSIC_LIST_REQUEST":
			return {musicloading: true, musicProducts: []}
		case "MUSIC_LIST_SUCCESS":
			return {musicloading: false, musicProducts: action.payload}
		case "MUSIC_LIST_FAIL":
			return {loading: false, musicerror: action.payload}
		default:
			return state
	}
}

 

export default musicListReducer