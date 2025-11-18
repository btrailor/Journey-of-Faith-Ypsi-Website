# Journey of Faith Website - Development Guide

## Quick Start

### Start Development Server

```bash
cd /Users/brettgershon/Documents/01_Projects/Websites/JoF/_site
python3 -m http.server 8000
```

Then open http://localhost:8000

### Update Logo or Images

When you update files in `src/images/`:

```bash
./quick-update.sh
```

Then hard refresh your browser: `⌘ + Shift + R`

### Full Rebuild (when changing content/structure)

```bash
npm run build
```

## Common Issues

### CSS not loading / Site looks broken

1. Make sure you're in the `_site` directory when starting the server
2. Hard refresh: `⌘ + Shift + R`
3. If still broken, run: `npm run build`

### Logo not updating

Run `./quick-update.sh` after changing the logo in `src/images/`

### Eleventy hangs/freezes

This is a known issue with Eleventy v3 + Node v20. Use the quick-update script for image changes instead of full rebuilds.

## File Structure

- `src/` - Source files (edit these)
- `_site/` - Built site (served by the web server)
- Changes in `src/` don't appear until you rebuild or run quick-update

## Logo Specifications

- Optimal dimensions: **420px height** (3x display size)
- Format: PNG-24 with transparency
- Quality: 90-100%
- Max file size: 200KB
