import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import Carousel CSS

const Home = () => {
  const categories = [
    {
      id: 1,
      name: "Engine Parts",
      image:
        "https://media.istockphoto.com/id/1212230930/photo/car-engine-parts.jpg?s=612x612&w=0&k=20&c=YCG4lzjxDYTFQQ-gOniW-r-Xl-th73hBOrcnvdiU274=",
    },
    {
      id: 2,
      name: "Braking System",
      image:
        "https://media.istockphoto.com/id/1193247877/photo/handsome-mechanic-in-uniform.jpg?s=612x612&w=0&k=20&c=ZDIuniZcHY0McW4Zc654glUrtTGa8A7U2X2enGM7_60=",
    },
    {
      id: 3,
      name: "Suspension & Steering",
      image:
        "https://media.istockphoto.com/id/1270395078/photo/car-front-axle-sports-car-front-suspension-automotive-industry-components.jpg?s=612x612&w=0&k=20&c=oZf__kDr3qIwfkK1WFgWwEOaVx7ULP4fcLWtAFY160g=",
    },
    {
      id: 4,
      name: "Electrical Parts",
      image:
        "https://thumbs.dreamstime.com/b/electrical-equipment-car-set-auto-parts-isolated-white-background-electrical-equipment-car-set-120666543.jpg",
    },
    {
      id: 5,
      name: "Body & Accessories",
      image:
        "https://c8.alamy.com/comp/T2BN4F/red-car-body-disassembled-and-many-vehicles-parts-3d-illustration-T2BN4F.jpg",
    },
    {
      id: 6,
      name: "Cooling System",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUwApiBGjXHVHh-_WI1fL5yLnZsevRDDYPng&s",
    },
  ];

  // Array of top car brands with their respective images
  const brands = [
    { name: "BMW", image: "https://awards.brandingforum.org/wp-content/uploads/2016/11/BMW-logo.jpg" },
    { name: "Audi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmKillt-hSS8Nr_NJOxpcqj060ryikzMcn-A&s" },
    { name: "Mercedes", image: "https://sm.mashable.com/t/mashable_in/photo/default/311ca245-d0ff-45f0-a3a4-454e1a845bd4_cxpv.1248.jpg" },
    { name: "Toyota", image: "https://www.toyotaofclermont.com/blogs/6088/wp-content/uploads/2024/10/Toyota-cars-1.jpg" },
    { name: "Honda", image: "https://bsmedia.business-standard.com/_media/bs/img/article/2021-08/18/full/1629298311-4741.jpg" },
    { name: "Ford", image: "https://secureyourtrademark.com/wp-content/uploads/2020/10/img-ford-logo.jpg" },
    { name: "Tesla", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Yz5_L4h9WyOIp29Lp87gIUNSQG4kaxMKBA&s" },
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
          className="absolute inset-0 bg-black opacity-60"
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
            className="relative bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Shop Now
          </Link>
        </motion.div>
      </header>

      {/* Categories Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Car Spare Part Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                className="p-4 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-700">
                  {category.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Brands Section */}
<section id="top-brands" className="py-16 bg-white">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">Top Car Brands</h2>
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      dynamicHeight={false}
      centerMode
      centerSlidePercentage={25}
      stopOnHover
      className="gap-6"
      renderArrowPrev={(clickHandler) => (
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white px-4 py-2 rounded-full z-10"
          onClick={clickHandler}
        >
          &lt;
        </button>
      )}
      renderArrowNext={(clickHandler) => (
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white px-4 py-2 rounded-full z-10"
          onClick={clickHandler}
        >
          &gt;
        </button>
      )}
    >
      {/* Brand Cards */}
      {brands.map((brand) => (
        <div
          key={brand.name}
          className="p-6 border rounded-lg shadow-md w-64"
        >
          <Link
            to={`/products?brand=${brand.name}`}
            className="block w-full h-full"
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-xl font-bold mt-4 mb-2">{brand.name}</h3>
            <p>Explore top quality parts for {brand.name} vehicles.</p>
          </Link>
        </div>
      ))}
    </Carousel>
  </div>
</section>


    </div>
  );
};

export default Home;
