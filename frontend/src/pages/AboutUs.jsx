import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 text-white text-center py-20">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg mt-4">We are a leading provider of quality car spare parts, committed to serving your needs with passion and reliability.</p>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          At SpeedySpare, our mission is simple: to provide top-quality car spare parts to vehicle owners, mechanics, and auto enthusiasts. Our team
          is dedicated to ensuring you get the right parts with reliable service and fast delivery. Since our inception, we have been constantly
          growing and adapting to meet the ever-evolving demands of the automotive industry. With years of experience and a passionate team behind
          us, we take pride in our ability to offer the best products and services.
        </p>

        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Our journey began with a vision to make car spare parts easily accessible and affordable for everyone. We started small, but our
          commitment to quality and customer satisfaction helped us grow rapidly. Today, SpeedySpare is a trusted name in the automotive industry,
          serving thousands of customers worldwide. We believe in forging lasting relationships with our clients, ensuring they have the right
          parts at the right time.
        </p>

        <p className="text-lg mb-8 max-w-3xl mx-auto">
          We understand that finding the right parts for your vehicle can be a challenging task, which is why we have a dedicated team to assist
          you in every step of the process. From identifying the right parts to delivering them promptly, we strive to make your experience with
          SpeedySpare as seamless as possible. Our team is constantly researching and sourcing the latest parts and technologies to ensure that
          we are always ahead of the curve.
        </p>

        <div className="relative w-full h-96 mb-8">
          <img
            src="https://www.ftts.com.pk/wp-content/uploads/2017/06/OurTeam.jpg"
            alt="Team"
            className="object-cover w-full h-full rounded-lg" // Image will cover the entire horizontal section
          />
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Core Values</h2>
          <p className="text-lg mb-8">We pride ourselves on our commitment to customer satisfaction and our values are at the heart of everything we do.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Customer Satisfaction</h3>
              <p>
                We always put our customers first, ensuring that every interaction is pleasant and efficient. Your satisfaction is our priority.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
              <p>
                We only provide the highest quality products, sourced from trusted manufacturers and suppliers to guarantee durability and performance.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p>
                We continuously innovate to provide the latest parts and technology to meet the evolving needs of the automotive industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Follow Us</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-300">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-300">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-300">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-300">
            <FaInstagram />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <p className="text-lg mb-8">We would love to hear from you! Reach out to us for any inquiries or support.</p>
        
      </section>
    </div>
  );
};

export default About;
