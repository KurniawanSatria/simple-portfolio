# Portfolio Web Application

A professional portfolio website built with React, Express, and Tailwind CSS.

## Deployment to Railway

### Prerequisites
- GitHub repository with your code
- Railway account (https://railway.app)

### Steps to Deploy

1. Push your code to GitHub
2. Log in to Railway using your GitHub account
3. Create a new project from GitHub
4. Select your repository
5. Configure Environment Variables (if needed)
6. Deploy

### Before Deploying

For successful deployment to Railway, run the fix script before deploying:

```bash
# Run this script before deploying to Railway
node fix-vite-config.js
# This will create a fixed vite config that works with Railway
```

Then commit and push the fixed configuration to GitHub.

### Environment Variables

Railway automatically sets the `PORT` environment variable which our application uses.

### Troubleshooting

If you encounter build errors:

1. Check Railway logs for detailed error messages
2. Make sure the fix script was run and vite.config.fixed.ts was created
3. Update nixpacks.toml if specific Node.js version is required

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```