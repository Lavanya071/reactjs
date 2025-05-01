import React from 'react';

export default function FindDoctor() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-gray-900">
      <header className="p-6 bg-white shadow-md sticky top-0 z-50">
        <h2 className="text-2xl font-bold">MediCare</h2>
      </header>
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-semibold text-center mb-6">Find Expert Doctors For An In-Clinic Session</h1>

        {/* Doctor Profile Container */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="doctor_image_url" alt="Doctor" className="w-32 h-32 rounded-full mx-auto" />
            <h3 className="text-xl font-semibold text-center mt-4">Dr. John Doe</h3>
            <div className="text-center text-yellow-500 mt-2">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            <p className="mt-4 text-center text-gray-700">
              I specialize in General Medicine, with over 10 years of experience in treating a wide range of medical conditions.
            </p>

            <div className="mt-6">
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                View Consultation
              </button>
              <button className="w-full mt-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                Chat Consultation
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">I Specialize In</h3>
            <p className="mt-2 text-gray-600">General Medicine, Cardiology, Neurology</p>

            <h3 className="text-xl font-semibold mt-6">My Experience</h3>
            <ul className="mt-2 text-gray-600">
              <li>10 years in General Medicine</li>
              <li>Specialized in Cardiology</li>
              <li>Proven record in patient care and treatment</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Fees and Consultation Time</h3>
            <div className="flex space-x-4 mt-2">
              <div className="flex-1">
                <label>Fees</label>
                <input type="text" placeholder="Enter Fees" className="w-full p-2 border rounded-md mt-2" />
              </div>
              <div className="flex-1">
                <label>Available Time</label>
                <select className="w-full p-2 border rounded-md mt-2">
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Night</option>
                </select>
              </div>
            </div>

            <button className="w-full bg-green-600 text-white py-2 rounded-md mt-4 hover:bg-green-700">
              Make Appointment
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
