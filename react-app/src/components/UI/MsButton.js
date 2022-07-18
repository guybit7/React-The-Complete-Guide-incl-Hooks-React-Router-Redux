import Button from '@mui/material/Button';
import './MsButton.css';

const MsButton = (props) => {
    const classes = 'ms-button ' + props.className;

    return (
        <Button className={classes} id={props.id} onClick={props.clickHandler}>{props.text}</Button>
    );
}
export default MsButton;

