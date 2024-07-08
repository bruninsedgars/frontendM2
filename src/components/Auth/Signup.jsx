import React, { useState } from 'react';
import { signup } from '../../api/api';

const Signup = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(form);
      alert('Signup successful');
    } catch (error) {
      alert('Signup failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input name="email" type="email" onChange={handleChange} value={form.email} placeholder="Email" required />
      <input name="password" type="password" onChange={handleChange} value={form.password} placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
