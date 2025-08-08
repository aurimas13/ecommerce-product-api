# E-commerce Product API - Backend Developer Test

## Project Structure
```
ecommerce/
├── api/                    # Existing API (port 4001)
├── backend/                # New Product API (port 5001)
│   ├── server.js          # Express server with product endpoints
│   ├── package.json       # Dependencies and scripts
│   └── package-lock.json  # Lock file
├── public/                # React public assets
├── src/                   # React frontend source
├── .gitignore
├── package.json           # Main project package.json
└── README.md              # Original project README
```

## Tech Stack
- **Node.js** (v22.7.0) - JavaScript runtime
- **Express.js** (v4.18.2) - Web framework for building RESTful APIs
- **CORS** (v2.8.5) - Cross-Origin Resource Sharing middleware

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Steps to Run

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/ecommerce-product-api.git
cd ecommerce
```

2. **Install and run the Product API**
```bash
cd backend
npm install
npm start
```

The API server will start on `http://localhost:5001`

3. **Run the React frontend (optional)**
```bash
# In a new terminal, from the ecommerce root directory
npm install
npm run client
```

## API Documentation

### Base URL
```
http://localhost:5001
```

### Endpoints

#### 1. GET `/products`
Returns a list of all products.

**Response:**
```json
[
  {
    "id": 1,
    "name": "Classic T-Shirt",
    "category": "Apparel",
    "price": 19.99,
    "stock": 100,
    "description": "Comfortable cotton t-shirt"
  },
  ...
]
```

#### 2. GET `/products/:id`
Returns a single product by ID.

**Parameters:**
- `id` (path parameter) - Product ID

**Response:**
```json
{
  "id": 1,
  "name": "Classic T-Shirt",
  "category": "Apparel",
  "price": 19.99,
  "stock": 100,
  "description": "Comfortable cotton t-shirt"
}
```

**Error Response (404):**
```json
{
  "error": "Product not found"
}
```

#### 3. GET `/products?category={category}`
Filters products by category.

**Query Parameters:**
- `category` - Category name (e.g., "Apparel", "Footwear", "Accessories")

**Response:**
```json
[
  {
    "id": 1,
    "name": "Classic T-Shirt",
    "category": "Apparel",
    "price": 19.99,
    "stock": 100,
    "description": "Comfortable cotton t-shirt"
  }
]
```

#### 4. POST `/products` (Bonus)
Creates a new product.

**Request Body:**
```json
{
  "name": "Product Name",
  "category": "Category",
  "price": 29.99,
  "stock": 50,
  "description": "Optional description"
}
```

**Required Fields:**
- `name` (string)
- `category` (string)
- `price` (number, must be positive)
- `stock` (number, must be non-negative)

**Optional Fields:**
- `description` (string)

**Success Response (201):**
```json
{
  "id": 6,
  "name": "Product Name",
  "category": "Category",
  "price": 29.99,
  "stock": 50,
  "description": "Optional description"
}
```

**Error Response (400):**
```json
{
  "error": "Missing required fields: name, category, price, and stock are required"
}
```

## Sample API Requests

### Using cURL

```bash
# Get all products
curl http://localhost:5001/products

# Get product by ID
curl http://localhost:5001/products/1

# Filter by category
curl "http://localhost:5001/products?category=Apparel"

# Create new product
curl -X POST http://localhost:5001/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Winter Jacket",
    "category": "Apparel",
    "price": 89.99,
    "stock": 25,
    "description": "Warm winter jacket"
  }'
```

### Using Postman

1. **GET All Products**
   - Method: `GET`
   - URL: `http://localhost:5001/products`

2. **GET Product by ID**
   - Method: `GET`
   - URL: `http://localhost:5001/products/1`

3. **Filter by Category**
   - Method: `GET`
   - URL: `http://localhost:5001/products`
   - Query Params: `category = Apparel`

4. **Create Product**
   - Method: `POST`
   - URL: `http://localhost:5001/products`
   - Headers: `Content-Type: application/json`
   - Body (raw JSON):
   ```json
   {
     "name": "New Product",
     "category": "Apparel",
     "price": 49.99,
     "stock": 100
   }
   ```

## Test Data

The API comes with 5 pre-loaded products:

1. **Classic T-Shirt** - Apparel, $19.99
2. **Running Shoes** - Footwear, $79.99
3. **Denim Jeans** - Apparel, $49.99
4. **Laptop Backpack** - Accessories, $39.99
5. **Hoodie** - Apparel, $34.99

## Available Categories
- Apparel
- Footwear
- Accessories

## Development Notes

- The API runs on port 5001 to avoid conflicts with the existing API (port 4001) and common development servers
- CORS is enabled to allow cross-origin requests from the React frontend
- Data is stored in-memory (not persistent between server restarts)
- Input validation is implemented for the POST endpoint

## Author
Backend Developer Test Submission

## License
ISC