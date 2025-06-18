import './Academics.css';
import AcademicsData from './AcademicsData';
import Medical from '../assets/medical.jpg';
import Engineering from '../assets/engineering.jpg';
import Business from '../assets/business.jpg';

function Academics() {
    return (
        <div className="academics">
            <h1>Academics</h1>
            <p>Welcome to the Academics section. Here you can find information about courses, schedules, and academic resources.</p>
            <div className="academic-card">
                <AcademicsData
                    image={Medical}
                    heading="Medical Sciences"
                    text="Explore our comprehensive medical programs designed to prepare you for a career in healthcare."
                />
                <AcademicsData
                    image={Engineering}
                    heading="Engineering"
                    text="Discover our innovative engineering courses that equip you with the skills needed for the future."
                />
                <AcademicsData
                    image={Business}
                    heading="Business Administration"
                    text="Join our business administration programs to gain insights into the world of business and management."
                />
            </div>
        </div>
    );
}
export default Academics;
// This component serves as a placeholder for the Academics section of the application.