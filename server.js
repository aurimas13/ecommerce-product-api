const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Test data for products
const products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    category: "Apparel",
    price: 19.99,
    stock: 100,
    description: "Comfortable cotton t-shirt"
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Footwear",
    price: 79.99,
    stock: 50,
    description: "Lightweight running shoes"
  },
  {
    id: 3,
    name: "Denim Jeans",
    category: "Apparel",
    price: 49.99,
    stock: 75,
    description: "Classic fit denim jeans"
  },
  {
    id: 4,
    name: "Laptop Backpack",
    category: "Accessories",
    price: 39.99,
    stock: 30,
    description: "Water-resistant laptop backpack"
  },
  {
    id: 5,
    name: "Hoodie",
    category: "Apparel",
    price: 34.99,
    stock: 60,
    description: "Warm and cozy hoodie"
  }
];

// GET all products or filter by category
app.get('/products', (req, res) => {
  const { category } = req.query;
  
  if (category) {
    const filteredProducts = products.filter(
      product => product.category.toLowerCase() === category.toLowerCase()
    );
    return res.json(filteredProducts);
  }
  
  res.json(products);
});

// GET single product by ID
app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  
  res.json(product);
});

// POST new product (bonus)
app.post('/products', (req, res) => {
  const { name, category, price, stock, description } = req.body;
  
  // Validation
  if (!name || !category || !price || stock === undefined) {
    return res.status(400).json({ 
      error: 'Missing required fields: name, category, price, and stock are required' 
    });
  }
  
  if (typeof price !== 'number' || price <= 0) {
    return res.status(400).json({ error: 'Price must be a positive number' });
  }
  
  if (typeof stock !== 'number' || stock < 0) {
    return res.status(400).json({ error: 'Stock must be a non-negative number' });
  }
  
  const newProduct = {
    id: products.length + 1,
    name,
    category,
    price,
    stock,
    description: description || ''
  };
  
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(PORT, () => {
  console.log(`Backend API running on http://localhost:${PORT}`);
});