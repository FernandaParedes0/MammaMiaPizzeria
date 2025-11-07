import React from 'react'
import {pizzaCart} from "../../js/pizzas.js";
import ItemCart from '../ItemCart/ItemCart.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function Cart() {
  
  return (
    <Container className='p-5'>
        <h5>Detalles del pedido</h5>
        <>
          {
          pizzaCart.map (pizzaCart => (
                  <ItemCart
                  key={pizzaCart.id} name={pizzaCart.name} price={pizzaCart.price} img={pizzaCart.img}
                  />
          ))
        }
        </>
        <h6>Total: </h6>
        <Button>Pagar</Button>
    </Container>
  )
}

export default Cart