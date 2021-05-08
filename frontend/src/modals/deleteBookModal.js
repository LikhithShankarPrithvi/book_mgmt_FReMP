import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Modal, Form, Container, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { BOOK_DELETE_RESET } from '../constants/bookConstants'
import { deleteBook } from '../actions/bookActions'

const DeleteBookModal = ({
	book,
	showDeleteBookModal,
	setShowDeleteBookModal,
}) => {
	const handleCloseDeleteBookModal = () => setShowDeleteBookModal(false)
	const dispatch = useDispatch()
	const bookDelete = useSelector((state) => state.bookDelete)
	const { loading, error, success } = bookDelete

	useEffect(() => {
		if (success) {
			dispatch({ type: BOOK_DELETE_RESET })
			window.location.reload()
		}
		handleCloseDeleteBookModal()
	}, [dispatch, success])

	const submitHandler = () => {
		console.log(book._id)
		dispatch(deleteBook(book._id))
	}

	return (
		<Modal show={showDeleteBookModal} onHide={handleCloseDeleteBookModal}>
			<Modal.Header closeButton>
				<Modal.Title>Delete Book Record</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				Are You Sure you want to delete {book.name} entire Collection
				Records?
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant='secondary'
					onClick={handleCloseDeleteBookModal}>
					NO
				</Button>
				<Button variant='primary' onClick={submitHandler}>
					YES
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default DeleteBookModal
