# Shalev Lau — Puzzles

A small photo portfolio: nine layout studies built around one set of photographs, in a light version and a dark "roll" version.

- `/` → `index.html`
- `/roll` → `roll.html`

The old `grid_website.html` URL now redirects to the new index.

## Files

```
index.html              Light page
roll.html               Dark page (same content, dark palette)
grid_website.html       Redirect kept for the old link
assets/site.css         Shared styles for both pages
assets/site.js          Photo data, page rendering, filmstrip and fade interactions
assets/shalev-lau.png   Portrait (also used as the favicon)
assets/bristol-1..7.webp Photographs used across the nine layouts
```

## Replace the photographs

All images live in `assets/` and are referenced from one place: the `PHOTOS` object at the top of `assets/site.js`.

1. Drop your new files into `assets/` (webp or jpg, around 1000–1600px wide is plenty).
2. Update the matching `src` and `alt` in `PHOTOS`:

```js
const PHOTOS = {
    portrait: {
        src: "assets/my-portrait.jpg",
        alt: "Shalev Lau in ..."
    },
    ...
};
```

The nine sections and the index thumbnails are generated from that object, so a swap updates every layout that uses the photo.

## Edit the identity / copy

- Name, role, bio, LinkedIn, email and footer live directly in `index.html` and `roll.html`.
- Puzzle titles, descriptions and thumbnails live in `PUZZLES` in `assets/site.js`.
- LinkedIn is set to `https://www.linkedin.com/in/shalevl/` everywhere.

If you change the name or links, update both HTML files (they are intentionally duplicated so each page can be deployed on its own).

## Deploy

The site is static, with no build step. Commit these files to the `main` branch of `altcar/bosco-grid`; Cloudflare Pages will publish them:

- `/` is now a real page instead of a 404.
- `/roll` keeps working.
- `/grid_website.html` redirects to `/`.

## Notes

- Responsive down to small phones, with a proper 2-column index, stacked sections and touch-friendly controls.
- The horizontal filmstrip uses native scrolling plus arrow buttons; the fade grid responds to hover and to tap.
- Reduced-motion preferences are respected, and the page works without hover-only interactions.
- The "outfit" imagery from the original placeholder is gone. The layouts now use real photographs (the neon portrait plus the Bristol/Cornwall set from shalev.eu.org). Add your own outfit photos to `PHOTOS` when the series is ready.
