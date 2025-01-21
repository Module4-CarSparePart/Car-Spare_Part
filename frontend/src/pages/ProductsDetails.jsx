import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Simulate fetching data (replace with actual API call)
const fetchProductDetails = (partNumber) => {
  const exchangeRate = 80; // 1 USD = 80 INR
  const spareParts = [
    {
      partNumber: 'BP001-23',
      name: 'Brake Pad',
      description: 'High-performance brake pad designed for a smooth and reliable stop.',
      category: 'Brakes',
      brand: 'Zen',
      price: 50, // Price in USD
      stockQuantity: 100,
      supplier: { name: 'Zen Supplier', contact: '123-456-7890' },
      imageUrl: 'https://5.imimg.com/data5/GM/EQ/MY-29628551/zen-brake-pads-500x500.jpg',
      compatibility: [
        { make: 'Toyota', model: 'Corolla', year: 2018 },
        { make: 'Honda', model: 'Civic', year: 2017 },
      ],
    },
    {
      partNumber: 'CB002-19',
      name: 'Car Battery',
      description: 'Durable and reliable car battery to keep your vehicle running smoothly.',
      category: 'Electrical',
      brand: 'Varta',
      price: 120,
      stockQuantity: 50,
      supplier: { name: 'Varta Supplier', contact: '987-654-3210' },
      imageUrl: 'https://www.varta-automotive.com/images/default-source/product-series/blue-dynamic---560408054_h5_l2.webp?sfvrsn=5f6f469f_29',
      compatibility: [
        { make: 'Ford', model: 'Focus', year: 2020 },
        { make: 'BMW', model: '320i', year: 2019 },
      ],
    },
    {
      partNumber: 'HL003-18',
      name: 'Headlight',
      description: 'Bright and durable headlight designed for optimal visibility in all driving conditions.',
      category: 'Lighting',
      brand: 'AutoBright',
      price: 80,
      stockQuantity: 75,
      supplier: { name: 'AutoBright Supplier', contact: '789-123-4560' },
      imageUrl: 'https://5.imimg.com/data5/KW/BB/LD/SELLER-7700072/car-headlight.jpg',
      compatibility: [
        { make: 'Toyota', model: 'Camry', year: 2019 },
        { make: 'Honda', model: 'Accord', year: 2020 },
      ],
    },
    {
      partNumber: 'TS004-22',
      name: 'Tire Set',
      description: 'Durable all-season tire set providing excellent grip and long-lasting performance.',
      category: 'Tires',
      brand: 'Michelin',
      price: 200,
      stockQuantity: 50,
      supplier: { name: 'Michelin Supplier', contact: '555-666-7777' },
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTujeErHpg9I1L6hPvBhYPwEXTWWxej9pU4GA&s',
      compatibility: [
        { make: 'Chevrolet', model: 'Impala', year: 2019 },
        { make: 'Nissan', model: 'Altima', year: 2021 },
      ],
    },
    {
      partNumber: 'FP005-21',
      name: 'Fuel Pump',
      description: 'Reliable fuel pump designed to enhance engine performance and fuel efficiency.',
      category: 'Engine',
      brand: 'Bosch',
      price: 150,
      stockQuantity: 60,
      supplier: { name: 'Bosch Supplier', contact: '777-888-9999' },
      imageUrl: 'https://w7.pngwing.com/pngs/933/20/png-transparent-car-fuel-pump-jmenovite-nap%C4%9Bti-fiat-car-car-transport-auto-part.png',
      compatibility: [
        { make: 'Honda', model: 'Accord', year: 2021 },
        { make: 'Toyota', model: 'Camry', year: 2020 },
      ],
    },
    // Add other parts here...
  ];

  // Find the product by part number and convert price to INR
  const product = spareParts.find((product) => product.partNumber === partNumber);
  if (product) {
    return { ...product, price: product.price * exchangeRate }; // Convert price to INR
  }
  return null;
};

const ProductDetails = () => {
  const { partNumber } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setLoading(true);
    const fetchData = () => {
      const productData = fetchProductDetails(partNumber);
      if (productData) {
        setProduct(productData);
        setLoading(false);
      } else {
        setLoading(false);
        setProduct(null);
      }
    };
    fetchData();
  }, [partNumber]);

  const handleAddToCart = () => {
    console.log(`Added to cart: ${quantity} x ${product.name}`);
    alert(`Added ${quantity} x ${product.name} to cart.`);
  };

  const handleBuyNow = () => {
    console.log(`Buying now: ${quantity} x ${product.name}`);
    alert(`Purchased ${quantity} x ${product.name}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>{product.name}</h1>
      <div style={styles.productContainer}>
        <img src={product.imageUrl} alt={product.name} style={styles.image} />
        <div style={styles.detailsContainer}>
          <p><strong>Part No:</strong> {product.partNumber}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Price:</strong> ₹{product.price.toFixed(2)}</p>
          <p><strong>Stock Quantity:</strong> {product.stockQuantity}</p>
          <p>
            <strong>Supplier:</strong> {product.supplier.name} (Contact: {product.supplier.contact})
          </p>
          <div>
  <h3 style={{ color: 'black', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '10px' }}>
    Compatibility:
  </h3>
  <ul>
    {product.compatibility.map((item, index) => (
      <li key={index}>
        {item.make} {item.model} ({item.year})
      </li>
    ))}
  </ul>
</div>


          <div style={styles.actions}>
            <label>
              Quantity: 
              <input
                type="number"
                value={quantity}
                min="1"
                max={product.stockQuantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                style={styles.quantityInput}
              />
            </label>
            <button onClick={handleAddToCart} style={styles.button}>Add to Cart</button>
            <button onClick={handleBuyNow} style={styles.buyButton}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

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
  productContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  image: {
    width: '300px',
    height: 'auto',
    borderRadius: '5px',
  },
  detailsContainer: {
    maxWidth: '600px',
    textAlign: 'left',
    fontSize: '1.1rem',
    lineHeight: '1.6',
  },
  actions: {
    marginTop: '20px',
  },
  quantityInput: {
    width: '60px',
    marginLeft: '10px',
    marginRight: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  buyButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ProductDetails;
