import { HalfFace, HelloBackground } from 'UI-Kit';
import './Hello.css';

const Hello = () => {
    return (
        <HelloBackground>
            <div className="centeri">
                <div className="a h">Hello;</div>
                <div className="a n">I'm <span className="b">Nir Peled.</span></div>
                <div className="a f">I’m a Full Stack Developer & .NET Programmer.</div>
            </div>
            <HalfFace fileName='half-face.png' />
        </HelloBackground>
    );
}

export default Hello;