# MongoDB Schema

## Users Collection
- **_id**: ObjectId
- **username**: String
- **email**: String
- **password**: String (hashed)
- **firstName**: String
- **lastName**: String
- **createdAt**: Date
- **updatedAt**: Date

## Products Collection
- **_id**: ObjectId
- **name**: String
- **description**: String
- **price**: Number
- **category**: String
- **quantity**: Number
- **images**: Array of String (URLs)
- **createdAt**: Date
- **updatedAt**: Date

## Orders Collection
- **_id**: ObjectId
- **userId**: ObjectId (reference to Users collection)
- **products**: Array of Objects
  - **productId**: ObjectId (reference to Products collection)
  - **quantity**: Number
- **totalPrice**: Number
- **status**: String (e.g., "pending", "shipped", "delivered")
- **createdAt**: Date
- **updatedAt**: Date
