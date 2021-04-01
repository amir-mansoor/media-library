import {useEffect} from "react"
import Message from "../components/Message.js"
import { useDispatch, useSelector } from 'react-redux'
import {addToCart, removeCartItem} from "../actions/cartActions.js"
import { Row, Col, ListGroup, Image, Button, Container } from 'react-bootstrap'
import {Link} from "react-router-dom"

const CartScreen = ({match}) => {
	const productId = match.params.id

	const cart = useSelector((state) => state.cart)

	const {cartItems} = cart


	const dispatch = useDispatch()

	useEffect(() => {
		if(productId) {
			dispatch(addToCart(productId))
		}
	}, [dispatch, productId])

	const removeFromCart = (id) => {
		// dispatch(removeCartItem(id))
	}

	return (
		<Row>
			<Col md={8}>
			<Container>
				<h1>Your Basket</h1>
			</Container>

			{cartItems.length === 0 ? (
				<Message style={{width: "80%", margin: "20px auto"}}>
					{' '}
					Your Basket Is Empty! <Link to="/">Go Back</Link>
				</Message>

			): (<>
				<ListGroup variant="flush">
					{cartItems.map((item) => (
						<ListGroup.Item key={item.product}>
							<Row>
								<Col md={2}>
									<Image src={item.image} alt={item.name} fluid rounded />
								</Col>
								<Col md={4}>
									<Link to={`/bookdetails/${item.product}`}>{item.name} </Link>
								</Col>
								<Col md={2}> ${item.price} </Col>
								<Col md={3}>
									<Button onClick={removeFromCart(item.product)} type="button" variant="danger">Remove Item</Button>
								</Col>
							</Row>
						</ListGroup.Item>
					))}
				</ListGroup>
			</>)}
			</Col>
		</Row>
	)
}

export default CartScreen