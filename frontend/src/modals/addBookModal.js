import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Modal, Form, Container, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addBook } from '../actions/bookActions'

const AddBookModal = ({ showAddModal, setShowAddModal }) => {
	let history = useHistory()
	const [name, setName] = useState('')
	const [author, setAuthor] = useState('')
	const [publication_year, setPublication_year] = useState(0)
	const [halt_year, sethalt_year] = useState(0)
	const [stock, setStock] = useState(0)

	const handleCloseAddModal = () => setShowAddModal(false)

	const dispatch = useDispatch()
	const bookAdd = useSelector((state) => state.bookAdd)
	const { loading, error, success } = bookAdd

	useEffect(() => {
		if (success) {
			window.location.reload()
		}
	}, [dispatch, success])

	const submitHandler = () => {
		dispatch(
			addBook({
				name: name,
				author: author,
				publication_year: publication_year,
				halt_year: halt_year,
				stock: stock,
			})
		)
		handleCloseAddModal()
		if (!loading) {
			console.log({ error })
		}
	}

	return (
		<Modal show={showAddModal} onHide={handleCloseAddModal}>
			<Modal.Header closeButton>
				<Modal.Title>Add Book</Modal.Title>
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
				<Button variant='secondary' onClick={handleCloseAddModal}>
					Close
				</Button>
				<Button variant='primary' onClick={submitHandler}>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default AddBookModal
