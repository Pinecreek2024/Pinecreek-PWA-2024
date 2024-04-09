// frontend/src/app/components/sections/EventsSection.tsx
import React, { useEffect, useState } from 'react';
import SectionLayout from '../layout/SectionLayout';
import Card from '../ui/Card';
import { Event } from '../../interfaces/eventInterfaces'; // Import the Event interface
import styles from './EventsSection.module.css';

const EventsSection: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]); // Use the Event interface for the state

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <SectionLayout title="Upcoming Events">
      <div className={styles.cardsContainer}>
        {events.map(event => (
          <Card
            key={event.id}
            title={event.title}
            imageUrl={event.imageUrl}
            description={event.description}
            onClick={() => {/* Define onClick action if necessary */}}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default EventsSection;
