import './HelloMessage.css';

const HelloMessage = (props) => {
    return (
        <div className="HelloMessage">
            <div className="hello">Hello;</div>
            <div className="sub">I'm <span className="name">Nir Peled.</span></div>
            <div className="pres">I’m a Full Stack Developer & </div>
            <div className="pres">.NET Programmer.</div>
        </div>
    );
}
export default HelloMessage;