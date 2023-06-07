import classes from './Header.module.css';
import { Fragment } from 'react';

import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return (
        <Fragment>
            {/* header is html5 element */}
            <header className={classes.header}>
                <h1>YumFood</h1>
                {/* onClick can be any name */}
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A table full of delicious food!' />
            </div>
        </Fragment>
    )
};

export default Header;