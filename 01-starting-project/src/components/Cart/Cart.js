import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
    const cartItems = (
        <ul className={classes['cart-items']}>
            {[{ id: 'c1', name: 'Sushi1', amount: 2, price: 14 }]
                .map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>

    );

    return <Modal>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClickCloseModalHandler}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
}

export default Cart;