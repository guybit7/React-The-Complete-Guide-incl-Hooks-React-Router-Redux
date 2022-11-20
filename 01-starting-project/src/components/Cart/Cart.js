import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {

    const ctx = useContext(CartContext);
    const hasItems = ctx.items.length > 0;

    const cartItemRemoveHandler = (id) => {

    }

    const cartItemAddHandler = (item) => {

    }

    const cartItems = (
        <ul className={classes['cart-items']}>
            {ctx.items.map((item) =>
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}>
                </CartItem>
            )}
        </ul>
    );

    return <Modal>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{ctx.totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClickCloseModalHandler}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
}

export default Cart;