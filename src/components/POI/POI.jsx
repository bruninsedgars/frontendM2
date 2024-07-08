import React from 'react';

const POI = ({ poi, onDelete }) => {
  return (
    <li>
      <h3>{poi.name}</h3>
      <p>{poi.description}</p>
      <button onClick={() => onDelete(poi.id)}>Delete</button>
    </li>
  );
};

export default POI;
