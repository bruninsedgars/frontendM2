import React from 'react';

const Event = ({ event, onDelete }) => {
  return (
    <li>
      <h3>{event.name}</h3>
      <p>{event.description}</p>
      <button onClick={() => onDelete(event.id)}>Delete</button>
    </li>
  );
};

export default Event;
