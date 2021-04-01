import axios from "axios"

export const addToCart = (id) => async (dispatch, getState) => {
	const {data} = await axios.get(`/api/books/${id}`)
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

export const removeCartItem = (id) => async (dispatch, getState) => {
	dispatch({
		type: "REMOVE_ITEM",
		payload: id,
	})

	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
