import React from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const parts = [
    { id: 1, name: "Brake Pads", image: "https://via.placeholder.com/150", price: 4999 },
    { id: 2, name: "Engine Oil", image: "https://via.placeholder.com/150", price: 2999 },
    { id: 3, name: "Air Filter", image: "https://via.placeholder.com/150", price: 1999 },
    { id: 4, name: "Battery", image: "https://via.placeholder.com/150", price: 8999 },
    { id: 5, name: "Spark Plugs", image: "https://via.placeholder.com/150", price: 1499 },
    { id: 6, name: "Headlights", image: "https://via.placeholder.com/150", price: 5999 },
  ];

  return (
    <div>
      

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
        <motion.a
          href="#products"
          className="relative bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          whileHover={{ scale: 1.1 }}
        >
          Shop Now
        </motion.a>
      </header>

      

      <section id="parts" className="py-10">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Parts
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {parts.map((part) => (
              <ProductCard
                key={part.id}
                productName={part.name}
                productImage={part.image}
                productPrice={part.price}
              />
            ))}
          </motion.div>
        </div>
      </section>

     
    </div>
  );
};

export default Home;
