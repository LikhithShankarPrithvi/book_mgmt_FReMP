import React, { useState } from 'react'
import { Container, Card, Button, Modal, Form, Row, Col } from 'react-bootstrap'

const Book = ({ book }) => {
	const [show, setShow] = useState(false)
	const [deleteShow, setDeleteShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleDelClose = () => setDeleteShow(false)
	const handleShow = () => setShow(true)
	const handleDeleteShow = () => setDeleteShow(true)
	return (
		<>
			<Card className='text-center'>
				<Card.Header>
					<Row>
						<Col>
							<Button onClick={handleShow}>
								<i class='fas fa-edit'></i>
							</Button>
						</Col>
						<Col>
							<Button onClick={handleDeleteShow}>
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
			<Modal show={show} onHide={handleClose}>
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
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button variant='primary' onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>

			{/* // Modal for Deleting records */}

			<Modal show={deleteShow} onHide={handleDelClose}>
				<Modal.Header closeButton>
					<Modal.Title>Delete Book Record</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Are You Sure you want to delete {book.name} entire
					Collection Records?
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleDelClose}>
						NO
					</Button>
					<Button variant='primary' onClick={handleDelClose}>
						YES
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default Book
