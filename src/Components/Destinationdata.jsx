import './DestinationStyle.css';
import Smile1 from '../assets/smile1.jpg';
import Smile2 from '../assets/smile2.jpg';
import { Component } from 'react';

class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className="image">
                    <img src={this.props.img1} alt="StudentSmiling" />
                    <img src={this.props.img2} alt="StudentSmiling" />
                </div>
            </div>
        )
    }
}
export default DestinationData;