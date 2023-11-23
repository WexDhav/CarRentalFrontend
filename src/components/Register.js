import Nav from './Nav';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const handleSearch1 = () => {
        navigate("/search1")
    }
    const handleSearch2 = () => {
        navigate("/search2")
    }
    return (
        <div>
            <Nav />
            <div className='bgImageReg'>
                <section class='search'>
                    <h2 className="text-dark">Find Your Perfect Car</h2>
                    <button onClick={handleSearch1} className="btn btn-dark">Search by Company</button>
                    <button onClick={handleSearch2} className="btn btn-dark">Search by Price</button>
                </section>
                <section class="features">
                    <div class="feature">
                        <h3 className="text-dark">Wide Selection</h3>
                        <p>Choose from a variety of cars to suit your needs.</p>
                    </div>
                    <div class="feature">
                        <h3 className="text-dark">Affordable Rates</h3>
                        <p>Competitive prices and special offers available.</p>
                    </div>
                    <div class="feature">
                        <h3 className="text-dark">Safe & Secure</h3>
                        <p>Your information and transactions are safe with us.</p>
                    </div>
                </section>
            </div>
            <div className="bgImageReg2">
                <div className="about-us">
                    <h2>About Us: Your Hybrid Car Rental Destination <Link to={"/about"} style={{ textDecoration: "none" }}>
                            <span style={{ fontSize: "18px" }}>See more</span>
                        </Link></h2>
                    <p>
                        Welcome to EcoDrive Hire, where innovation meets sustainability!
                    </p>
                    <p>
                        At EcoDrive Hire, we are passionate about providing you with a unique and eco-friendly driving experience.
                        As a leading hybrid car rental service, we strive to redefine the way you travel,
                        combining cutting-edge technology with environmental responsibility.
                    </p>
                    <br/><hr/><br/>
                    <h2 className="text-dark">
                        Frequently Asked Questions <Link to={"/faq"} style={{ textDecoration: "none" }}>
                            <span style={{ fontSize: "18px" }}>See more</span>
                        </Link>
                    </h2>
                    <div className="faq-item">
                        <h3 className="text-dark">1. How old do I need to be to rent a car?</h3>
                        <p>
                            To rent a car, you typically need to be at least 21 years old, but some rental companies may require a minimum age of 25. Please check with our company for our specific age requirements.
                        </p>
                    </div>
                    <div className="faq-item">
                        <h3 className="text-dark">2. What documents do I need to rent a car?</h3>
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
                        <h3 className="text-dark">3. Can I rent a car with a debit card?</h3>
                        <p>
                            Yes, we accept debit cards for car rentals. However, we may place a hold on your account during the rental period. Please contact us for details on our debit card policies.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Register;

/*
                    <form onSubmit={handleSearch}>
                        <label><b>Select Car Company</b></label>
                        <select onChange={(e)=>{setCompany(e.target.value)}} required>
                            <option></option>
                            <option>Renault</option>
                            <option>Hyundai</option>
                            <option>TATA</option>
                        </select>     
                        <label><b>Select no.of seats</b></label>
                        <select onChange={(e)=>{setSeats(e.target.value)}} required>
                            <option></option>
                            <option>4</option>
                            <option>6</option>
                            <option>8</option>
                        </select>
                        <label><b>Select Price</b></label>
                        <select onChange={(e)=>{setPrice(e.target.value)}} required>
                            <option></option>
                            <option>1999</option>
                            <option>2999</option>
                            <option>3999</option>
                        </select> 
                        <button type="submit" className="btn btn-dark">Search</button>
                    </form>
*/