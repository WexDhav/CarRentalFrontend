import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

// Component for a single resource link
function ResourceLink({ title, description, link }) {
  return (
    <div className="resource-link">
      <h4>{title}</h4>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Explore {title}</a>
    </div>
  );
}

// Component for a category of resources
function ResourceCategory({ title, resources }) {
  return (
    <div className="resource-category">
      <h3>{title}</h3>
      {resources.map((resource, index) => (
        <ResourceLink key={index} {...resource} />
      ))}
    </div>
  );
}

function Travel() {
  // Example data for resource categories and links
  const resourceData = [
    {
      title: 'Cab Routes from Airport',
      resources: [
        { title: 'Airport Shuttle Service', description: 'Book a shuttle service from the airport to your destination.', link: 'https://www.example.com/airport-shuttle' },
        { title: 'Taxi Services', description: 'Explore taxi services available at the airport for convenient travel.', link: 'https://www.example.com/taxi-services' },
        // Add more resources as needed
      ],
    },
    {
      title: 'City Transportation',
      resources: [
        { title: 'Public Transit', description: 'Learn about public transportation options in the city.', link: 'https://www.example.com/public-transit' },
        { title: 'Rideshare Services', description: 'Discover rideshare services for easy city commuting.', link: 'https://www.example.com/rideshare-services' },
        // Add more resources as needed
      ],
    },
    {
      title: 'Top Cab Routes',
      resources: [
        { title: 'City to Landmark', description: 'Explore cab routes from the city center to popular landmarks.', link: 'https://www.example.com/city-to-landmark' },
        { title: 'Airport to Hotel', description: 'Book a cab for a comfortable ride from the airport to your hotel.', link: 'https://www.example.com/airport-to-hotel' },
        // Add more resources as needed
      ],
    },
    // Add more categories as needed
  ];

  return (
    <div>
      <Nav/>
      <section className="travel-resources">
        <h2>Travel Resources</h2>
        <p>Welcome to our Travel Resources section! Here, you'll find a collection of helpful tools and information to enhance your travel experience.</p>

        {resourceData.map((category, index) => (
          <ResourceCategory key={index} {...category} />
        ))}

        <div className="featured-resource">
          <h3>Featured Resource: TripAdvisor</h3>
          <p>Find the best hotels, restaurants, and attractions, as recommended by fellow travelers. Read reviews, book hotels, and plan your itinerary with confidence.</p>
          <a href="https://www.tripadvisor.com/" target="_blank" rel="noopener noreferrer" className="linkTravel">Explore TripAdvisor</a>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Travel;