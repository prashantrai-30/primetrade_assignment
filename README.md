# PrimeTrade - Backend Developer Intern Assignment

A complete full-stack web application featuring a secure, scalable REST API with JWT authentication and a modern React frontend for task management.

## Project Overview

This project demonstrates:
- ✅ **Secure Authentication** - JWT-based authentication with password hashing
- ✅ **Role-Based Access Control** - User and admin roles with protected routes
- ✅ **RESTful API** - Well-designed REST endpoints following best practices
- ✅ **Database Design** - MongoDB schema with proper relationships
- ✅ **Frontend Integration** - Modern Next.js UI consuming the APIs
- ✅ **Security Best Practices** - Input validation, CORS, JWT handling
- ✅ **Scalable Architecture** - Modular project structure ready for growth

## Tech Stack

### Backend
- **Node.js** & **Express.js** - Server framework
- **MongoDB** & **Mongoose** - Database
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin requests
- **Morgan** - HTTP logging

### Frontend
- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **Context API** - State management

## Project Structure

```
primetrade.ai/
├── backend/                 # Node.js/Express API
│   ├── src/
│   │   ├── controllers/     # Route handlers
│   │   ├── models/          # MongoDB schemas
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Auth, CORS, etc
│   │   ├── database/        # DB connection
│   │   └── ...
│   ├── index.js            # Server entry point
│   ├── package.json
│   └── .env                # Environment config
│
├── frontend/                # Next.js React app
│   ├── app/                # Pages and routes
│   ├── context/            # Auth context
│   ├── services/           # API client
│   ├── public/             # Static assets
│   ├── package.json
│   └── .env.local          # Environment config
│
└── docs/                   # Documentation
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud)

### Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret

# Start development server
npm run dev
```

Server runs on: `http://localhost:5000/api/v1`

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Configure environment (already set)
# .env.local has NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api/v1

# Start development server
npm run dev
```

App runs on: `http://localhost:3000`

## API Documentation

### Authentication Endpoints

**Register**
```
POST /api/v1/auth/register
Body: { name, email, password }
Returns: { token, user }
```

**Login**
```
POST /api/v1/auth/login
Body: { email, password }
Returns: { token, user }
```

### Task Endpoints (Protected)

All task endpoints require JWT token:
```
Authorization: Bearer <token>
```

**Get All Tasks**
```
GET /api/v1/tasks
Returns: { data: [tasks] }
```

**Get Single Task**
```
GET /api/v1/tasks/:id
Returns: { data: task }
```

**Create Task**
```
POST /api/v1/tasks
Body: { title, description, priority, status }
Returns: { data: task }
```

**Update Task**
```
PUT /api/v1/tasks/:id
Body: { title, description, priority, status }
Returns: { data: task }
```

**Delete Task**
```
DELETE /api/v1/tasks/:id
Returns: { data: task }
```

## Features

### Backend Features
- User registration with validation
- Secure login with JWT tokens
- Password hashing with bcryptjs
- Role-based access (user/admin)
- Task CRUD operations
- Protected routes with JWT middleware
- Comprehensive error handling
- CORS enabled for frontend

### Frontend Features
- User registration form
- Login form
- Protected dashboard
- Task list view
- Create task form
- Edit task form
- Delete task with confirmation
- Auto-redirect based on auth
- Error handling and validation
- Loading states
- Responsive design

## Security Features

- ✅ JWT token authentication
- ✅ Password hashing (bcryptjs with 10 salt rounds)
- ✅ Input validation
- ✅ Protected routes
- ✅ CORS configuration
- ✅ Token expiration (7 days)
- ✅ Error message sanitization
- ✅ User data isolation

## Database Schema

### Users Collection
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  role: String (enum: user/admin, default: user),
  isActive: Boolean (default: true),
  createdAt: Date,
  updatedAt: Date
}
```

### Tasks Collection
```javascript
{
  title: String (required),
  description: String,
  status: String (enum: pending/in-progress/completed),
  priority: String (enum: low/medium/high),
  userId: ObjectId (ref: User),
  createdAt: Date,
  updatedAt: Date
}
```

## Environment Variables

### Backend (.env)
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/primetrade
JWT_SECRET=your_secret_key_here
JWT_EXPIRE=7d
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api/v1
```

## Scalability & Deployment

### Current Architecture
- Single Node.js instance
- Single MongoDB instance
- Stateless API design

### Scaling Strategies

1. **Load Balancing**
   - Deploy multiple API instances
   - Use Nginx or cloud load balancer

2. **Database Scaling**
   - MongoDB sharding for horizontal scaling
   - Replication for high availability

3. **Caching**
   - Redis for token blacklist
   - Cache frequently accessed data

4. **Microservices**
   - Split into separate services (auth, tasks, users)
   - API gateway for routing

5. **Message Queue**
   - RabbitMQ/Kafka for async operations
   - Email notifications, background jobs

6. **CDN**
   - Cache static frontend assets
   - Improve global performance

7. **Monitoring**
   - Application monitoring (DataDog, New Relic)
   - Error tracking (Sentry)
   - Logging (ELK stack)

### Deployment Checklist
- [ ] Environment variables configured
- [ ] Database connection tested
- [ ] JWT secrets are strong and unique
- [ ] CORS configured for production domain
- [ ] Error handling tested
- [ ] Input validation working
- [ ] Frontend build successful
- [ ] API endpoints documented
- [ ] Security headers configured
- [ ] Rate limiting implemented

### Deployment Platforms

**Backend**
- Heroku
- AWS (EC2, Elastic Beanstalk)
- DigitalOcean
- Railway
- Render

**Frontend**
- Vercel (recommended)
- Netlify
- AWS Amplify
- Firebase Hosting

## Performance Optimization

### Backend
- Use MongoDB indexes
- Implement response compression
- Add API rate limiting
- Pagination for list endpoints
- Cache expensive queries

### Frontend
- Code splitting (Next.js automatic)
- Image optimization
- Font optimization
- CSS minification
- Lazy loading
- Caching strategies

## Testing

### Backend Testing (TODO)
- Unit tests for controllers
- Integration tests for API
- Database tests
- Authentication tests

### Frontend Testing (TODO)
- Component tests
- Integration tests
- E2E tests
- Performance tests

## Git Repository Setup

```bash
# Initialize git
git init

# Create .gitignore
# Add: node_modules, .env, dist, build, .next, etc

# Initial commit
git add .
git commit -m "Initial commit: Backend API and Frontend UI"

# Push to GitHub
git remote add origin <your-repo-url>
git push -u origin main
```

## Development Workflow

1. **Backend Development**
   ```bash
   cd backend
   npm run dev
   ```

2. **Frontend Development**
   ```bash
   cd frontend
   npm run dev
   ```

3. **API Testing**
   - Use Postman or REST Client
   - Test endpoints with different inputs
   - Verify error handling

4. **Frontend Testing**
   - Test in browser (http://localhost:3000)
   - Test authentication flow
   - Test CRUD operations
   - Test responsive design

## Troubleshooting

### MongoDB Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:27017

Solution: 
- Ensure MongoDB is running
- Check MONGODB_URI in .env
- Verify connection string format
```

### JWT Token Errors
```
Error: Invalid token

Solution:
- Verify JWT_SECRET in .env matches
- Check token expiration
- Ensure token is included in headers
```

### CORS Errors
```
Error: Access to XMLHttpRequest blocked by CORS

Solution:
- Ensure backend CORS is enabled
- Check frontend API_BASE_URL
- Verify URLs match (http vs https)
```

### Frontend Import Errors
```
Error: Module not found

Solution:
- Check file paths
- Verify @/ alias in tsconfig.json
- Restart dev server
```

## Next Steps

1. Set up MongoDB Atlas (cloud database)
2. Add input sanitization (express-validator)
3. Implement rate limiting (express-rate-limit)
4. Add email verification (nodemailer)
5. Implement password reset
6. Add unit and integration tests
7. Set up CI/CD pipeline
8. Deploy to cloud platforms
9. Add API versioning
10. Implement comprehensive logging

## Resources

- [Node.js Documentation](https://nodejs.org/docs)
- [Express.js Documentation](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [JWT Introduction](https://jwt.io/introduction)

## Support

For issues or questions:
1. Check existing documentation
2. Review error messages carefully
3. Check backend logs
4. Check browser console (frontend)
5. Verify environment variables

## License

MIT

---

**Created for Backend Developer Intern Assignment**
Demonstrating secure, scalable API design and modern full-stack development practices.
