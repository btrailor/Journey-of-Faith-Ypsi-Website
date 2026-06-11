#!/bin/bash
# Simple development server script for Journey of Faith website

echo "🚀 Starting Journey of Faith development server..."
echo ""

# Navigate to project root
cd "$(dirname "$0")"

# Build the site first
echo "📦 Building site..."
npx @11ty/eleventy --quiet
npx sass src/sass:_site/css --style=compressed --no-source-map

# Sync images (skip iCloud-stubbed files)
echo "📸 Syncing images..."
mkdir -p _site/images
find src/images -type f -readable -exec bash -c 'mkdir -p "_site/images/$(dirname "${1#src/images/}")" && cp "$1" "_site/images/${1#src/images/}"' _ {} \; 2>/dev/null
rsync -av --delete src/images/ _site/images/ 2>/dev/null || true

echo "✅ Build complete!"
echo ""
echo "🌐 Starting server at http://localhost:8000"
echo "Press Ctrl+C to stop"
echo ""

# Start server from _site directory
cd _site && python3 -m http.server 8000
