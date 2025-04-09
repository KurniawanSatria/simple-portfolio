// Script to fix vite.config.ts for Railway deployment
const fs = require('fs');
const path = require('path');

// Original vite.config.ts content
const configContent = fs.readFileSync('vite.config.ts', 'utf8');

// Replace import.meta.dirname with __dirname
const fixedContent = configContent
  .replace(/import\.meta\.dirname/g, 'path.resolve(".")')
  .replace('import path from "path";', 'import * as path from "path";');

// Write fixed content
fs.writeFileSync('vite.config.fixed.ts', fixedContent);
console.log('Created fixed vite config for Railway deployment');