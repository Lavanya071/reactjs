import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function AppointmentForm() {
  const [form, setForm] = useState({ name: '', email: '', date: '', time: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment booked successfully!');
  };

  return (
    <motion.form onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-4 bg-white p-6 rounded-xl shadow-lg">

      <div>
        <label className="block font-medium">Full Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full mt-1 p-2 border rounded-md"
        />
      </div>

      <div>
        <label className="block font-medium">Email Address</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full mt-1 p-2 border rounded-md"
        />
      </div>

      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block font-medium">Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>
        <div className="flex-1">
          <label className="block font-medium">Time</label>
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>
      </div>

      <button type="submit" className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
        Book Appointment
      </button>
    </motion.form>
  );
}
