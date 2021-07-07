import { HalfFace, Background, HelloMessage } from 'UI-Kit';

const Hello = () => {
    return (
        <Background>
            <HelloMessage />
            <HalfFace fileName='half-face.png' />
        </Background>
    );
}

export default Hello;