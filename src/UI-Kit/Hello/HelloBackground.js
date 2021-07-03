import './HelloBackground.css';

const HelloBackground = (props) => {
    return (
        <div className="HelloBackground">
            {props.children}
        </div>
    );
}

export default HelloBackground;