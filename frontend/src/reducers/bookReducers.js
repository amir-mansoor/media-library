export const bookListReducer = (state = {products: []}, action) => {
	switch(action.type) {
		case "PRODUCT_LIST_REQUEST":
			return {loading: true, products: []}
		case "PRODUCT_LIST_SUCCESS":
			return {loading: false, products: action.payload}
		case "PRODUCT_LIST_FAIL":
			return {loading: false, error: action.payload}
		default:
			return state
	}
} 

export const bookDetailReducer = (state = {productDetail: []}, action) => {
	switch(action.type) {
		case "PRODUCT_DETAIL_REQUEST":
			return {loading: true, ...state}
		case "PRODUCT_DETAIL_SUCCESS":
			return {loading: false, productDetail: action.payload}
		case "PRODUCT_DETAIL_FAiL":
			return {loading: false, error: action.payload}
		default:
			return state
	}
}

 
