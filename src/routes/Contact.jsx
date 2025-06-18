import ContactForm from '../Components/ContactForm';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import contactus from '../assets/contactus.png';

function About(){
    return(
        <>
        <Navbar/>
        <Hero
            cName="hero-mid"
            heroImage={contactus}
            title="Contact US"  
            // btnClass="show"
        />
        <ContactForm/>
        <Footer/>
        </>
    )
}
export default About;