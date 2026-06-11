#!/bin/bash
# Quick rebuild script - use this when you update images/content

echo "🔄 Updating site files..."
cd "$(dirname "$0")"

# Copy all images (including subdirectories) - skip iCloud-stubbed files
echo "📸 Copying images..."
mkdir -p _site/images
# Use find to copy only files that are actually readable (skip dataless iCloud stubs)
find src/images -type f -readable -exec bash -c 'mkdir -p "_site/images/$(dirname "${1#src/images/}")" && cp "$1" "_site/images/${1#src/images/}"' _ {} \; 2>/dev/null
# Fallback: try rsync then plain cp
rsync -av --delete src/images/ _site/images/ 2>/dev/null || cp -R src/images/* _site/images/ 2>/dev/null || true

# Rebuild CSS if needed
echo "🎨 Rebuilding CSS..."
npx sass src/sass:_site/css --style=compressed --no-source-map 2>/dev/null || true

echo ""
echo "✅ Done! Hard refresh your browser: ⌘ + Shift + R"
echo "   Logo should now be updated"
