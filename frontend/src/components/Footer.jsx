import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-gray-400">
            CarSpareShop is your trusted platform for high-quality car spare
            parts. We ensure the best prices and services for all car enthusiasts and professionals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400">
            <strong>Email:</strong> support@carspareshop.com
          </p>
          <p className="text-gray-400">
            <strong>Phone:</strong> +1 234 567 890
          </p>
          <p className="text-gray-400">
            <strong>Address:</strong> 123 Auto Lane, Car City, CA 90001
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              Instagram
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-6 pt-4">
        <p className="text-center text-gray-500 text-sm">
          &copy; 2025 CarSpareShop. All rights reserved. | Designed by CarSpareTeam.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
