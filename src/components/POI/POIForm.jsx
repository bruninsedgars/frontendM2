import React, { useState } from 'react';
import { addPOI } from '../../api/api';

const POIForm = ({ setPOIs }) => {
  const [form, setForm] = useState({ name: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addPOI(form);
      setPOIs(prevPOIs => [...prevPOIs, response.data]);
      setForm({ name: '', description: '' });
    } catch (error) {
      alert('Failed to add POI');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Point of Interest</h3>
      <input name="name" onChange={handleChange} value={form.name} placeholder="Name" required />
      <input name="description" onChange={handleChange} value={form.description} placeholder="Description" required />
      <button type="submit">Add</button>
    </form>
  );
};

export default POIForm;
