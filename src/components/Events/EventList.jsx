import React, { useEffect, useState } from 'react';
import { getEvents, deleteEvent } from '../../api/api';
import Event from './Event';
import EventForm from './EventForm';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await getEvents();
      setEvents(response.data);
    };

    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    await deleteEvent(id);
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <div>
      <h2>Events</h2>
      <EventForm setEvents={setEvents} />
      <ul>
        {events.map(event => (
          <Event key={event.id} event={event} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default EventList;
