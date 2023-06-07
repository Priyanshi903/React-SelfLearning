import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

// props can be named anything
function ExpenseItem(props) {

    // can be called inside only component function, not inside any function
    // useState is a hook
    // useState will always return 2 elements,setTitle is a function
    // const [title, setTitle] = useState(props.title);

    // for demo purpose
    // const clickHandler = () => {
    //     console.log('Clicked!!!!!!');
    //     // on calling setTitle() whole component will be reevaluated nd the state is updated
    //     setTitle('Updated');
    // }

    return (
        <Card className="expense-item">

            {/* expenseDate is an object, therefore can't be directly used */}
            {/* <div>{props.date.toISOString()}</div> */}

            <ExpenseDate date={props.date} />

            <div className="expense-item__description">

                <h2>{props.title}</h2>

                <div className="expense-item__price">Rs. {props.amount}</div>

            </div>

            {/* no parenthesis, no matter how function is created */}
            {/* <button onClick={clickHandler}>Change Title</button> */}

        </Card>
    );
}

export default ExpenseItem;