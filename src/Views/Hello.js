import { HalfFace, Section, HelloMessage } from 'UI-Kit';

const Hello = () => {
    return (
        <Section>
            <HelloMessage />
            <HalfFace fileName='half-face.png' />
        </Section>
    );
}

export default Hello;