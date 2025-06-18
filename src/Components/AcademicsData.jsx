import './Academics.css';
import Academics from './Academics';


function AcademicsData(props) {
    return(
        <div className="a-card">
            <div className="a-img">
                <img src={props.image} alt="simple-image" />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}
export default AcademicsData;