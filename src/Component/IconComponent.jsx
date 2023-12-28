// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
//   import React, { useState } from "react";
//   import { Container, Table, Button } from "react-bootstrap";

//   const CartPage = () => {
//       const [cartItems, setCartItems] = useState([]);

//       const addToCart = (item) => {
//           setCartItems([...cartItems, item]);
//       };

//       const removeFromCart = (item) => {
//           const updatedCartItems = cartItems.filter((cartItem) => cartItem !== item);
//           setCartItems(updatedCartItems);
//       };

//       return (
//           <>
//               <Container>
//                   <h1>Cart</h1>
//                   {cartItems.length === 0 ? (
//                       <p>Your cart is empty.</p>
//                   ) : (
//                       <Table striped bordered hover>
//                           <thead>
//                               <tr>
//                                   <th>Item</th>
//                                   <th>Price</th>
//                                   <th>Action</th>
//                               </tr>
//                           </thead>
//                           <tbody>
//                               {cartItems.map((item, index) => (
//                                   <tr key={index}>
//                                       <td>{item.name}</td>
//                                       <td>{item.price}</td>
//                                       <td>
//                                           <Button variant="danger" onClick={() => removeFromCart(item)}>
//                                               Remove
//                                           </Button>
//                                       </td>
//                                   </tr>
//                               ))}
//                           </tbody>
//                       </Table>
//                   )}
//                   <Button variant="primary" onClick={() => addToCart({ name: "Item 1", price: 10 })}>
//                       Add to Cart
//                   </Button>
//               </Container>
//           </>
//       );
//   };

// export default IconComponent;
