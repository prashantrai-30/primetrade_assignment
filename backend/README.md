# Backend API - PrimeTrade

A secure, scalable REST API built with Express.js and MongoDB featuring JWT authentication, role-based access control, and CRUD operations.

## Features

- ✅ User registration & login with JWT authentication
- ✅ Password hashing with bcryptjs
- ✅ Role-based access control (user vs admin)
- ✅ CRUD API for tasks
- ✅ Protected routes with middleware
- ✅ Comprehensive error handling
- ✅ MongoDB integration with Mongoose

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Update `.env` with your MongoDB URI and JWT secret:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/primetrade
JWT_SECRET=your_secret_key_here
JWT_EXPIRE=7d
```

## Running the Server

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### Authentication

**POST** `/api/v1/auth/register`
- Register a new user
- Body: `{ name, email, password }`
- Returns: User object & JWT token

**POST** `/api/v1/auth/login`
- Login user
- Body: `{ email, password }`
- Returns: User object & JWT token

### Tasks (Protected Routes)

All task endpoints require JWT authentication in header:
```
Authorization: Bearer <token>
```

**GET** `/api/v1/tasks`
- Get all tasks for logged-in user
- Returns: Array of tasks

**GET** `/api/v1/tasks/:id`
- Get single task by ID
- Returns: Task object

**POST** `/api/v1/tasks`
- Create new task
- Body: `{ title, description, priority, status }`
- Returns: Created task object

**PUT** `/api/v1/tasks/:id`
- Update task
- Body: `{ title, description, priority, status }`
- Returns: Updated task object

**DELETE** `/api/v1/tasks/:id`
- Delete task
- Returns: Deleted task object

## Project Structure

```
backend/
├── src/
│   ├── config/          # Configuration files
│   ├── controllers/     # Route controllers
│   ├── database/        # Database connection
│   ├── middleware/      # Express middleware
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   ├── utils/           # Helper functions
│   └── validators/      # Input validation
├── logs/                # Application logs
├── docs/                # API documentation
├── index.js             # Entry point
├── package.json         # Dependencies
└── .env                 # Environment variables
```

## Security Features

- JWT token-based authentication
- Password hashing with bcryptjs (10 salt rounds)
- CORS enabled for frontend
- Input validation
- Protected routes with middleware
- User data isolation (users can only access their own tasks)

## Error Handling

The API returns structured error responses:

```json
{
  "message": "Error description"
}
```

Status codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Server Error

## Database Schema

### User Model
- `name` (String, required)
- `email` (String, required, unique)
- `password` (String, required, hashed)
- `role` (String, enum: user/admin)
- `isActive` (Boolean, default: true)
- `createdAt` (Date)
- `updatedAt` (Date)

### Task Model
- `title` (String, required)
- `description` (String)
- `status` (String, enum: pending/in-progress/completed)
- `priority` (String, enum: low/medium/high)
- `userId` (ObjectId, ref: User)
- `createdAt` (Date)
- `updatedAt` (Date)

## Scalability Considerations

1. **Load Balancing**: Deploy multiple API instances with a load balancer
2. **Caching**: Implement Redis for token blacklist and session caching
3. **Database**: Use MongoDB sharding for horizontal scaling
4. **Microservices**: Split into separate services (auth, tasks, users)
5. **Rate Limiting**: Add express-rate-limit to prevent abuse
6. **Message Queue**: Use RabbitMQ/Kafka for async operations
7. **CDN**: Cache static assets on CDN
8. **Monitoring**: Integrate monitoring (DataDog, New Relic)

## Testing

Coming soon...

## Deployment

### Deployment Ready Checklist
- ✅ Environment variables configured
- ✅ MongoDB connection string set
- ✅ JWT secret key configured
- ✅ CORS configured for frontend domain
- ✅ Error handling implemented
- ✅ Input validation added

### Deployment Platforms
- Heroku
- AWS (EC2, Elastic Beanstalk)
- Railway
- Render
- DigitalOcean

## Contributing

1. Create a feature branch
2. Make changes and test
3. Commit with clear messages
4. Push and create a PR

## License

MIT
