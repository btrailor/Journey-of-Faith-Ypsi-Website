#!/bin/bash
# Quick rebuild script - use this when you update images/content

echo "🔄 Updating site files..."
cd "$(dirname "$0")"

# Copy all images (including subdirectories)
echo "📸 Copying images..."
rsync -av --delete src/images/ _site/images/ 2>/dev/null || cp -R src/images/* _site/images/ 2>/dev/null || true

# Rebuild CSS if needed
echo "🎨 Rebuilding CSS..."
sass src/sass:_site/css --style=compressed --no-source-map 2>/dev/null || true

echo ""
echo "✅ Done! Hard refresh your browser: ⌘ + Shift + R"
echo "   Logo should now be updated"
