import {
	BOOK_LIST_ERROR,
	BOOK_LIST_REQUEST,
	BOOK_LIST_SUCCESS,
	BOOK_ADD_ERROR,
	BOOK_ADD_REQUEST,
	BOOK_ADD_SUCCESS,
	BOOK_EDIT_REQUEST,
	BOOK_EDIT_SUCCESS,
	BOOK_EDIT_ERROR,
	BOOK_EDIT_RESET,
	BOOK_DELETE_REQUEST,
	BOOK_DELETE_SUCCESS,
	BOOK_DELETE_ERROR,
	BOOK_DELETE_RESET,
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

export const bookEditReducer = (state = { books: [] }, action) => {
	switch (action.type) {
		case BOOK_EDIT_REQUEST:
			return { ...state, loading: true }
		case BOOK_EDIT_SUCCESS:
			return { loading: false, success: true }
		case BOOK_EDIT_ERROR:
			return { loading: false, error: action.payload }
		case BOOK_EDIT_RESET:
			return { book: {} }
		default:
			return state
	}
}

export const bookDeleteReducer = (state = { books: [] }, action) => {
	switch (action.type) {
		case BOOK_DELETE_REQUEST:
			return { ...state, loading: true }
		case BOOK_DELETE_SUCCESS:
			return { loading: false, success: true }
		case BOOK_DELETE_ERROR:
			return { loading: false, error: action.payload }
		case BOOK_DELETE_RESET:
			return {}
		default:
			return state
	}
}
