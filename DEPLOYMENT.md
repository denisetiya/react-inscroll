# Deployment Guide

## Deploy Demo to Vercel

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/denisetiya/react-inscroll)

### Manual Deploy

1. **Clone the repository**
   ```bash
   git clone https://github.com/denisetiya/react-inscroll.git
   cd react-inscroll
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build demo for Vercel**
   ```bash
   npm run build:vercel
   ```

4. **Deploy to Vercel**
   ```bash
   npx vercel --prod
   ```

### Environment Setup

The project includes:
- `vercel.json` - Vercel configuration
- `build:vercel` script - Builds demo app for Vercel
- Optimized build settings for static deployment

### Build Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build library for NPM |
| `npm run build:demo` | Build demo app |
| `npm run build:vercel` | Build demo for Vercel deployment |
| `npm run preview:demo` | Preview demo build locally |

### Project Structure for Deployment

```
react-inscroll/
├── src/
│   ├── lib/           # Library source code
│   ├── App.tsx        # Demo application
│   └── main.tsx       # Demo entry point
├── dist/              # Built library (for NPM)
├── dist-demo/         # Built demo (for Vercel)
├── vercel.json        # Vercel configuration
└── vite.config.ts     # Vite configuration with demo mode
```

### Vercel Configuration

The `vercel.json` file includes:
- Static build configuration
- SPA routing setup
- Asset caching headers
- Build command specification

### Custom Domain (Optional)

To use a custom domain:
1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings > Domains
4. Add your custom domain

### Environment Variables

No environment variables required for the demo deployment.

### Troubleshooting

**Build fails on Vercel:**
- Check that all dependencies are in `dependencies` not `devDependencies`
- Ensure Node.js version compatibility

**Routing issues:**
- The `vercel.json` includes SPA routing configuration
- All routes redirect to `index.html` for client-side routing

**Assets not loading:**
- Check the `base: './'` configuration in `vite.config.ts`
- Ensure relative paths are used for assets

### Local Testing

Test the demo build locally before deploying:

```bash
# Build demo
npm run build:vercel

# Preview demo
npm run preview:demo
```

The demo will be available at `http://localhost:4173`
