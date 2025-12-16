# MicroSolutions Technology Limited - Official Website

Professional software development agency website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- ✨ Smooth scroll navigation between sections
- 🎨 Modern animations with Framer Motion
- 📱 Fully responsive design
- 🎯 Service modals with detailed information
- 📊 Animated statistics counters
- 💬 Client testimonials section
- 📝 Contact form with mailto integration
- 🔍 SEO optimized with meta tags and structured data
- 🌐 Ready for Vercel deployment
- 📈 Vercel Analytics integrated

## 📦 Tech Stack

- **Framework:** React 18+ with TypeScript
- **Styling:** Tailwind CSS v4.0
- **Animations:** Framer Motion (motion/react)
- **Icons:** Lucide React
- **Notifications:** Sonner (toast)
- **Analytics:** Vercel Analytics
- **Build Tool:** Vite

## 🎯 Sections

1. **Hero** - Eye-catching landing section with CTA
2. **About** - Company overview and mission
3. **Services** - Four core services (MSConsult, MSSoft, MSCom, MSMan)
4. **Stats** - Animated performance metrics
5. **Process** - Development workflow visualization
6. **Testimonials** - Client success stories
7. **FAQ** - Common questions and answers
8. **Contact** - Get in touch form
9. **Footer** - Contact information and social links

## 🛠️ Deployment on Vercel

### Quick Deploy

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"

### Configuration

The project includes optimized Vercel configuration (`vercel.json`):
- SPA routing support
- Security headers (XSS, Content-Type, Frame protection)
- Asset caching for images and fonts
- Automatic build settings for Vite

### Environment Setup (Optional)

If you add environment variables later:

1. In Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add any required variables
3. Redeploy the project

### Custom Domain

After deployment:
1. Go to Project Settings → Domains
2. Add your custom domain: `www.microsolutionsngr.com`
3. Follow Vercel's DNS configuration instructions
4. Update the canonical URL in `/index.html` if needed

### Vercel Analytics

Analytics is automatically enabled once deployed:
- View real-time visitor data in Vercel Dashboard → Analytics
- Track page views, unique visitors, and top pages
- Monitor performance metrics (Core Web Vitals)
- No additional configuration needed - it works out of the box!
- Analytics and Speed Insights are automatically injected by Vercel on deployment

## 📧 Contact Integration

Forms currently use mailto protocol to `info@microsolutionsngr.com`. For production, consider:
- Setting up a contact form service (FormSpree, EmailJS)
- Implementing serverless API endpoints
- Using Vercel Functions for form handling

## 🎨 Typography System

- **Headings:** Helvetica
- **Body Text:** Nunito
- Responsive scaling across all devices

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 SEO Configuration

The site includes comprehensive SEO setup:

### Meta Tags & Social Media
- Primary meta tags (title, description, keywords)
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags
- Geo-location tags for Nigeria (Lagos)
- Language and distribution settings

### Structured Data (Schema.org)
- **Organization Schema** - Company information
- **LocalBusiness Schema** - Location and hours
- **Service Schema** - All 4 service offerings
- **Breadcrumb Schema** - Site navigation
- **WebSite Schema** - Search action support

### SEO Files
- **robots.txt** - Search engine crawling rules
- **sitemap.xml** - Complete site structure with all sections
- **manifest.json** - PWA support and mobile app metadata
- **browserconfig.xml** - Windows tile configuration

### Search Engine Coverage
Optimized for:
- Google (Googlebot)
- Bing (Bingbot)
- Yahoo (Slurp)
- DuckDuckGo (DuckDuckBot)
- Baidu (Baiduspider)
- Yandex (YandexBot)

## 🔐 Security Headers

Configured via `vercel.json`:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block

## 📊 Performance Optimizations

- Asset preloading
- Font optimization
- Image lazy loading
- Code splitting via Vite
- Cache headers for static assets

## 🐛 Troubleshooting

**Build Errors:**
- Ensure all dependencies are in package.json
- Check Node version compatibility (16.x or higher)

**Routing Issues:**
- Verify `vercel.json` rewrites configuration
- Check that all internal links use hash navigation (#section-id)

**Image Loading:**
- Ensure logo file `3c8f572fa709f1fcc9d13a7d8671fd834447e28e.png` is in public directory
- Verify image paths in components

## 📞 Support

For technical issues or questions:
- Email: info@microsolutionsngr.com
- Phone: +234-808-232-3060

## 📝 License

© 2025 MicroSolutions Technology Limited. All rights reserved.