import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  const categories = [
    {
      id: 1,
      name: "Engine Parts",
      image: "https://media.istockphoto.com/id/1212230930/photo/car-engine-parts.jpg?s=612x612&w=0&k=20&c=YCG4lzjxDYTFQQ-gOniW-r-Xl-th73hBOrcnvdiU274=",
    },
    {
      id: 2,
      name: "Braking System",
      image: "https://media.istockphoto.com/id/1193247877/photo/handsome-mechanic-in-uniform.jpg?s=612x612&w=0&k=20&c=ZDIuniZcHY0McW4Zc654glUrtTGa8A7U2X2enGM7_60=",
    },
    {
      id: 3,
      name: "Suspension & Steering",
      image: "https://media.istockphoto.com/id/1270395078/photo/car-front-axle-sports-car-front-suspension-automotive-industry-components.jpg?s=612x612&w=0&k=20&c=oZf__kDr3qIwfkK1WFgWwEOaVx7ULP4fcLWtAFY160g=",
    },
    {
      id: 4,
      name: "Electrical Parts",
      image: "https://thumbs.dreamstime.com/b/electrical-equipment-car-set-auto-parts-isolated-white-background-electrical-equipment-car-set-120666543.jpg",
    },
    {
      id: 5,
      name: "Body & Accessories",
      image: "https://c8.alamy.com/comp/T2BN4F/red-car-body-disassembled-and-many-vehicles-parts-3d-illustration-T2BN4F.jpg",
    },
    {
      id: 6,
      name: "Cooling System",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUwApiBGjXHVHh-_WI1fL5yLnZsevRDDYPng&s",
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <header
        className="relative text-center py-20 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/478107962/photo/auto-parts.jpg?s=612x612&w=0&k=20&c=C31mE-cVYFlLqJp9smDKUczPoBEtoYl5gaGxdvH0lmM=')",
        }}
      >
        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{ filter: "blur(8px)" }}
        ></div>
        <motion.h1
          className="relative text-4xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to CarSpareShop
        </motion.h1>
        <motion.p
          className="relative text-lg mb-6 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Your one-stop solution for all car spare parts.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link
            to="/products"
            className="relative bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            whileHover={{ scale: 1.1 }}
          >
            Shop Now
          </Link>
        </motion.div>
      </header>

      {/* Categories Section */}
      <section className="py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Car Spare Part Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                className="p-4 border rounded hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
