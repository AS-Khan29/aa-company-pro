# A & A Company - Professional Website

A premium, production-ready Next.js website for A & A Company, a leading defense and automotive parts supplier with 30+ years of experience.

## 🌟 Features

### Pages
- **Home** - Hero section with animations, service overview, and statistics
- **About Us** - Company timeline with 8 historical milestones
- **Services** - Detailed service offerings with feature lists
- **Products** - Interactive product catalog with category filtering
- **Contact** - Dual-tab forms for contact inquiries and quote requests

### Design & UX
- ✅ Premium Industrial Heritage Modernism aesthetic
- ✅ Smooth animations and transitions (Framer Motion)
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Professional color scheme (Steel Blue + Rust Orange)
- ✅ Beautiful typography (Playfair Display + Inter)
- ✅ Interactive hover effects and micro-interactions
- ✅ Optimized performance and accessibility

### Technical Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Notifications**: Sonner
- **Build Tool**: Webpack (not Turbopack)
- **Node.js**: 22 LTS

## 🚀 Quick Start

### Prerequisites
- Node.js 22 LTS or higher
- pnpm (recommended) or npm

### Installation

1. **Clone or extract the project**
   ```bash
   cd aa-company-pro
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
aa-company-pro/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── about/
│   │   └── page.tsx         # About Us page
│   ├── services/
│   │   └── page.tsx         # Services page
│   ├── products/
│   │   └── page.tsx         # Products page
│   ├── contact/
│   │   └── page.tsx         # Contact page
│   └── api/                 # API routes
├── components/
│   ├── Navigation.tsx       # Navigation component
│   └── Footer.tsx           # Footer component
├── public/                  # Static assets
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── next.config.ts           # Next.js config
├── tailwind.config.ts       # Tailwind config
└── postcss.config.mjs       # PostCSS config
```

## 🎨 Customization

### Update Company Information
Edit the following files to customize company details:
- `components/Navigation.tsx` - Logo and navigation links
- `components/Footer.tsx` - Contact information and social links
- `app/page.tsx` - Home page content
- `app/about/page.tsx` - Company history and values

### Change Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  primary: { 600: '#0ea5e9', ... },
  accent: { 600: '#f97316', ... },
}
```

### Modify Content
All page content is directly in the component files and can be easily edited.

## 🔧 Configuration

### Environment Variables
Create `.env.local` if needed:
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Build for Production
```bash
pnpm build
pnpm start
```

## 📦 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy with one click

### Railway
1. Create Railway account
2. Connect GitHub repository
3. Deploy automatically

### Other Platforms
Works with any platform that supports Next.js (Netlify, Render, etc.)

## 🎯 Performance

- ✅ Optimized images and lazy loading
- ✅ Code splitting and tree shaking
- ✅ CSS-in-JS optimization
- ✅ Fast refresh for development
- ✅ SEO optimized with meta tags

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Support

For questions or issues, contact: info@aacompany.com

## 📄 License

© 2024 A & A Company. All rights reserved.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
