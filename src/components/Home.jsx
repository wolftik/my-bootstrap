import React from 'react'
import Slider from './Slider';
import CartItem from './cart/CartItem';


const Home = (props) => {
  return (
    <div>
      <Slider></Slider>
      <CartItem item={props.item}></CartItem>

    </div>
  )
}

export default Home
