# Journey of Faith Website - Change Log

## 2025-10-31 - Session Notes

### Logo Updates
- Fixed logo path in `site.json` to use `logo.svg` instead of `logo.png`
- Replaced logo multiple times with updated banner designs including church name and tagline
- Current logo is an SVG banner format (343KB)

### Header Layout Fix
- Modified header responsive breakpoints from `col-md-6` to `col-xl-6`
- Worship information now stacks below logo on all screen sizes except extra-large (1200px+)
- Prevents logo and text overlap on medium-sized screens

### Netlify Optimization (Build & Bandwidth Reduction)
- **Image Compression**: Optimized tagline images without quality loss
  - Chalice.png: 1.0MB → 631KB (37% reduction)
  - Cross.png: 461KB → 303KB (34% reduction)
  - Tree.png: 919KB → 350KB (62% reduction)
  - Total savings: ~1.4MB

- **Build Configuration** (`netlify.toml`):
  - Added NPM caching flags (`--prefer-offline --no-audit`)
  - Enabled `@netlify/plugin-caching` for node_modules caching
  - Added `build.ignore` to skip rebuilds for documentation-only changes

- **Caching Headers**:
  - Static assets: 1 year cache
  - Images: 1 month cache
  - HTML files: 1 hour cache with revalidation

### Site Data Updates
- Updated address in `site.json` to Ypsilanti, MI
- Updated email to `pastorsarahlynne@gmail.com`

## Expected Impact
- 30-50% reduction in Netlify build minutes
- Significant bandwidth savings from browser caching
- Faster build times from dependency caching
- Fewer unnecessary rebuilds

## Future Considerations
- Logo may be updated again to refine banner design with church name and tagline
