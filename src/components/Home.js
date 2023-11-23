import {Link} from 'react-router-dom';
import car from './homecar.png';

function Home()
{
    return(
        <div>
            <div class="intro-container">
                <h1 className="text-dark">Welcome to Car Rental Booking </h1> 
                <p>Explore Our Fleet of Cars for Your Next Journey</p>
                <Link to={"/register"}>
                    <button class="rent-button bg-dark">Rent a Car</button>
                </Link>
            </div>
            <div class="intro-text">
                <h3 className="text-dark">Simply Enter Your Location and Start Date<br/> to Secure Your Perfect Rental Car <br/>Hassle-Free!</h3>
                <br/>
                <img src={car} alt='car' class="sample-car"/>
            </div>
            
        </div>
    )
}
export default Home;

/*
<hr/>
            <div className="faq">
                <h2 className="text-success">
                    Frequently Asked Questions <Link to={"/faq"} style={{textDecoration:"none"}}>
                        <span style={{fontSize:"18px"}}>See more</span>
                    </Link> 
                </h2>
                <div className="faq-item">
                    <h3 className="text-success">1. How old do I need to be to rent a car?</h3>
                    <p>
                        To rent a car, you typically need to be at least 21 years old, but some rental companies may require a minimum age of 25. Please check with our company for our specific age requirements.
                    </p>
                </div>
                <div className="faq-item">
                    <h3 className="text-success">2. What documents do I need to rent a car?</h3>
                    <p>
                        You'll need the following documents to rent a car:
                        <ul>
                            <li>A valid driver's license.</li>
                            <li>A credit card in your name.</li>
                            <li>Proof of insurance.</li>
                        </ul>
                        International renters may need additional documents, such as a passport and an international driver's license.
                    </p>
                </div>
                <div className="faq-item">
                    <h3 className="text-success">3. Can I rent a car with a debit card?</h3>
                    <p>
                        Yes, we accept debit cards for car rentals. However, we may place a hold on your account during the rental period. Please contact us for details on our debit card policies.
                    </p>
                </div>
            </div>
            <Footer/> 
*/