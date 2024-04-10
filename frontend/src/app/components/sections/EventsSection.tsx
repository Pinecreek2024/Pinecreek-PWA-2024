import React, { useEffect, useState } from 'react';
import SectionLayout from '../layout/SectionLayout';
import Card from '../ui/Card';
import { Event } from '../../interfaces/eventInterfaces'; // Import the Event interface
import styles from './EventsSection.module.css';

const EventsSection: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState<string | null>(null); // State to handle errors

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/events');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Failed to fetch events:', error);
        setError('Failed to load events. Please try again later.');
      }
    };

    fetchEvents();
  }, []);

  const handleCardClick = () => {
    console.log('Card clicked!');
  };

  return (
    <SectionLayout title="Upcoming Events">
      <div className={styles.cardsContainer}>
        {error ? (
          <p>{error}</p>
        ) : (
          events.map(event => (
            <Card
              key={event.id}
              title={event.title}
              imageUrl={event.imageUrl}
              description={event.description}
              onClick={handleCardClick} // Add the onClick event handler
            />
          ))
        )}
      </div>
    </SectionLayout>
  );
};

export default EventsSection;
