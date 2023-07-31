import { Component } from 'react'
import ItemListContainer from '../components/ItemListContainer'
import CartWidget from '../components/CartWidget'

 class AppContainer extends Component {
	render() {
	return (
		<div>
		<p>AppContainer</p>
        <ItemListContainer text='outro'/>
        <CartWidget placeholder='outro'/>
		</div>
	)		
	}
}
export default AppContainer