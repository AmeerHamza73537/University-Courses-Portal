import "./HeroStyle.css"
import hero2 from '../assets/hero2.jpg';



function Hero(props){
    return(
        <>
        <div className={props.cName}>
            <img src={props.heroImage} alt="HeroImg" className="hero-img"/>
            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnClass}>{props.btnText}</a>
            </div>
        </div>
        </>
    )
}
export default Hero;
