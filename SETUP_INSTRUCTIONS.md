# A & A Company Website - Complete Setup Guide

## 📋 Table of Contents
1. [System Requirements](#system-requirements)
2. [Installation Steps](#installation-steps)
3. [Development](#development)
4. [Troubleshooting](#troubleshooting)
5. [Deployment](#deployment)

---

## System Requirements

### Minimum Requirements
- **Node.js**: 22 LTS or higher
- **npm**: 10.0.0 or higher (or pnpm 9.0.0+)
- **RAM**: 4GB
- **Disk Space**: 2GB

### Recommended Setup
- **Node.js**: 22.13.0 LTS (latest stable)
- **pnpm**: 10.0.0+ (faster than npm)
- **RAM**: 8GB+
- **Disk Space**: 5GB+

---

## Installation Steps

### Step 1: Verify Node.js Installation

Open terminal/command prompt and run:
```bash
node --version
npm --version
```

You should see:
```
v22.13.0 (or higher)
10.0.0 (or higher)
```

If not installed, download from https://nodejs.org/

### Step 2: Install pnpm (Optional but Recommended)

```bash
npm install -g pnpm
pnpm --version
```

### Step 3: Extract Project

Extract the `aa-company-pro.zip` file to your desired location.

### Step 4: Navigate to Project

```bash
cd aa-company-pro
```

### Step 5: Install Dependencies

**Using pnpm (recommended):**
```bash
pnpm install
```

**Using npm:**
```bash
npm install
```

This will install all required packages:
- next@16
- react@19
- typescript
- tailwindcss@4
- framer-motion
- lucide-react
- sonner
- and more...

### Step 6: Start Development Server

**Using pnpm:**
```bash
pnpm dev
```

**Using npm:**
```bash
npm run dev
```

You should see:
```
> aa-company-pro@1.0.0 dev
> next dev

  ▲ Next.js 16.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local

Ready in 2.5s
```

### Step 7: Open in Browser

Navigate to: **http://localhost:3000**

---

## Development

### Project Structure

```
aa-company-pro/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles and animations
│   ├── about/page.tsx     # About Us page
│   ├── services/page.tsx  # Services page
│   ├── products/page.tsx  # Products page
│   └── contact/page.tsx   # Contact page
├── components/
│   ├── Navigation.tsx     # Header navigation
│   └── Footer.tsx         # Footer
├── public/                # Static files (images, icons)
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── next.config.ts         # Next.js config (Webpack enabled)
├── tailwind.config.ts     # Tailwind CSS v4 config
└── postcss.config.mjs     # PostCSS config
```

### Available Scripts

```bash
# Development server (with hot reload)
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint

# Format code
pnpm format

# Type checking
pnpm type-check
```

### Editing Content

#### Home Page
File: `app/page.tsx`
- Update hero section text
- Modify service cards
- Change statistics

#### About Page
File: `app/about/page.tsx`
- Edit timeline events
- Update company values
- Modify statistics

#### Services Page
File: `app/services/page.tsx`
- Add/remove services
- Update descriptions
- Modify features

#### Products Page
File: `app/products/page.tsx`
- Add/remove products
- Update categories
- Modify product details

#### Contact Page
File: `app/contact/page.tsx`
- Update contact information
- Modify form fields
- Change contact details

#### Navigation
File: `components/Navigation.tsx`
- Update logo text
- Modify navigation links
- Change button text

#### Footer
File: `components/Footer.tsx`
- Update company info
- Modify social links
- Change contact details

### Customizing Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#f0f9ff',
    600: '#0ea5e9',  // Change this
    700: '#0284c7',
  },
  accent: {
    600: '#f97316',  // Change this
    700: '#ea580c',
  },
}
```

### Adding New Pages

1. Create new folder in `app/` (e.g., `app/blog/`)
2. Create `page.tsx` inside
3. Add route to Navigation component

Example:
```typescript
// app/blog/page.tsx
export default function Blog() {
  return (
    <div>
      <h1>Blog Page</h1>
    </div>
  );
}
```

---

## Troubleshooting

### Issue: "Command not found: pnpm"

**Solution:**
```bash
npm install -g pnpm
```

### Issue: Port 3000 already in use

**Solution:**
```bash
# Use different port
pnpm dev -p 3001
```

### Issue: Module not found errors

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules
rm pnpm-lock.yaml  # or package-lock.json
pnpm install
```

### Issue: Tailwind CSS not working

**Solution:**
1. Verify `globals.css` has Tailwind directives:
   ```css
   @import "tailwindcss";
   ```
2. Check `tailwind.config.ts` content paths:
   ```typescript
   content: [
     './app/**/*.{js,ts,jsx,tsx}',
     './components/**/*.{js,ts,jsx,tsx}',
   ]
   ```

### Issue: Animations not working

**Solution:**
1. Verify Framer Motion is installed:
   ```bash
   pnpm add framer-motion
   ```
2. Check component imports:
   ```typescript
   import { motion } from 'framer-motion';
   ```

### Issue: Build fails

**Solution:**
```bash
# Clean build
rm -rf .next
pnpm build
```

---

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/aa-company-pro.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import GitHub repository
   - Click "Deploy"

3. **Custom Domain**
   - Go to project settings
   - Add custom domain
   - Update DNS records at registrar

### Deploy to Railway

1. **Create Railway Account**
   - Go to https://railway.app
   - Sign up with GitHub

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub"
   - Choose repository

3. **Configure**
   - Set environment variables if needed
   - Click "Deploy"

### Deploy to Other Platforms

Works with: Netlify, Render, DigitalOcean, AWS, Google Cloud, Azure

---

## Performance Tips

1. **Optimize Images**
   - Use Next.js Image component
   - Compress images before uploading

2. **Code Splitting**
   - Next.js handles automatically
   - Use dynamic imports for large components

3. **Caching**
   - Browser caching enabled
   - Static pages cached automatically

4. **Monitoring**
   - Use Vercel Analytics
   - Monitor Core Web Vitals

---

## Security

- ✅ TypeScript for type safety
- ✅ Content Security Policy headers
- ✅ XSS protection
- ✅ CSRF protection
- ✅ Secure headers configured

---

## Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **TypeScript**: https://www.typescriptlang.org/docs/

---

## FAQ

**Q: Can I use npm instead of pnpm?**
A: Yes, both work. pnpm is faster and more efficient.

**Q: How do I add a new service?**
A: Edit `app/services/page.tsx` and add to the services array.

**Q: How do I change the company name?**
A: Update "A & A Company" text in `app/layout.tsx`, `components/Navigation.tsx`, and `components/Footer.tsx`.

**Q: Can I add a blog section?**
A: Yes, create `app/blog/page.tsx` and add to navigation.

**Q: How do I add a contact form backend?**
A: Create API route in `app/api/contact/route.ts` to handle form submissions.

---

**Last Updated**: 2024
**Version**: 1.0.0
