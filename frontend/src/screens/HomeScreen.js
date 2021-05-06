import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import books from '../books'
import Book from '../components/Book'

const HomeScreen = () => {
	return (
		<Container>
			<Row>
				{books.map((book) => (
					<Col className='p-2'>
						<Book book={book} />
					</Col>
				))}
			</Row>
		</Container>
	)
}

export default HomeScreen
