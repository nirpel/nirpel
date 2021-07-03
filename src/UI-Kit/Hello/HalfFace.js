import './HalfFace.css';

const HalfFace = (props) => {

    const imgPath = process.env.PUBLIC_URL + '/assets/images/';

    return (
        <div className='Half-Face'>
            <img src={imgPath + props.fileName} alt='Face' />
        </div>
    );
}

export default HalfFace;