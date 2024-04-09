// frontend/src/pages/events.tsx
import React, { useEffect, useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Card from '@/components/ui/Card';
import styles from './events.module.css';

// Replace with your actual event data structure
interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/events/');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleEventClick = (eventId: number) => {
    // Placeholder functionality, replace with actual navigation or action
    console.log(`Event clicked: ${eventId}`);
  };

  return (
    <PageLayout title="Events" description="Check out our upcoming events">
      <div className={styles.eventsContainer}>
        {events.map(event => (
          <Card
            key={event.id}
            title={event.title}
            description={event.description}
            imageUrl={event.imageUrl}
            onClick={() => handleEventClick(event.id)}
          />
        ))}
      </div>
    </PageLayout>
  );
};

export default EventsPage;
