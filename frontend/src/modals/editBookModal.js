import { Modal, Form, Container, Button } from 'react-bootstrap'

const EditBookModal = ({ book, showEditBookModal, setShowEditBookModal }) => {
	const handleCloseEditModal = () => setShowEditBookModal(false)
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
							value={book.name}></Form.Control>
					</Form.Group>
					<Form.Group controlId='author'>
						<Form.Label>Author</Form.Label>
						<Form.Control
							type='author'
							placeholder='Enter Author name'
							value={book.author}></Form.Control>
					</Form.Group>
					<Form.Group controlId='publication_year'>
						<Form.Label>Publication Year</Form.Label>
						<Form.Control
							type='publication_year'
							placeholder='Enter Year'
							value={book.publication_year}></Form.Control>
					</Form.Group>
					<Form.Group controlId='halt_year'>
						<Form.Label>Publication End Year</Form.Label>
						<Form.Control
							type='halt_year'
							placeholder='Enter end Year'
							value={book.halt_year}></Form.Control>
					</Form.Group>
					<Form.Group controlId='stock'>
						<Form.Label>stock</Form.Label>
						<Form.Control
							type='stock'
							placeholder='Enter Stock Count'
							value={book.stock}></Form.Control>
					</Form.Group>
				</Form>
			</Container>
			<Modal.Footer>
				<Button variant='secondary' onClick={handleCloseEditModal}>
					Close
				</Button>
				<Button variant='primary' onClick={handleCloseEditModal}>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default EditBookModal
