import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

function FAQ() {
  return (
    <div>
      <Nav/>
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h3>1. How old do I need to be to rent a car?</h3>
        <p>
          To rent a car, you typically need to be at least 21 years old, but some rental companies may require a minimum age of 25. Please check with our company for our specific age requirements.
        </p>
      </div>
      <div className="faq-item">
        <h3>2. What documents do I need to rent a car?</h3>
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
        <h3>3. Can I rent a car with a debit card?</h3>
        <p>
          Yes, we accept debit cards for car rentals. However, we may place a hold on your account during the rental period. Please contact us for details on our debit card policies.
        </p>
      </div>
      <div className="faq-item">
        <h3>4. What types of insurance are available for the rental car?</h3>
        <p>
          We offer the following insurance options:
          <ul>
            <li>Collision Damage Waiver (CDW)</li>
            <li>Supplemental Liability Insurance (SLI)</li>
            <li>Personal Accident Insurance (PAI)</li>
          </ul>
          Please contact us to discuss these insurance options and determine what suits your needs.
        </p>
      </div>
      <div className="faq-item">
        <h3>5. How does the pricing work?</h3>
        <p>
          Car rental rates are based on factors such as the type of car, rental duration, and any additional services or equipment. Our pricing structure is transparent, and we'll be happy to explain any fees or charges.
        </p>
      </div>
      <div className="faq-item">
        <h3>6. Can I drop off the car at a different location?</h3>
        <p>
          Yes, we offer one-way rentals, but additional fees may apply. Please contact us in advance to arrange a one-way rental and discuss any associated charges.
        </p>
      </div>
      <div className="faq-item">
        <h3>7. What is the fuel policy?</h3>
        <p>
          We provide the car with a full tank of gas, and we request that you return it with a full tank. We also offer a prepaid fuel option for your convenience, or we'll charge for refueling if you return the car with less gas.
        </p>
      </div>
      <div className="faq-item">
        <h3>8. Can I extend my rental period?</h3>
        <p>
          Yes, you can extend your rental period. Please contact our rental location in advance to make arrangements. Late returns may result in additional charges.
        </p>
      </div>
      <div className="faq-item">
        <h3>9. Do you offer discounts for frequent renters or memberships?</h3>
        <p>
          Yes, we have a loyalty program and offer discounts for frequent renters. Additionally, we may have partnerships with various organizations that provide special membership discounts. Please inquire about our loyalty program and current discounts.
        </p>
      </div>
      <div className="faq-item">
        <h3>10. What is the cancellation policy?</h3>
        <p>
          Our cancellation policy varies depending on the reservation details. We recommend reviewing our specific cancellation policy on our website or contacting us for more information. Cancellation fees may apply in some cases.
        </p>
      </div>
    </div>
      <Footer/>
    </div>
  );
}

export default FAQ;