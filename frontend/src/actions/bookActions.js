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
	BOOK_DELETE_REQUEST,
	BOOK_DELETE_SUCCESS,
	BOOK_DELETE_ERROR,
	BOOK_DELETE_RESET,
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

export const editBook = (book) => async (dispatch) => {
	try {
		dispatch({ type: BOOK_EDIT_REQUEST })
		const { data } = await axios.put(`/editBook/${book._id}`, book)
		dispatch({
			type: BOOK_EDIT_SUCCESS,
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: BOOK_EDIT_ERROR,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}

export const deleteBook = (id) => async (dispatch) => {
	try {
		dispatch({ type: BOOK_DELETE_REQUEST })
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}
		const { data } = await axios.delete(`/book/${id}`, config)
		dispatch({
			type: BOOK_DELETE_SUCCESS,
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: BOOK_DELETE_ERROR,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}
