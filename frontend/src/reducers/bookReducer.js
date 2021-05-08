import {
	BOOK_LIST_ERROR,
	BOOK_LIST_REQUEST,
	BOOK_LIST_SUCCESS,
	BOOK_ADD_ERROR,
	BOOK_ADD_REQUEST,
	BOOK_ADD_SUCCESS,
} from '../constants/bookConstants'
export const bookListReducer = (state = { books: [] }, action) => {
	switch (action.type) {
		case BOOK_LIST_REQUEST:
			return { ...state, loading: true }
		case BOOK_LIST_SUCCESS:
			return { loading: false, books: action.payload }
		case BOOK_LIST_ERROR:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const bookAddReducer = (state = { books: [] }, action) => {
	switch (action.type) {
		case BOOK_ADD_REQUEST:
			return { ...state, loading: true }
		case BOOK_ADD_SUCCESS:
			return { loading: false, success: true }
		case BOOK_ADD_ERROR:
			return { loading: false, error: action.payload }

		default:
			return state
	}
}
