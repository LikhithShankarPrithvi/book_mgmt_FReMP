import React, { useState } from 'react'
import { Container, Card, Button, Modal, Form, Row, Col } from 'react-bootstrap'
import DeleteBookModal from '../modals/deleteBookModal'
import EditBookModal from '../modals/editBookModal'

const Book = ({ book }) => {
	const [showEditBookModal, setShowEditBookModal] = useState(false)
	const handleShowEditModal = () => setShowEditBookModal(true)

	const [showDeleteBookModal, setShowDeleteBookModal] = useState(false)

	const handleShowDeleteModal = () => setShowDeleteBookModal(true)
	return (
		<>
			<Card className='my-3 p-3'>
				<Card.Header>
					<Row>
						<Col>
							<Button onClick={handleShowEditModal}>
								<i class='fas fa-edit'></i>
							</Button>
						</Col>
						<Col>
							<Button onClick={handleShowDeleteModal}>
								<i class='fas fa-trash-alt'></i>
							</Button>
						</Col>
					</Row>
				</Card.Header>
				<Card.Body>
					<Card.Title className='py-3'>
						<strong>{book.name}</strong>
					</Card.Title>
					<Card.Text>
						<strong>Author</strong> : {book.author}
					</Card.Text>
					<Card.Text>
						<strong>Published From</strong> :{' '}
						{book.publication_year}
						<strong> to </strong>
						{book.halt_year}
					</Card.Text>
				</Card.Body>
				<Card.Footer display='none'>
					<Button variant='primary' disabled={book.stock === 0}>
						Take Home
					</Button>
				</Card.Footer>
			</Card>
			{/* Modal for editing records */}
			<EditBookModal
				book={book}
				showEditBookModal={showEditBookModal}
				setShowEditBookModal={setShowEditBookModal}
			/>

			{/* // Modal for Deleting records */}

			<DeleteBookModal
				book={book}
				showDeleteBookModal={showDeleteBookModal}
				setShowDeleteBookModal={setShowDeleteBookModal}
			/>
		</>
	)
}

export default Book
