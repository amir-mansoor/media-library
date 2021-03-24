const musicDetail = (state = {musicProduct: []}, action) => {
	switch(action.type) {
		case "MUSIC_DETAIL_REQUEST":
			return {musicloading: true, musicProduct: []}
		case "MUSIC_DETAIL_SUCCESS":
			return {musicloading: false, musicProduct: action.payload}
		case "MUSIC_DETAIL_FAIL":
			return {loading: false, musicerror: action.payload}
		default:
			return state
	}
}
export default musicDetail