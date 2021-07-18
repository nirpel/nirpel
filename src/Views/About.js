import { Section, Row, Column, Header, Paragraph } from 'UI-Kit';

const imgPath = process.env.PUBLIC_URL + '/assets/images/';

const About = () => {
    return (
        <Section id="about">
            <Row>
                <Column>
                    <Header title="about" />
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Paragraph>
                </Column>
                <Column>
                    <img src={imgPath + 'np-avatar.png'} alt="Avatar" width="100px" />
                </Column>
                <Column>
                    <Header title="skills" />
                </Column>
            </Row>
        </Section>
    );
}

export default About;