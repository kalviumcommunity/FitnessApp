// src/AboutUs.js

import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <header className="bg-blue-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Welcome to Go-It! We are a technology company dedicated to providing innovative solutions for modern challenges.
          </p>
        </div>
      </header>

      <div className="container mx-auto py-12 px-4">
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">Our Mission</h2>
          <p className="text-lg mb-4">
            Our mission is to empower businesses and individuals through cutting-edge technology and exceptional service.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">User-Friendly Interface</h3>
              <p>Our app offers an intuitive and easy-to-navigate interface.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">High Performance</h3>
              <p>Experience fast and reliable performance with our optimized backend.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Secure Data Management</h3>
              <p>Your data is safe with our robust security measures.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Customizable Options</h3>
              <p>Tailor the app to meet your specific needs with our flexible settings.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">24/7 Support</h3>
              <p>Our support team is available around the clock to assist you.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
