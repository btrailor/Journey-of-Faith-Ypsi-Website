# Church Website

A modern, responsive static website built with 11ty (Eleventy), Bootstrap 5, and Decap CMS for easy content management.

## Features

- **Static Site Generator**: Built with 11ty for fast, secure static pages
- **Responsive Design**: Bootstrap 5 ensures the site looks great on all devices
- **Content Management**: Decap CMS provides a user-friendly admin interface
- **Sermon Archive**: Organized collection of sermons with audio/video support
- **Events Calendar**: Showcase upcoming church events
- **Easy Customization**: Sass-based styling for easy theming

## Project Structure

```
├── src/
│   ├── _data/           # Global data files (site settings)
│   ├── _includes/       # Reusable components (navigation, footer)
│   ├── _layouts/        # Page layouts (base, page)
│   ├── admin/           # Decap CMS configuration
│   ├── events/          # Event posts (Markdown)
│   ├── images/          # Image assets
│   ├── sass/            # Sass stylesheets
│   ├── sermons/         # Sermon posts (Markdown)
│   ├── about.md         # About page
│   ├── contact.md       # Contact page
│   ├── events.njk       # Events listing page
│   ├── index.njk        # Homepage
│   └── sermons.njk      # Sermons listing page
├── .eleventy.js         # 11ty configuration
└── package.json         # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

This will start both the 11ty server and Sass compiler in watch mode. The site will be available at `http://localhost:8080`.

### Building for Production

```bash
npm run build
```

This creates an optimized build in the `_site` directory.

## Customization

### Site Information

Edit [src/_data/site.json](src/_data/site.json) to update:
- Church name
- Contact information
- Service times
- Address

### Styling

The main stylesheet is at [src/sass/main.scss](src/sass/main.scss). You can:
- Override Bootstrap variables by adding them before the Bootstrap import
- Add custom styles at the bottom of the file
- Modify colors, fonts, spacing, etc.

### Content Management

#### Using Decap CMS (Recommended for Non-Technical Users)

1. After deploying to Netlify/GitHub Pages, access the admin panel at `/admin`
2. Authenticate with your GitHub account
3. Use the visual editor to:
   - Edit pages (Home, About, Contact)
   - Add/edit sermons
   - Add/edit events
   - Update site settings

#### Manual Content Editing

You can also edit content directly:

**Pages**: Edit Markdown files in `src/` (e.g., `about.md`, `contact.md`)

**Sermons**: Add new files to `src/sermons/` following this format:
```markdown
---
layout: page
title: Your Sermon Title
date: 2024-01-15
pastor: Pastor Name
scripture: John 3:16
series: Optional Series Name
---

Your sermon content here...
```

**Events**: Add new files to `src/events/` following this format:
```markdown
---
layout: page
title: Event Name
date: 2024-01-15
eventDate: 2024-02-15T18:00:00
location: Event Location
---

Event description here...
```

## Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `_site`
4. Enable Netlify Identity for Decap CMS authentication

### GitHub Pages

1. Build the site: `npm run build`
2. Deploy the `_site` directory to GitHub Pages

### Other Hosts

Upload the contents of the `_site` directory to any web host that serves static files.

## Development

### Available Scripts

- `npm start` - Start development server with live reload
- `npm run build` - Build for production
- `npm run start:eleventy` - Start only 11ty server
- `npm run start:sass` - Start only Sass compiler

### Adding New Pages

1. Create a new `.md` or `.njk` file in `src/`
2. Add front matter with at least a `layout` and `title`
3. Add navigation link in [src/_includes/navigation.njk](src/_includes/navigation.njk)

### Modifying Layouts

- **Base Layout**: [src/_layouts/base.njk](src/_layouts/base.njk) - Main HTML structure
- **Page Layout**: [src/_layouts/page.njk](src/_layouts/page.njk) - Standard page layout

## Technologies Used

- [11ty](https://www.11ty.dev/) - Static site generator
- [Bootstrap 5](https://getbootstrap.com/) - CSS framework
- [Sass](https://sass-lang.com/) - CSS preprocessor
- [Decap CMS](https://decapcms.org/) - Content management system
- [Nunjucks](https://mozilla.github.io/nunjucks/) - Templating language

## Support

For 11ty documentation: https://www.11ty.dev/docs/
For Bootstrap documentation: https://getbootstrap.com/docs/
For Decap CMS documentation: https://decapcms.org/docs/

## License

MIT
