import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import AboutHero from '../assets/about.png'
import AboutUs from '../Components/AboutUs';
// Why do we use dot in the cName prop?
// The dot in the `cName` prop is used to indicate that the class name is a CSS class that should be applied to the component.
// but we can also use a string without a dot, like `cName="hero"`?
// The dot is not necessary, but it is a common convention to indicate that the value is a class name.

function About(){
    return(
        <>
        <Navbar/>
        <Hero
            cName="hero-mid"
            heroImage={AboutHero}
            title="About US"  
            // btnClass="show"
        />
        <AboutUs/>
        <Footer/>
        </>
    )
}
export default About;