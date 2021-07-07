import './AboutContainer.css';

const AboutContainer = (props) => {
    return (
        <div className="AboutContainer">
            {props.children}
        </div>
    );
}

export default AboutContainer;