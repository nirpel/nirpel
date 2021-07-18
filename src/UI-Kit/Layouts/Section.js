import './Section.css';

const Section = (props) => {
    return (
        <section className="Section" id={props.id}>
            {props.children}
        </section>
    );
}

export default Section;