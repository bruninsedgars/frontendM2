import React, { useState } from 'react';
import { login } from '../../api/api';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form);
      alert('Login successful');
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input name="email" type="email" onChange={handleChange} value={form.email} placeholder="Email" required />
      <input name="password" type="password" onChange={handleChange} value={form.password} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
