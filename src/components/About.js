import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

function About() {
  return (
    <div>
      <Nav/>
    <div className="about-us">
      <h2>About Us: Your Hybrid Car Rental Destination</h2>
      <p>
        Welcome to EcoDrive Hire, where innovation meets sustainability!
      </p>
      <p>
        At EcoDrive Hire, we are passionate about providing you with a unique and eco-friendly driving experience.
        As a leading hybrid car rental service, we strive to redefine the way you travel, 
        combining cutting-edge technology with environmental responsibility.
      </p>
      
      <h3>Our Mission</h3>
      <p>
        At the core of our mission is the commitment to offer you a greener alternative to traditional car rentals. 
        We believe in contributing to a sustainable future by promoting the use of hybrid vehicles, reducing carbon emissions, 
        and preserving our planet for generations to come.
      </p>

      <h3>Why Choose Us?</h3>
      <ul>
        <li>
          <strong>Environmentally Friendly Fleet: </strong> We take pride in our extensive fleet of hybrid cars, 
          carefully selected for their fuel efficiency and low environmental impact. By choosing EcoDrive Hire, 
          you not only enjoy a comfortable and stylish ride but also contribute to the reduction of your carbon footprint.
        </li>
        <li>
          <strong> Cutting-Edge Technology: </strong> Experience the latest advancements in automotive technology. 
          Our hybrid cars are equipped with state-of-the-art features, ensuring a seamless and enjoyable driving experience. 
          From smart navigation systems to energy-efficient engines, we prioritize innovation for your convenience.
        </li>
        <li>
          <strong>Cost-Effective Solutions: </strong> Renting a hybrid car doesn't have to break the bank. 
          At EcoDrive Hire, we offer competitive and transparent pricing, allowing you to enjoy the benefits of eco-friendly 
          transportation without compromising your budget.
        </li>
        <li>
          <strong>Customer-Centric Approach: </strong> Your satisfaction is our top priority. 
          Our dedicated team is committed to providing excellent customer service, assisting you at every step of your rental journey. 
          Have questions or need assistance? We're here for you!
        </li>
        <li>
          <strong>Safety and Maintenance:</strong> Rest assured that our vehicles undergo regular maintenance and 
          inspections to ensure your safety and peace of mind on the road.
        </li>
      </ul>

      <h3>Our Commitment to Sustainability</h3>
      <p>
        Beyond providing hybrid car rentals, we are dedicated to fostering a culture of sustainability. 
        We actively seek partnerships with eco-conscious organizations, implement green initiatives, and continually explore ways to 
        minimize our ecological impact.
      </p>
      <p>
        Join us on the journey towards a cleaner, greener future. Rent a hybrid car with EcoDrive Hire and drive into a sustainable tomorrow!
      </p>
      <p>
        For inquiries, reservations, or to explore our hybrid car fleet, contact us today!
      </p>
    </div>
    <Footer/>
    </div>
  );
}

export default About;