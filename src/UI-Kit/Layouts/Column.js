import './Column.css';

const Column = (props) => {
    return (
        <div className="Column" col={props.col}>
            {props.children}
        </div>
    );
}

export default Column;