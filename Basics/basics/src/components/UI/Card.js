import './Card.css';

// reuable wrapper component
function Card(props) {

    // custom tag can't identify classname as HTML does, so we need to add externally the classname
    // anything recieved as a className from outside is added to the string
    const classes = 'card ' + props.className;

    // props.children is always there,children is a reserve name
    // children contains the content that is between the opening & closing tag of Card
    return <div className={classes}>{props.children}</div>;
}

export default Card;