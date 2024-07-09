import React, { useState } from 'react';
//import { addEvent } from '../../api/api';

const EventForm = ({ setEvents }) => {
  const [form, setForm] = useState({ name: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      /* const response = await addEvent(form);
      setEvents(prevEvents => [...prevEvents, response.data]);
      setForm({ name: '', description: '' }); */
    } catch (error) {
      alert('Failed to add event');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Event</h3>
      <input name="name" onChange={handleChange} value={form.name} placeholder="Name" required />
      <input name="description" onChange={handleChange} value={form.description} placeholder="Description" required />
      <button type="submit">Add</button>
    </form>
  );
};

export default EventForm;
