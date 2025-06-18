import Academics from '../Components/Academics';

import Destination from '../Components/Destination';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import hero2 from '../assets/hero2.jpg';

// Why do we use 2 dots in the import path?
// The two dots (`..`) in the import path indicate that we are navigating up one directory level from the current file's location.
// This is useful when the file we want to import is located in a parent directory.
// What if we use only one dot?
// If we use only one dot (`.`), it refers to the current directory. In this case, it would look for the `Navbar` component in the same directory as the `Home.jsx` file.
function Home(){
    return(
        <>
        <Navbar/>
        <Hero
            cName="hero"
            heroImage={hero2}
            title="Your Journey Starts Here"  
            text="Choose Your Course and Start Learning Today"   
            btnText="Enroll Now"
            url="/"
            btnClass="show"
        />
        <Destination/>
        <Academics/>
        <Footer/>
        </>
    )
}
export default Home;


