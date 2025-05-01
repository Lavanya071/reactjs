import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="d-flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-50">
      <h2 className="text-2xl font-bold">MediCare</h2>
      <motion.div className="flex items-center space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}>
       <Link to="/login">
  <button className="m-5 px-4 py-2 rounded-xl border hover:bg-blue-100 transition-all">Login</button>
</Link>
<Link to="/signup">
  <button className="m-3 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all">Sign Up</button>
</Link>
<Link to="/find-doctor">
  <button className="m-3 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all">Find Doctor</button>
</Link>

        
        
      </motion.div>
    </header>
  );
}
