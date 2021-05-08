import { useEffect, useState } from 'react'
import { Modal, Form, Container, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editBook } from '../actions/bookActions'
import { BOOK_EDIT_RESET } from '../constants/bookConstants'

const EditBookModal = ({ book, showEditBookModal, setShowEditBookModal }) => {
	const handleCloseEditModal = () => setShowEditBookModal(false)

	const [name, setName] = useState(book.name)
	const [author, setAuthor] = useState(book.author)
	const [publication_year, setPublication_year] = useState(
		book.publication_year
	)
	const [halt_year, sethalt_year] = useState(book.halt_year)
	const [stock, setStock] = useState(book.stock)

	const dispatch = useDispatch()
	const bookEdit = useSelector((state) => state.bookEdit)
	const { loading, error, success } = bookEdit

	useEffect(() => {
		if (success) {
			dispatch({ type: BOOK_EDIT_RESET })

			window.location.reload()
		}
	}, [dispatch, success])

	const submitHandler = () => {
		dispatch(
			editBook({
				_id: book._id,
				name: name,
				author: author,
				publication_year: publication_year,
				halt_year: halt_year,
				stock: stock,
			})
		)
		handleCloseEditModal()
		if (!loading) {
			console.log({ error })
		}
	}

	return (
		<Modal show={showEditBookModal} onHide={handleCloseEditModal}>
			<Modal.Header closeButton>
				<Modal.Title>Edit Book</Modal.Title>
			</Modal.Header>
			<Container>
				<Form>
					<Form.Group controlId='name'>
						<Form.Label>Name</Form.Label>
						<Form.Control
							type='name'
							placeholder='Enter name'
							value={name}
							onChange={(e) =>
								setName(e.target.value)
							}></Form.Control>
					</Form.Group>
					<Form.Group controlId='author'>
						<Form.Label>Author</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter Author name'
							value={author}
							onChange={(e) =>
								setAuthor(e.target.value)
							}></Form.Control>
					</Form.Group>
					<Form.Group controlId='publication_year'>
						<Form.Label>Publication Year</Form.Label>
						<Form.Control
							type='number'
							placeholder='Enter Year'
							value={publication_year}
							onChange={(e) =>
								setPublication_year(e.target.value)
							}></Form.Control>
					</Form.Group>
					<Form.Group controlId='halt_year'>
						<Form.Label>Publication End Year</Form.Label>
						<Form.Control
							type='number'
							placeholder='Enter end Year'
							value={halt_year}
							onChange={(e) =>
								sethalt_year(e.target.value)
							}></Form.Control>
					</Form.Group>
					<Form.Group controlId='stock'>
						<Form.Label>stock</Form.Label>
						<Form.Control
							type='number'
							placeholder='Enter Stock Count'
							value={stock}
							onChange={(e) =>
								setStock(e.target.value)
							}></Form.Control>
					</Form.Group>
				</Form>
			</Container>
			<Modal.Footer>
				<Button variant='secondary' onClick={handleCloseEditModal}>
					Close
				</Button>
				<Button variant='primary' onClick={submitHandler}>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default EditBookModal
