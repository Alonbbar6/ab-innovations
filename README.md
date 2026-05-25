# AB Innovation

Simple static website for AB Innovation, an AI and software development studio.

## Architecture

- `index.html` contains all page sections: hero, services, portfolio, products, pricing, about, and contact.
- `styles.css` contains the responsive visual design, dark mode styles, cards, grids, and mobile navigation.
- `script.js` contains dark/light mode, mobile menu behavior, product search/filtering, and contact form demo handling.

## Local Development

Open `index.html` directly in your browser. No install step is required.

## GitHub Pages Deployment

This project can deploy as a static Next.js export on GitHub Pages.

1. Push this folder to a GitHub repository.
2. In GitHub, open the repository settings.
3. Go to Pages.
4. Set the source to GitHub Actions.
5. Push to `main`, or run the `Deploy to GitHub Pages` workflow manually.

The workflow builds the Next.js app into `out/` and publishes that folder. If the repository is a project site, asset paths are automatically prefixed with the repository name. If it is a `username.github.io` site, no prefix is used.

GitHub Pages only hosts static files. Contact and newsletter forms need a third-party form service, a CRM endpoint, or another backend to receive submissions.

## Netlify Deployment

Deploy as a static site:

1. Push this folder to GitHub.
2. Create a new Netlify site from the repository.
3. Leave the build command blank.
4. Set the publish directory to the project root.
5. Netlify will serve `index.html`.

## Content Customization

Update `index.html` for visible content:

- Navigation links
- Service cards
- Portfolio projects
- Product/storefront cards
- Pricing plans
- About copy
- Contact links

Update `styles.css` for colors, spacing, typography, and layout.

## Future Upgrade Ideas

- Connect the contact form to Netlify Forms, Formspree, HubSpot, Airtable, or a CRM webhook.
- Add Stripe Checkout, Lemon Squeezy, or Gumroad for product sales.
- Add individual case study pages.
- Add a blog or newsletter archive.
- Upgrade back to Next.js when you want multiple routed pages, CMS content, and app-like features.
