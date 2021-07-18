import './Header.css';

const Header = (props) => {
    return (
        <div className="Header">
            {props.title}
        </div>
    );
}

export default Header;