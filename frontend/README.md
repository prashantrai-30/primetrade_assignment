# Frontend UI - PrimeTrade

A modern React/Next.js frontend for the PrimeTrade REST API featuring user authentication, dashboard, and task management.

## Features

- ✅ User registration & login
- ✅ JWT authentication with token management
- ✅ Protected dashboard
- ✅ Task CRUD operations (Create, Read, Update, Delete)
- ✅ Responsive design with Tailwind CSS
- ✅ Error handling & validation
- ✅ Loading states
- ✅ Auto-redirect based on auth status

## Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **Context API** - State management

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api/v1
```

## Running the Application

Development mode:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# http://localhost:3000
```

## Pages

- **Login** (`/login`) - User authentication
- **Register** (`/register`) - New user registration
- **Dashboard** (`/dashboard`) - View all tasks
- **Create Task** (`/tasks/create`) - Create new task
- **Edit Task** (`/tasks/[id]`) - Edit existing task

## Authentication

- JWT token-based authentication
- Automatic redirect to login if not authenticated
- Token persisted in localStorage
- Auto-logout on token expiration (401 response)

## Deployment

### Vercel (Recommended)
```bash
npm run build
vercel
```

### Build for Production
```bash
npm run build
npm start
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

MIT
