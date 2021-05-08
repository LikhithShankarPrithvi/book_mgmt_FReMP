import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
	bookListReducer,
	bookAddReducer,
	bookEditReducer,
	bookDeleteReducer,
} from './reducers/bookReducer'

const reducer = combineReducers({
	bookList: bookListReducer,
	bookAdd: bookAddReducer,
	bookEdit: bookEditReducer,
	bookDelete: bookDeleteReducer,
})

const initialState = {}
const middleware = [thunk]

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store
