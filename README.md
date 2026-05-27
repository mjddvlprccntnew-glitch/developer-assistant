# Developer Assistant

A full-stack web application built with modern technologies for assisting developers.

## Tech Stack

- **Frontend:** React 18 with TypeScript
- **UI Library:** Loon Bulma React (Bulma CSS)
- **Backend:** Express.js (Node.js)
- **Database:** MySQL with Sequelize ORM
- **Package Management:** npm

## Project Structure

```
developer-assistant/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── package.json
│   └── tsconfig.json
├── server/                 # Express backend
│   ├── src/
│   │   ├── config/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── controllers/
│   │   └── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
├── package.json            # Root package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MySQL database

### Installation

1. Clone the repository
```bash
git clone https://github.com/mjddvlprccntnew-glitch/developer-assistant.git
cd developer-assistant
```

2. Install all dependencies
```bash
npm run install-all
```

3. Set up environment variables
```bash
cp server/.env.example server/.env
# Edit server/.env with your database credentials
```

4. Create MySQL database
```sql
CREATE DATABASE developer_assistant;
```

### Development

Run both client and server concurrently:
```bash
npm run dev
```

Or run them separately:

**Terminal 1 - Frontend:**
```bash
npm run client
```

**Terminal 2 - Backend:**
```bash
npm run server
```

### Building

Build the frontend for production:
```bash
npm run build
```

## Available Routes

### Server Routes
- `GET /api/health` - Health check endpoint
- `GET /api/welcome` - Welcome message with API version

## Configuration

Create a `.env` file in the server directory with the following variables:

```env
PORT=5000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=3306
DB_NAME=developer_assistant
DB_USER=root
DB_PASSWORD=your_password
API_URL=http://localhost:5000
CLIENT_URL=http://localhost:3000
```

## Next Steps

Provide detailed requirements for:
- Database schema and models
- API endpoints and functionality
- UI components and pages
- Authentication/authorization
- Additional features

## Contributing

This project is ready for development. More details coming soon!

## License

MIT
