import {useEffect} from "react"
import { useDispatch, useSelector } from 'react-redux'
import {listBooks} from "../actions/bookActions.js"
import "./Home.css"
import {Link} from "react-router-dom"
import {Card, Row,Container,Image} from "react-bootstrap"
import Loader from "./Loader.js"
import Message from "./Message.js"

const Home = () => {
	const dispatch = useDispatch()
	const booklist = useSelector(state => state.bookList)
	const {error, products, loading} = booklist

	useEffect(() => {
		dispatch(listBooks())
	}, [dispatch])
 	return (
		<>
		{loading ? (
			<Loader/>)
		: error ? (<Message variant="danger">{error}</Message>)
		: (<><Container>
		<h1>Latest Products</h1>
		</Container>
		<Container className="mt-3 flex">

		<Row>
			{products.map(product => (
				<Card className="card" key={product._id}>
  <Image width={400} height={400} src={product.image} />
  <Card.Body>
    <Card.Title>{product.name}</Card.Title>
    <Card.Text>
      {product.description}
    </Card.Text>
  </Card.Body>
  <Link className="details-btn" to={`bookdetails/${product._id}`}>Check Out Product</Link>
</Card>
			))}
			</Row>
		</Container>

		</>)

	}
		
		</>
	)
}

export default Home;