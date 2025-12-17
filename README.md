# AgentMira - Real Estate Chatbot

A full-stack real estate chatbot application built with React, NestJS, and MongoDB that helps users find properties based on their preferences.

## Features

- **Interactive Chatbot**: Natural language property search
- **Smart Filtering**: Search by location, price range, bedrooms, bathrooms
- **Property Management**: Save and manage favorite properties
- **Real-time Search**: Dynamic property filtering
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

### Frontend
- React 18 with TypeScript
- Redux Toolkit for state management
- Axios for API calls
- CSS3 for styling

### Backend
- NestJS with TypeScript
- MongoDB with Mongoose
- RESTful API architecture
- Data seeding from JSON sources

### Database
- MongoDB Atlas
- Property and SavedProperty collections

## Project Structure

```
AgentMira-Chatbot/
├── backend/
│   ├── src/
│   │   ├── properties/
│   │   │   ├── dto/
│   │   │   ├── property.schema.ts
│   │   │   ├── properties.controller.ts
│   │   │   ├── properties.service.ts
│   │   │   └── properties.module.ts
│   │   ├── saved-properties/
│   │   │   ├── saved-property.schema.ts
│   │   │   ├── saved-properties.controller.ts
│   │   │   ├── saved-properties.service.ts
│   │   │   └── saved-properties.module.ts
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatBot/
│   │   │   └── PropertyCard/
│   │   ├── store/
│   │   │   ├── slices/
│   │   │   └── index.ts
│   │   ├── services/
│   │   ├── types/
│   │   └── App.tsx
│   └── package.json
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run start:dev
```

The backend will run on `http://localhost:3001`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## Usage

1. Start both backend and frontend servers
2. Open your browser to `http://localhost:3000`
3. Interact with the chatbot using natural language:
   - "Show me 3 bedroom apartments in New York under $500k"
   - "Find properties in Miami with 2 bathrooms"
   - "I want a house in Los Angeles"

## API Endpoints

### Properties
- `GET /properties` - Get all properties
- `GET /properties/search` - Search properties with filters

### Saved Properties
- `POST /saved-properties` - Save a property
- `GET /saved-properties` - Get saved properties for a user
- `DELETE /saved-properties/:id` - Remove saved property

## Data Sources

The application merges data from three JSON sources:
1. **Property Basics**: ID, title, price, location
2. **Property Characteristics**: Bedrooms, bathrooms, size, amenities
3. **Property Images**: Image URLs

## Deployment

### Backend Deployment
- Deploy to platforms like Heroku, AWS, or DigitalOcean
- Ensure MongoDB connection string is configured

### Frontend Deployment
- Build the project: `npm run build`
- Deploy to Vercel, Netlify, or GitHub Pages
- Update API base URL for production

## Future Enhancements

- AI-powered natural language processing
- Property comparison feature
- Real-time notifications
- Advanced filtering options
- User authentication
- Property recommendations

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
# agent-mira
