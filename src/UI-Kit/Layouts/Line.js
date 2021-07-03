import './Line.css';

const Line = (props) => {
    return (
        <div className="Line" justify={props.justify} width={props.width}>
            {props.children}
        </div>
    );
}

export default Line;