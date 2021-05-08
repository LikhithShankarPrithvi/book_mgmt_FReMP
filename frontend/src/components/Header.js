import React from 'react'
import { Container, Navbar, Nav, Form, FormControl } from 'react-bootstrap'

const Header = () => {
	return (
		<header className='bg-primary variant-dark  text-dark'>
			<Navbar>
				<Container>
					<Navbar.Brand>BookShop</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Form inline>
						<FormControl
							type='text'
							placeholder='Search'
							className='ml-sm-2'
						/>
					</Form>
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<Nav.Link href='#home'>Edit</Nav.Link>
							<Nav.Link href='#cart'>Cart</Nav.Link>
							<Nav.Link href='#link'>Log in</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
