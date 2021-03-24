import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {bookListReducer, bookDetailReducer} from "./reducers/bookReducers.js"
import musicListReducer from "./reducers/musicReducers.js"
import musicDetail from "./reducers/musicDetail.js"

const reducers = combineReducers({
	bookList: bookListReducer,
	musicList: musicListReducer,
	bookDetail: bookDetailReducer,
	musicDetail
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