import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listBooks } from '../actions/bookActions'
import Book from '../components/Book'
import AddBookModal from '../modals/addBookModal'

const HomeScreen = () => {
	const [showAddModal, setShowAddModal] = useState(false)

	const handleShowAddModal = () => setShowAddModal(true)

	const dispatch = useDispatch()

	const bookList = useSelector((state) => state.bookList)
	const { loading, error, books } = bookList
	useEffect(() => {
		dispatch(listBooks())
	}, [dispatch])

	return (
		<>
			{loading ? (
				<h2>Loading...</h2>
			) : error ? (
				<h3>{error}</h3>
			) : (
				<Container>
					<Button onClick={handleShowAddModal}>
						<i class='fa fa-plus' aria-hidden='true'></i>
					</Button>
					<AddBookModal
						showAddModal={showAddModal}
						setShowAddModal={setShowAddModal}
					/>
					<Row>
						{books.map((book) => (
							<Col
								key={book._id}
								sm={12}
								md={6}
								lg={4}
								xl={3}
								className='p-2'>
								<Book book={book} />
							</Col>
						))}
					</Row>
				</Container>
			)}
		</>
	)
}

export default HomeScreen
