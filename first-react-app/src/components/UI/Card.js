import Card from './Card.css';

function Card2(props) {
    const classes = 'card ' + props.className;

    return (
        <div className={classes}>
            {props.children}
        </div>);
}

export default Card2;