# A & A Company Website - Local Development Setup Guide

## Overview

This is a full-stack web application built with **React 19**, **TypeScript**, **Tailwind CSS 4**, **Express**, **tRPC**, and **MySQL**. The website features a modern industrial design with animations, database-backed forms, and quote request functionality.

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

1. **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
2. **pnpm** (v8 or higher) - Install globally: `npm install -g pnpm`
3. **Git** - [Download](https://git-scm.com/)
4. **MySQL Server** (v8.0+) - [Download](https://dev.mysql.com/downloads/mysql/) or use a cloud service
5. **VS Code** - [Download](https://code.visualstudio.com/)

### Recommended VS Code Extensions

- **ES7+ React/Redux/React-Native snippets** (dsznajder.es7-react-js-snippets)
- **Tailwind CSS IntelliSense** (bradlc.vscode-tailwindcss)
- **TypeScript Vue Plugin** (Vue)
- **Prettier - Code formatter** (esbenp.prettier-vscode)
- **Thunder Client** or **REST Client** (for API testing)

---

## Step 1: Extract and Open Project in VS Code

1. Extract the downloaded `aa-company-website` folder to your desired location
2. Open VS Code
3. Click **File → Open Folder** and select the `aa-company-website` directory
4. VS Code will recognize this as a TypeScript project

---

## Step 2: Install Dependencies

Open the integrated terminal in VS Code (**Ctrl + `** or **Cmd + `**) and run:

```bash
pnpm install
```

This will install all project dependencies including React, Express, tRPC, Tailwind CSS, and database libraries.

**Expected output:** You should see "✓ Packages in lockfile are up-to-date" or similar completion message.

---

## Step 3: Configure Environment Variables

1. In the project root, create a `.env.local` file (copy from `.env.example` if it exists)
2. Add the following environment variables:

```env
# Database Configuration
DATABASE_URL=mysql://username:password@localhost:3306/aa_company_db

# OAuth & Authentication (provided by Manus platform)
JWT_SECRET=your-secret-key-here
VITE_APP_ID=your-app-id
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://portal.manus.im

# Owner Information
OWNER_NAME=A & A Company
OWNER_OPEN_ID=your-owner-id

# Manus Built-in APIs
BUILT_IN_FORGE_API_URL=https://api.manus.im
BUILT_IN_FORGE_API_KEY=your-api-key
VITE_FRONTEND_FORGE_API_URL=https://api.manus.im
VITE_FRONTEND_FORGE_API_KEY=your-frontend-key

# Analytics (optional)
VITE_ANALYTICS_ENDPOINT=https://analytics.manus.im
VITE_ANALYTICS_WEBSITE_ID=your-website-id

# App Configuration
VITE_APP_TITLE=A & A Company
VITE_APP_LOGO=/logo.png
```

**Note:** For local development without Manus platform, you can use placeholder values. The database URL is the most critical.

---

## Step 4: Set Up Database

### Option A: Local MySQL (Recommended for Development)

1. Start your MySQL server
2. Create a new database:

```bash
mysql -u root -p
```

Then in MySQL:

```sql
CREATE DATABASE aa_company_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

3. Update your `.env.local` with the correct connection string:

```env
DATABASE_URL=mysql://root:your_password@localhost:3306/aa_company_db
```

### Option B: Cloud MySQL (e.g., AWS RDS, PlanetScale)

1. Create a MySQL database in your cloud provider
2. Get the connection string
3. Update `.env.local` with the cloud connection string

### Option C: Docker MySQL (Advanced)

If you have Docker installed, run:

```bash
docker run --name aa-company-mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=aa_company_db -p 3306:3306 -d mysql:8.0
```

Then use: `DATABASE_URL=mysql://root:root@localhost:3306/aa_company_db`

---

## Step 5: Initialize Database Schema

Run the database migration to create tables:

```bash
pnpm db:push
```

This command will:
- Generate migration files from your schema
- Apply migrations to the database
- Create tables: `users`, `contact_submissions`, `quote_requests`

**Expected output:** You should see migration confirmation messages.

---

## Step 6: Start the Development Server

Run the development server:

```bash
pnpm dev
```

**Expected output:**
```
[OAuth] Initialized with baseURL: https://api.manus.im
Server running on http://localhost:3000/
```

The application will be available at: **http://localhost:3000**

---

## Step 7: Access the Website

1. Open your browser and navigate to **http://localhost:3000**
2. You should see the A & A Company homepage with:
   - Hero section with animations
   - Navigation menu
   - Service overview
   - Call-to-action buttons

### Test the Forms

1. Navigate to **Contact Us** page
2. Fill out the contact form and submit
3. Check the database to verify the submission was saved:

```bash
mysql -u root -p aa_company_db
SELECT * FROM contact_submissions;
```

---

## Project Structure

```
aa-company-website/
├── client/                 # Frontend React application
│   ├── public/            # Static assets (images, favicon)
│   ├── src/
│   │   ├── pages/         # Page components (Home, About, Services, etc.)
│   │   ├── components/    # Reusable UI components
│   │   ├── lib/           # Utilities and helpers
│   │   ├── App.tsx        # Main app routing
│   │   ├── main.tsx       # React entry point
│   │   └── index.css      # Global styles
│   └── index.html         # HTML template
├── server/                # Backend Express server
│   ├── routers.ts         # tRPC API endpoints
│   ├── db.ts              # Database queries
│   └── _core/             # Core server infrastructure
├── drizzle/               # Database schema and migrations
│   ├── schema.ts          # Database table definitions
│   └── migrations/        # Migration files
├── shared/                # Shared types and constants
├── package.json           # Project dependencies
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite build configuration
└── drizzle.config.ts      # Drizzle ORM configuration
```

---

## Common Development Tasks

### Build for Production

```bash
pnpm build
```

This creates optimized production builds in the `dist/` folder.

### Run Tests

```bash
pnpm test
```

Runs all vitest unit tests.

### Format Code

```bash
pnpm format
```

Formats all code using Prettier.

### Check TypeScript

```bash
pnpm check
```

Checks for TypeScript errors without building.

---

## Troubleshooting

### Issue: "Cannot find module" errors

**Solution:** Run `pnpm install` again to ensure all dependencies are installed.

### Issue: Database connection fails

**Solution:** 
1. Verify MySQL is running: `mysql -u root -p` (should connect)
2. Check `.env.local` has correct `DATABASE_URL`
3. Ensure database exists: `mysql -u root -p -e "SHOW DATABASES;"`

### Issue: Port 3000 already in use

**Solution:** The dev server will automatically find the next available port. Check the terminal output for the actual URL.

### Issue: Vite HMR errors

**Solution:** Clear cache and restart:
```bash
rm -rf node_modules/.vite
pnpm dev
```

### Issue: TypeScript errors in VS Code

**Solution:** 
1. Click the TypeScript version in the bottom-right corner
2. Select "Use Workspace Version"
3. Reload VS Code

---

## API Endpoints

The backend exposes the following tRPC endpoints:

### Contact Form
- **Endpoint:** `POST /api/trpc/contact.submit`
- **Input:** `{ name, email, phone?, company?, subject, message }`
- **Response:** `{ success: boolean, message: string }`

### Quote Request
- **Endpoint:** `POST /api/trpc/quote.request`
- **Input:** `{ name, email, phone, company?, productCategory, productName, quantity, description? }`
- **Response:** `{ success: boolean, message: string }`

### Authentication
- **Endpoint:** `GET /api/trpc/auth.me`
- **Response:** Current user info or null

---

## Database Schema

### contact_submissions Table
```sql
CREATE TABLE contact_submissions (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(320) NOT NULL,
  phone VARCHAR(20),
  company VARCHAR(255),
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  status ENUM('new', 'read', 'responded') DEFAULT 'new',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### quote_requests Table
```sql
CREATE TABLE quote_requests (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(320) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  company VARCHAR(255),
  productCategory VARCHAR(100) NOT NULL,
  productName VARCHAR(255) NOT NULL,
  quantity INT NOT NULL,
  description TEXT,
  status ENUM('pending', 'quoted', 'ordered', 'completed') DEFAULT 'pending',
  quotedPrice VARCHAR(50),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

---

## Performance Tips

1. **Enable Tailwind CSS IntelliSense** in VS Code for faster development
2. **Use the React DevTools extension** to debug component rendering
3. **Monitor bundle size** with `pnpm build` and check the output
4. **Use Chrome DevTools** to profile animations and performance

---

## Next Steps

1. **Customize the content:** Edit pages in `client/src/pages/`
2. **Add new features:** Create new tRPC procedures in `server/routers.ts`
3. **Extend the database:** Add tables to `drizzle/schema.ts` and run `pnpm db:push`
4. **Deploy:** Follow Manus platform deployment instructions or use your preferred hosting

---

## Support & Resources

- **Manus Documentation:** https://help.manus.im
- **React Documentation:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com
- **tRPC:** https://trpc.io
- **Drizzle ORM:** https://orm.drizzle.team

---

## License

This project is proprietary to A & A Company. All rights reserved.

---

**Last Updated:** January 2026
**Project Version:** 1.0.0
