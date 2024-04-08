import React, { useEffect, useState } from 'react';
import Card from '@/components/ui/Card';
import eventService from '@/services/eventService';
import styles from './EventsSection.module.css';
import { Event } from '@/interfaces/eventInterfaces'; // Import the Event interface

const EventsSection: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]); // Explicitly type the events state

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await eventService.getEvents();
        setEvents(fetchedEvents);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className={styles.eventsSection}>
      <h2>Upcoming Events</h2>
      <div className={styles.cardsContainer}>
        {events.map(event => (
          <Card
            key={event.id}
            title={event.title}
            imageUrl={event.imageUrl}
            description={event.description}
            onClick={() => {/* Handle event selection or navigation */}}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsSection;
