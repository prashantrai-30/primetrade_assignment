# PrimeTrade API - Postman Collection

This directory contains the Postman collection for testing the PrimeTrade REST API.

## Files

- **PrimeTrade-API.postman_collection.json** - Complete API collection with all endpoints

## How to Use

### 1. Import Collection in Postman

**Option A: Import from File**
1. Open Postman
2. Click "Import" (top left)
3. Select "File" tab
4. Choose `PrimeTrade-API.postman_collection.json`
5. Click "Import"

**Option B: Import from Link**
1. Open Postman
2. Click "Import" (top left)
3. Paste the file path or URL
4. Click "Import"

### 2. Set Environment Variables

In Postman, set these variables in the collection or environment:

```
base_url: http://localhost:5000/api/v1
token: (will be set after login)
task_id: (use actual task ID)
```

### 3. Test Authentication Endpoints

**Register User**
```
POST /api/v1/auth/register
Body: {
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
Response: {
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

**Login User**
```
POST /api/v1/auth/login
Body: {
  "email": "john@example.com",
  "password": "password123"
}
Response: {
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": { ... }
}
```

### 4. Copy Token for Protected Routes

After login/register:
1. Copy the `token` from response
2. Set `{{token}}` variable in Postman
3. Use in Authorization header: `Bearer {{token}}`

### 5. Test Task Endpoints

All task endpoints require JWT authentication.

**Get All Tasks**
```
GET /api/v1/tasks
Headers: Authorization: Bearer {{token}}
```

**Get Single Task**
```
GET /api/v1/tasks/{{task_id}}
Headers: Authorization: Bearer {{token}}
```

**Create Task**
```
POST /api/v1/tasks
Headers: Authorization: Bearer {{token}}
Body: {
  "title": "Task Title",
  "description": "Task Description",
  "priority": "high",
  "status": "pending"
}
```

**Update Task**
```
PUT /api/v1/tasks/{{task_id}}
Headers: Authorization: Bearer {{token}}
Body: {
  "title": "Updated Title",
  "description": "Updated Description",
  "priority": "medium",
  "status": "in-progress"
}
```

**Delete Task**
```
DELETE /api/v1/tasks/{{task_id}}
Headers: Authorization: Bearer {{token}}
```

## Priority Values
- `low`
- `medium`
- `high`

## Status Values
- `pending`
- `in-progress`
- `completed`

## Response Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized (invalid/missing token)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found
- `500` - Server Error

## Environment Setup

### Local Development
```
base_url: http://localhost:5000/api/v1
```

### Production
```
base_url: https://your-production-api.com/api/v1
```

## Tips

1. **First Request**: Register a new user to get a token
2. **Copy Token**: After login, copy token and set it in Postman
3. **Test Each Endpoint**: Use the collection to test all endpoints
4. **Check Response**: Verify status codes and response data
5. **Error Handling**: Check error messages for debugging

## Example Workflow

1. **Register**: POST `/auth/register`
   - Get token and user data

2. **Create Task**: POST `/tasks`
   - Use token from register
   - Create a new task

3. **Get Tasks**: GET `/tasks`
   - List all tasks for user

4. **Update Task**: PUT `/tasks/{id}`
   - Update task details

5. **Delete Task**: DELETE `/tasks/{id}`
   - Remove task

## Troubleshooting

**401 Unauthorized**
- Token is missing or expired
- Copy fresh token from login/register response

**400 Bad Request**
- Invalid request body
- Check required fields

**404 Not Found**
- Task ID doesn't exist
- User doesn't own the task

**500 Server Error**
- Check backend server logs
- Verify MongoDB connection

## For Evaluators

This collection is designed to make API testing easy:
- All endpoints included
- Sample data provided
- Authentication flow documented
- Variable usage shown
- Error scenarios covered

Simply import and start testing!
