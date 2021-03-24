import {Container, Col, Image, Button} from "react-bootstrap"

import { useDispatch, useSelector } from 'react-redux'
import {bookDetail} from "../actions/bookActions.js"
import Loader from "../components/Loader.js"
import Message from "../components/Message.js"
import {useEffect} from "react"
const ProductDetail = ({match, history}) => {
	const dispatch = useDispatch()

	// Add to cart handler
	const addToCartHandler = () => {
		history.push(`/cart/${match.params.id}`)
	}
	const productDet = useSelector(state => state.bookDetail)

	const {productDetail, loading, error} = productDet

	useEffect(() => {
		dispatch(bookDetail(match.params.id))
	}, [dispatch, match])
	return (
		<>
		{ loading ? (
			<Loader/>
		)
		: error ? (
			<Message variant="danger">{error}</Message>
		) : (
			<>

		<Container className="mt-4">
			<Col md={5}>
				<Image width={400} height={400} src={productDetail.image} alt={productDetail.name} />
			</Col>
			<div className="right_side border p-2">
			<Col>
				<strong>Product Name:</strong>
				<p>{productDetail.name}</p>
			</Col>
			<hr/>
			<Col>
				<strong>Product Description:</strong>
				<p>{productDetail.description}</p>
			</Col>
			<hr/>
			<Col>
				<strong>Class:</strong>
				<p>{productDetail.class}th</p>
			</Col>
			<hr/>
			<Col>
				<strong>Product Price:</strong>
				<p>$ {productDetail.price}</p>
			</Col>
			<hr/>
			<Col>
				<Button onClick={addToCartHandler} className="btn-block btn-dark">Add To Cart</Button>
			</Col>
			</div>
		</Container>
			</>
		)
		}
		</>
	)
}

export default ProductDetail;