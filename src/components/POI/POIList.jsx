import React, { useEffect, useState } from 'react';
import { getPOIs, deletePOI } from '../../api/api';
import POI from './POI';
import POIForm from './POIForm';

const POIList = () => {
  const [pois, setPOIs] = useState([]);

  useEffect(() => {
    const fetchPOIs = async () => {
      const response = await getPOIs();
      setPOIs(response.data);
    };

    fetchPOIs();
  }, []);

  const handleDelete = async (id) => {
    await deletePOI(id);
    setPOIs(pois.filter(poi => poi.id !== id));
  };

  return (
    <div>
      <h2>Points of Interest</h2>
      <POIForm />
      <ul>
        {pois.map(poi => (
          <POI key={poi.id} poi={poi} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default POIList;
