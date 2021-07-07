import './Background.css';

const Background = (props) => {
    return (
        <div className="Background">
            {props.children}
        </div>
    );
}

export default Background;