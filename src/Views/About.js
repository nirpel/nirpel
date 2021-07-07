import { Background, AboutContainer } from 'UI-Kit';

const imgPath = process.env.PUBLIC_URL + '/assets/images/';

const About = () => {
    return (
        <Background>
            <AboutContainer>
                <div>

                </div>
                <img src={imgPath + 'np-avatar.png'} alt="Avatar" />
                <div>

                </div>
            </AboutContainer>
        </Background>
    );
}

export default About;