import React from "react";
import { FaCar, FaTools, FaShippingFast, FaHeadset, FaUserCog } from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-center py-20">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-lg mt-4">Providing top-notch services to keep your car in perfect condition</p>
      </section>

      {/* Services Overview */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">What We Offer</h2>
        <p className="text-lg mb-8">
          At SpeedySpare, we offer a range of high-quality services designed to keep your car running smoothly. Whether you're looking for spare parts, installation, or expert advice, we've got you covered.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1: Car Parts */}
          <div className="p-8 bg-white shadow-lg rounded-lg hover:bg-gray-50 transition duration-300">
            <FaCar className="text-4xl text-green-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Car Spare Parts</h3>
            <p>
              We offer a wide variety of car parts, ranging from engine components to brake systems, ensuring you get the highest quality for your vehicle.
            </p>
          </div>

          {/* Service 2: Repairs and Installations */}
          <div className="p-8 bg-white shadow-lg rounded-lg hover:bg-gray-50 transition duration-300">
            <FaTools className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Repairs & Installations</h3>
            <p>
              Our team of experts provides reliable installation and repair services to ensure your car is in peak condition. We handle everything from routine maintenance to major repairs.
            </p>
          </div>

          {/* Service 3: Fast Delivery */}
          <div className="p-8 bg-white shadow-lg rounded-lg hover:bg-gray-50 transition duration-300">
            <FaShippingFast className="text-4xl text-red-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Fast Delivery</h3>
            <p>
              We understand the urgency of getting your car back on the road. Our fast delivery service ensures you receive your parts quickly, no matter where you are.
            </p>
          </div>
        </div>
      </section>

      {/* Our Support */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Customer Support</h2>
          <p className="text-lg mb-8">
            Our customer service team is available to assist with any questions or concerns you may have. Whether it's about product details, delivery, or repairs, we're here to help.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white shadow-lg rounded-lg">
              <FaHeadset className="text-4xl text-purple-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4">24/7 Customer Support</h3>
              <p>
                Our support team is available around the clock to assist you with any inquiries or issues you may face. We're just a phone call or email away!
              </p>
            </div>
            <div className="p-8 bg-white shadow-lg rounded-lg">
              <FaUserCog className="text-4xl text-orange-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4">Expert Advice</h3>
              <p>
                Need help choosing the right parts or services for your car? Our experts are available to offer advice and recommendations to make the best decision for your vehicle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Ready to Get Started?</h2>
        <p className="text-lg mb-8">
          Whether you're looking for a specific part or need a repair, we're here to help. Get in touch with us today to learn more about our services!
        </p>
        <a href="mailto:contact@speedyspare.com" className="bg-white text-gray-900 py-2 px-8 rounded-full text-xl hover:bg-gray-200 transition duration-300">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default Services;
