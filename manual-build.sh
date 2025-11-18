#!/bin/bash
# Manual build without Eleventy - copies everything needed

echo "🔧 Manual build (Eleventy-free)..."
cd "$(dirname "$0")"

# Build CSS
echo "🎨 Building CSS..."
sass src/sass:_site/css --style=compressed --no-source-map

# Copy all static assets
echo "📁 Copying assets..."
rsync -av --delete src/images/ _site/images/
rsync -av src/admin/ _site/admin/
rsync -av src/js/ _site/js/
rsync -av src/videos/ _site/videos/
cp src/site.webmanifest _site/

echo "✅ Build complete! HTML files unchanged."
echo "   Run: npm run serve"
