import { Modal, Form, Container, Button } from 'react-bootstrap'

const DeleteBookModal = ({
	book,
	showDeleteBookModal,
	setShowDeleteBookModal,
}) => {
	const handleCloseDeleteBookModal = () => setShowDeleteBookModal(false)

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
				<Button variant='primary' onClick={handleCloseDeleteBookModal}>
					YES
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default DeleteBookModal
