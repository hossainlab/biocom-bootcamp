# BioCom BootCamp - Deployment Guide

## Netlify Deployment

This project is ready for deployment on Netlify. Follow these steps:

### 1. Direct Netlify Deployment

1. **Connect to Netlify:**
   - Go to [Netlify](https://www.netlify.com/)
   - Click "New site from Git"
   - Connect your repository

2. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18` (set in `netlify.toml`)

### 2. Manual Deployment

If deploying manually:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# The dist/ folder contains the built files
# Upload the contents of dist/ to your hosting provider
```

### 3. Environment Setup

The project includes:
- ✅ `netlify.toml` configuration file
- ✅ Proper build settings
- ✅ SPA routing redirects
- ✅ Security headers
- ✅ Asset caching

### 4. Image Assets

Image folders are created for:
- `/public/images/speakers/` - Speaker photos
- `/public/images/partners/` - Partner university logos  
- `/public/images/sponsors/` - Sponsor company logos

Add actual images to these folders before deployment.

### 5. Logo & Branding

- ✅ Custom bioinformatics-themed logo (`/public/biocom-logo.svg`)
- ✅ Custom favicon (`/public/favicon.svg`)
- ✅ SEO meta tags with Open Graph and Twitter Card support

### 6. Performance Optimizations

- Tailwind CSS for optimal CSS size
- React with Vite for fast builds
- Asset optimization and caching headers
- Responsive design for all devices

## Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
biocom-bootcamp/
├── public/
│   ├── images/
│   │   ├── speakers/
│   │   ├── partners/
│   │   └── sponsors/
│   ├── biocom-logo.svg
│   ├── favicon.svg
│   └── favicon.ico
├── src/
│   ├── components/
│   └── assets/
├── netlify.toml
└── package.json
```

The project is now deployment-ready with all assets and configurations in place!