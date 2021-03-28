import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {bookListReducer, bookDetailReducer} from "./reducers/bookReducers.js"
import cartReducer from "./reducers/cartReducers.js"

const reducers = combineReducers({
	bookList: bookListReducer,
	bookDetail: bookDetailReducer,
	cart: cartReducer
})

const initialState = {

}

const middleware = [thunk]

const store = createStore(
 	reducers,
 	initialState,
 	composeWithDevTools(applyMiddleware(...middleware))
)

export default store