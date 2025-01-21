import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  const exchangeRate = 80; // 1 USD = 80 INR (example rate)
  
  const spareParts = [
    {
      partNumber: 'BP001-23',
      name: 'Brake Pad',
      price: 50, // Price in USD
      imageUrl: 'https://5.imimg.com/data5/GM/EQ/MY-29628551/zen-brake-pads-500x500.jpg',
    },
    {
      partNumber: 'CB002-19',
      name: 'Car Battery',
      price: 120,
      imageUrl: 'https://www.varta-automotive.com/images/default-source/product-series/blue-dynamic---560408054_h5_l2.webp?sfvrsn=5f6f469f_29',
    },
    {
      partNumber: 'HL003-18',
      name: 'Headlight',
      price: 80,
      imageUrl: 'https://5.imimg.com/data5/KW/BB/LD/SELLER-7700072/car-headlight.jpg',
    },
    {
      partNumber: 'TS004-22',
      name: 'Tire Set',
      price: 200,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTujeErHpg9I1L6hPvBhYPwEXTWWxej9pU4GA&s',
    },
    {
      partNumber: 'FP005-21',
      name: 'Fuel Pump',
      price: 150,
      imageUrl: 'https://w7.pngwing.com/pngs/933/20/png-transparent-car-fuel-pump-jmenovite-nap%C4%9Bti-fiat-car-car-transport-auto-part.png',
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Car Spare Parts</h1>
      <ul style={styles.list}>
        {spareParts.map((part) => (
          <li key={part.partNumber} style={styles.listItem}>
            <img src={part.imageUrl} alt={part.name} style={styles.image} />
            <h2 style={styles.title}>{part.name}</h2>
            <p style={styles.details}>
              <strong>Part No:</strong> {part.partNumber}
            </p>
            <p style={styles.details}>
              <strong>Price:</strong> ₹{(part.price * exchangeRate).toFixed(2)}
            </p>
            <div style={styles.buttonContainer}>
              <button style={styles.button}>Add to Cart</button>
              <Link to={`/product/${part.partNumber}`} style={styles.link}>
                View Details
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Inline CSS
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    textAlign: 'center',
  },
  header: {
    color: '#333',
    fontSize: '2rem',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  listItem: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '15px',
    width: '250px',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  title: {
    fontSize: '1.2rem',
    margin: '10px 0',
    color: '#333',
  },
  details: {
    fontSize: '1rem',
    margin: '5px 0',
    color: '#555',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10px',
  },
  button: {
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  link: {
    textDecoration: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '10px 15px',
    borderRadius: '5px',
    fontSize: '0.9rem',
    transition: 'background-color 0.3s ease',
  },
};

export default Product;
