import {
	BOOK_LIST_ERROR,
	BOOK_LIST_REQUEST,
	BOOK_LIST_SUCCESS,
	BOOK_ADD_ERROR,
	BOOK_ADD_REQUEST,
	BOOK_ADD_SUCCESS,
} from '../constants/bookConstants'
import axios from 'axios'

export const listBooks = () => async (dispatch) => {
	try {
		dispatch({ type: BOOK_LIST_REQUEST })
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}
		const { data } = await axios.get('/booksList', config)
		dispatch({
			type: BOOK_LIST_SUCCESS,
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: BOOK_LIST_ERROR,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}

export const addBook = (book) => async (dispatch) => {
	try {
		dispatch({ type: BOOK_ADD_REQUEST })
		const { data } = await axios.post('/addBook', book)
		dispatch({
			type: BOOK_ADD_SUCCESS,
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: BOOK_ADD_ERROR,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}
