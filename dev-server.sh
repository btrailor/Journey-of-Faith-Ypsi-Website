#!/bin/bash
# Simple development server script for Journey of Faith website

echo "🚀 Starting Journey of Faith development server..."
echo ""

# Navigate to project root
cd "$(dirname "$0")"

# Build the site first
echo "📦 Building site..."
./node_modules/.bin/eleventy --quiet
sass src/sass:_site/css --style=compressed --no-source-map

echo "✅ Build complete!"
echo ""
echo "🌐 Starting server at http://localhost:8000"
echo "Press Ctrl+C to stop"
echo ""

# Start server from _site directory
cd _site && python3 -m http.server 8000
