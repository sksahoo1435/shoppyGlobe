import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

const Cart = () => {
  // items fetch from cart
  const { items } = useSelector((state) => state.cart)
  // if there is no item then print No Items in the Cart
  if (items?.length === 0) {
    return <h2>No Items in the Cart</h2>
  }

  return (
    <div>
      {items && items?.map((item, ind) => <CartItem item={item} key={item?.id} />)}
    </div>
  )
}

export default Cart