import axios from "axios"

export const addToCart = (id) => (dispatch, getState) => {
	const {data} = axios.get(`/api/books/${id}`)
	dispatch({
		type: "CART_ADD_ITEM",
		payload: {
			product: data._id,
			name: data.name,
			image: data.image,
			price: data.price
		}
	})

	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
} 