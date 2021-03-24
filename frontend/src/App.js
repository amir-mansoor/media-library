import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header.js"
import Home from "./components/Home.js"
import {Route, Switch} from "react-router-dom"
import Error from "./components/Error.js"
import ProductDetail from "./components/ProductDetail.js"
import MusicDetails from "./components/MusicDetails.js"
const App = () => {
	return (
		<>
		<Header/>
		<Switch>
			<Route path="/" exact component={Home}/>
			<Route path="/bookdetails/:id" component={ProductDetail}/>
			<Route path="/musicdetails/:id" component={MusicDetails}/>
			<Route exact component={Error}/>
		</Switch>
		</>
	)
}


export default App;
