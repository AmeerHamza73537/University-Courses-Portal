import Smile1 from '../assets/smile1.jpg';
import Smile2 from '../assets/smile2.jpg';
import Sport1 from '../assets/sports1.jpg';
import Sport2 from '../assets/sport2.jpg';
import './DestinationStyle.css';
import DestinationData from './Destinationdata';

const Destination = () => {
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a Time Frame</p>
            <DestinationData
                className="first-des"
                heading="Taal Volcano, Batangas"
                text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you’ll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
                img1={Smile1}
                img2={Smile2}
            />
            <DestinationData
                className="first-des-reverse"
                heading="Mt. Daguldul, Batangas"
                text="If you’re looking for a hike that’s a little more challenging but still good for a beginner mountaineer, check out Mt. Daguldul in San Juan, Batangas. You’ll start your hike from the beach and pass through tropical forest, different rock formations, and small streams. There’s a small store halfway up the trail where you can take a break and drink buko juice, and though the summit itself may not have the best view, the breeze is fantastic. Once you’ve made it back down, head straight to the beach for a refreshing, well-deserved swim."
                img1={Sport1}
                img2={Sport2}
            />
        </div>
    )
}
export default Destination;