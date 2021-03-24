import books from "../books.js"
import {useEffect} from "react"
import { useDispatch, useSelector } from 'react-redux'
import {listBooks} from "../actions/bookActions.js"
import {listMusics} from "../actions/musicActions.js"
import "./Home.css"
import {Link} from "react-router-dom"
import {Card, Row,Container,Image} from "react-bootstrap"
import Loader from "./Loader.js"
import Message from "./Message.js"
import music from "../music.js"
const Home = () => {
	const dispatch = useDispatch()
	const booklist = useSelector(state => state.bookList)
	const {error, products, loading} = booklist
	


	const musiclist = useSelector(state => state.musicList)
	const {musicerror, musicProducts, musicloading} = musiclist

	

	useEffect(() => {
		dispatch(listBooks())
		dispatch(listMusics())
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

	{musicloading ? (
		<Loader />)
		: musicerror ? (<Message variant="danger">{musicerror}</Message>) 
		: (
			<>	<Container className="mt-3 flex">
		<Row>
			{musicProducts.map(mus => (
				<Card className="card" key={mus._id}>
  <Image width={400} height={400} src={mus.image} />
  <Card.Body>
    <Card.Title>{mus.name}</Card.Title>
    <Card.Text>
      {mus.description}
    </Card.Text>
  </Card.Body>
  <Link className="details-btn" to={`musicdetails/${mus._id}`}>Check Out Product</Link>
</Card>
			))}
			</Row>
		</Container></>
		)
	}


		
		</>
	)
}

export default Home;