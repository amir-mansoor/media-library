import {Container, Col, Image, Button} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux"
import Loader from "../components/Loader.js"
import Message from "../components/Message.js"
import {useEffect} from "react"
import {MusicDetail} from "../actions/musicActions.js"

const MusicDetails = ({match, history}) => {
	const dispatch = useDispatch()
	const productDet = useSelector(state => state.musicDetail)

	const addToCartHandler = () => {
		history.push(`/cart/${match.params.id}`)
	}
	const {musicloading, musicProduct, musicerror} = productDet
	useEffect(() => {
		dispatch(MusicDetail(match.params.id))
	}, [dispatch, match])
	return (
		<>
			{musicloading ? (
				<Loader/>
			) : musicerror ? (
				<Message className="mt-5" variant="danger">{musicerror}</Message>
			) : (
				<>
					<Container className="mt-4">
			<Col md={5}>
				<Image width={400} height={400} src={musicProduct.image} alt={musicProduct.name} />
			</Col>
			<div className="right_side border p-2">
			<Col>
				<strong>Product Name:</strong>
				<p>{musicProduct.name}</p>
			</Col>
			<hr/>
			<Col>
				<strong>Product Description:</strong>
				<p>{musicProduct.description}</p>
			</Col>
			<hr/>
			<Col>
				<strong>Singer Name</strong>
				<p>{musicProduct.singer_name}</p>
			</Col>
			<hr/>
			<Col>
				<strong>Product Price:</strong>
				<p>$ {musicProduct.price}</p>
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

export default MusicDetails;