import { Component } from 'react'
import Img from 'react-image'
import teacher1 from "./carrinho.png"

class CartWidget extends Component {
	render() {
	return (
		<div>
           <img src={ teacher1 }/>
		{/*<input type='text' placeholder={this.props.placeholder}/>*/}
		</div>
	)		
	}
}
export default CartWidget