import Academics from '../Components/Academics';
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import ServiceHero from '../assets/services.jpg';
import Footer from '../Components/Footer';

function About(){
    return(
        <>
        <Navbar/>
        <Hero
            cName="hero-mid"
            heroImage={ServiceHero}
            title="Our Services"  
            // btnClass="show"
        />
        <Academics/>
        <Footer/>
        </>
    )
}
export default About;