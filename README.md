# NefroFood - Food List App

A web application built with Next.js, React, Tailwind CSS, and Sequelize for listing foods with mineral content indicators.

## Features

- Searchable list of foods
- Traffic light indicators for potassium (K), sodium (Na), and phosphorus (P) levels
- SQLite database for local development, MySQL for production

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run database migrations to create tables and seed data:
   ```bash
   npx sequelize-cli db:migrate
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database

The app uses Sequelize ORM with SQLite for development and MySQL for production.

- Local: SQLite database file `database.sqlite`
- Production: Configure environment variables for MySQL

## Thresholds

- **Potassium (K)**: 0–150 (green), 151–299 (yellow), ≥300 (red)
- **Sodium (Na)**: 0–599 (green), ≥600 (red)
- **Phosphorus (P)**: 0–90 (green), 91–299 (yellow), ≥300 (red)

## Deployment

Deploy to Vercel by connecting your GitHub repository. Ensure to set up MySQL database for production and configure environment variables.

## Technologies

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Sequelize ORM
- SQLite / MySQL
