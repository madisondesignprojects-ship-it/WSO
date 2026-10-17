# West Star Organics website refresh

A responsive, static multi-page website refresh for West Star Organics, preserving the existing forest-green, leaf-green, sage and warm-paper palette.

## Site pages
- `index.html` — refreshed homepage and overview of the business
- `garden-center/index.html` — plant categories, certified and organically managed plants, and growing method
- `variety-list/index.html` — dedicated page linking the 2026 retail plant variety PDF
- `growmix/index.html` — GrowMix features, use cases, images and all four original prices
- `about-us/index.html` — farm history, timeline, family, mission, passion and values
- `blog/index.html` — separate blog archive
- `current-hours-availability/index.html` — full current-hours post
- `seed-and-growmix/index.html` — full GrowMix availability post
- `wholesale/index.html` — wholesale inquiry page based on the existing site navigation and published business history
- `contact-us/index.html` — dedicated contact page with email, phone, address, map and contact form
- `styles.css` — shared responsive design system
- `script.js` — mobile navigation and contact-form behavior

## Notes
- No build step or package installation is required.
- The contact form opens the visitor's email application with a prepared message addressed to info@weststarorganics.com. It does not send directly from the website.
- The logo, photos and certification marks are currently referenced from the existing WordPress site's media URLs. Copy these media assets into this repository before repointing the main domain or retiring the old WordPress hosting; otherwise those URLs could stop resolving after a domain change.
- The site retains the supplied content for the seasonal-hours notice and 2026 plant-variety PDF. Update both when the business publishes its 2027 seasonal information and list.
