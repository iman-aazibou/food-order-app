import { useContext } from "react";

import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

import classes from "./Cart.module.css";

console.log("hello");

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return <li>{item.name}</li>;
      })}
    </ul>
  );

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)} €`;

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
