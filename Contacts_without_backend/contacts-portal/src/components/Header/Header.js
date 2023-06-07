import classes from './Header.module.css';

const Header = () => {

    return (
        <div className={`${classes.navbar}`}>ManageYourContacts<span><i class='fa fa-phone fa-flip-horizontal' ></i></span></div>
    )
}

export default Header;
