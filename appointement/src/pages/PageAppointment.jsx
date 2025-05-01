import React from 'react';
import Header from '../components/Header';
import AppointmentForm from '../components/AppointmentForm';
import '../index.css';

// Import images
import doctor from "../assets/image.png";

export default function PageAppointment() {


  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-gray-900">
      <Header />
      <main className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-10">Book Your Appointment</h1>

        {/* Filters Section */}
        <div className="space-y-6 bg-white p-8 rounded-xl shadow-xl mb-12 max-w-4xl mx-auto">
          <div>
            <label className="block font-medium">Find Location</label>
            <input type="text" placeholder="Enter location" className="w-full mt-1 p-3 border rounded-md" />
          </div>
          <div>
            <label className="block font-medium">Specialization</label>
            <input type="text" placeholder="e.g., specialization" className="w-full mt-1 p-3 border rounded-md" />
          </div>

          <div className="flex flex-wrap justify-between gap-4">
            <div className="flex-1 min-w-[180px]">
              <label className="block font-medium">Expertise</label>
              <select className="w-full mt-1 p-3 border rounded-md">
                <option>General Medicine</option>
                <option>Cardiology</option>
                <option>Neurology</option>
              </select>
            </div>

            <div className="flex-1 min-w-[180px]">
              <label className="block font-medium">Gender</label>
              <select className="w-full mt-1 p-3 border rounded-md">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="flex-1 min-w-[180px]">
              <label className="block font-medium">Fees</label>
              <input type="number" placeholder="Enter fees" className="w-full mt-1 p-3 border rounded-md" />
            </div>

            <div className="flex-1 min-w-[180px]">
              <label className="block font-medium">Language</label>
              <input type="text" placeholder="Preferred Language" className="w-full mt-1 p-3 border rounded-md" />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1 min-w-[180px]">
              <label className="block font-medium">Available Time</label>
              <select className="w-full mt-1 p-3 border rounded-md">
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Night</option>
              </select>
            </div>
          </div>
        </div>

        {/* Appointment Form */}
        <AppointmentForm />

        {/* Doctor Cards */}
        <div className="flex flex-wrap justify-center gap-10">
          {[1, 2].map((id) => (
            <div
              key={id}
              className="bg-white p-6 rounded-xl shadow-xl w-[250px] h-auto flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={doctor}
                alt={`Doctor ${id}`}
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 mb-4 transition-transform duration-300 hover:scale-105"
              />

              <h3 className="text-lg font-semibold text-gray-800">
                {['Dr. John Doe', 'Dr. Jane Smith'][id - 1]}
              </h3>

              <div className="text-yellow-500 mt-2">⭐⭐⭐⭐⭐</div>

              <p className="mt-2 text-gray-600 text-sm">
                {[
                  '10 years of experience in General Medicine, specializing in Cardiology.',
                  '8 years of experience in Pediatrics, specializing in Child Care.',
                ][id - 1]}
              </p>

              <div className="mt-4 w-full flex flex-col gap-3">
                <button className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all duration-300">
                  View Consultation
                </button>
                <button className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-all duration-300">
                  Chat Consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
